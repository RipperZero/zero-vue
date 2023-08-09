<script setup lang="ts">
import { ref, computed } from "vue";
import type { TableColumnType, TableProps } from "ant-design-vue";

export type GridProps = {
  data: { name: string; power: number }[];
  columns: string[];
  filterKey: string;
};

type TableData = {
  key: string;
  name: string;
  power: number;
};

const props = defineProps<GridProps>();

const sortKey = ref("");
const sortOrders = ref(
  // FIXME
  props.columns.reduce((o: any, key) => ((o[key] = 1), o), {}),
);

const filteredData = computed(() => {
  let { data, filterKey } = props;

  if (filterKey) {
    filterKey = filterKey.toLowerCase();

    data = data.filter((row: Record<string, string | number>) => {
      const paramsKeys = Object.keys(row);

      return paramsKeys.some((paramKey: string) => {
        const paramValue = row[paramKey];

        return paramValue.toString().toLowerCase().indexOf(filterKey) > -1;
      });
    });
  }

  const key = sortKey.value;

  if (key) {
    const order = sortOrders.value[key];

    data = data.slice().sort((a, b) => {
      // @ts-ignore:next-line
      a = a[key];
      // @ts-ignore:next-line
      b = b[key];
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }

  return data;
});

const sortBy = (key: string) => {
  sortKey.value = key;
  sortOrders.value[key] *= -1;
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const tableColumns: TableColumnType<TableData>[] = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => {
      return a.name.length - b.name.length;
    },
  },
  {
    title: "Power",
    dataIndex: "power",
    sorter: (a, b) => {
      return a.power - b.power;
    },
  },
];

const data = props.data.map<TableData>((item, index) => {
  return {
    key: index.toString(),
    name: item.name,
    power: item.power,
  };
});
</script>

<template>
  <a-space direction="vertical" style="width: 100%">
    <table v-if="filteredData.length > 0">
      <thead>
        <tr>
          <th
            v-for="key in columns"
            :class="{ active: sortKey === key }"
            @click="sortBy(key)"
          >
            {{ capitalize(key) }}
            <span
              class="arrow"
              :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
            ></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredData">
          <td v-for="key in columns">
            {{
              // @ts-ignore:next-line
              entry[key]
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="filteredData.length === 0">No matches found.</p>

    <a-table :columns="tableColumns" :data-source="data" />
  </a-space>
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
