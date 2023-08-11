<script setup lang="ts">
import { ref } from "vue";
import type { RadioGroupProps, SelectProps } from 'ant-design-vue';

const nameList = ["Jack", "John", "Mike"]
const radioOptions: RadioGroupProps['options'] = [
    {
        label: "One",
        value: "One"
    },
    {
        label: "Two",
        value: "Two"
    },
]

const selectOptions: SelectProps['options'] = [
    {
        label: "A",
        value: "A"
    },
    {
        label: "B",
        value: "B"
    },
    {
        label: "C",
        value: "C"
    },
    {
        label: "D",
        value: "D"
    },
]

const text = ref("Edit me");
const checked = ref(true);
const checkedNames = ref([nameList[0]]);
const picked = ref("One");
const selected = ref<string | undefined>();
const multiSelected = ref<string[] | undefined>();
</script>

<!-- 使用 v-model 指令在状态和表单输入之间创建双向绑定。 -->
<template>
    <div>
        <a-space direction="vertical">
            <div>
                <a-typography-title :level="2">Text Input</a-typography-title>
                <!-- <a-input
      style="padding: 0; width: 50%"
      :class="{ textInput: true }" -->
                <a-input class="textInput textInputTest" size="small" showCount allowClear v-model:value="text" />
                {{ text }}
            </div>

            <div>
                <a-typography-title :level="2">Checkbox</a-typography-title>
                <!-- <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Checked: {{ checked }}</label> -->
                <a-checkbox id="aCheckbox" v-model:checked="checked" />
                <label for="aCheckbox"> isChecked: {{ checked }}</label>
            </div>

            <!-- 多个复选框可以绑定到相同的 v-model 数组 -->
            <div>
                <a-typography-title :level="2">Multi Checkbox</a-typography-title>
                <!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label> -->

                <a-checkbox-group :options="nameList" v-model:value="checkedNames" />

                <p>
                    Checked names:
                <pre>{{ checkedNames }}</pre>
                </p>
            </div>

            <div>
                <a-typography-title :level="2">Radio</a-typography-title>
                <!-- <input type="radio" id="one" value="One" v-model="picked">
                <label for="one">One</label>
                <br>
                <input type="radio" id="two" value="Two" v-model="picked">
                <label for="two">Two</label>
                <br> -->

                <a-radio-group :options="radioOptions" v-model:value="picked" />
                <span>Picked: {{ picked }}</span>
            </div>

            <div>
                <a-typography-title :level="2">Select</a-typography-title>
                <!-- <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select> -->

                <a-select style="width: 50%" placeholder="Please select" v-model:value="selected"
                    :options="selectOptions" />
                <br />
                <span>Selected: {{ selected }}</span>
            </div>

            <div>
                <a-typography-title :level="2">Multi Select</a-typography-title>
                <!-- <select v-model="multiSelected" multiple style="width:100px">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select> -->

                <a-select style="width: 80%" mode="multiple" placeholder="Please select" allowClear
                    v-model:value="multiSelected" :options="selectOptions" />
            </div>
        </a-space>
    </div>
</template>

<style scoped>
.textInput {
    width: 50%;
}

/* .textInputTest {
  background-color: red;
} */
</style>
