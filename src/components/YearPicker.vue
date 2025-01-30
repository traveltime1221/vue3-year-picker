<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, computed } from 'vue'
const props = defineProps({
    year: {
        type: Number,
        default: 114
    },
    icon: {
        type: Object,
        default: () => ({
            prev: '<',
            next: '>'
        })
    }
})

let inputYear = ref(0)
let selectedYear = ref(0)
let showYearPicker = ref(false)
let isClickingButton = ref(false)
let perYear = 12
let currentRange = ref({
    start: 2020,
    end: 2029
})

const years = computed(() => {
  return Array.from({ length: perYear }, (_, i) => currentRange.value.start + i)
})

const emit = defineEmits<{
    (event: 'update:year', year: number): void
}>()

const handleBlur = () => {
    setTimeout(() => {
        if (!isClickingButton.value) {
            showYearPicker.value = false
        }
    }, 200)
    const year = inputYear.value
    if (!isNaN(year) && year >= 1 && year <= 300) {
        selectedYear.value = toWesternYear(year)
    } else {
        inputYear.value = toTaiwanYear(selectedYear.value)
    }
}

const prevRange = () => {
    isClickingButton.value = true
    if (currentRange.value.start < 1911) return
    currentRange.value.start -= perYear
    currentRange.value.end -= perYear
    setTimeout(() => {
        isClickingButton.value = false
    }, 200)
}

const nextRange = () => {
    isClickingButton.value = true // 標記正在點擊按鈕
    currentRange.value.start += perYear
    currentRange.value.end += perYear
    setTimeout(() => (isClickingButton.value = false), 200) // 延遲重置
}

const toTaiwanYear = (year:number) => year - 1911
const toWesternYear = (taiwanYear:number) => Number(taiwanYear) + 1911

// 選擇年份
const selectYear = (year: number) => {
    selectedYear.value = year
    inputYear.value = toTaiwanYear(year) // 更新輸入匡為民國年
    showYearPicker.value = false
    emit('update:year', Number(year) - 1911)
}

onMounted(() => {
    inputYear.value = props.year
    handleBlur()
})

</script>


<template>
    <div class="year-picker">
        <!-- 輸入框，點擊展開或收起選單 -->
        <div class="input-container">
            <input v-model="inputYear" type="text" placeholder="輸入民國年份或點擊選擇" @focus="showYearPicker = true"
                @blur="handleBlur" />
            <!-- <button class="toggle-button" @click="toggleYearPicker">
            {{ showYearPicker ? "▲" : "▼" }}
          </button> -->
        </div>

        <!-- 年份選單 -->
        <div v-if="showYearPicker" class="dropdown">
            <div class="range-header">
                <button class="btn bg-transparent" @click="prevRange" :disabled="currentRange.start < 1913">
                    <img width="20" :src="icon.prev" alt="" />
                </button>
                <span class="range-title">
                    民國 {{ toTaiwanYear(currentRange.start) }} ~
                    {{ toTaiwanYear(currentRange.end) }}
                </span>
                <button class="btn bg-transparent" @click="nextRange">
                    <img width="20" :src="icon.next" alt="" />
                </button>
            </div>

            <div class="year-grid">
                <button v-for="year in years" :key="year" @click="selectYear(year)"
                    :class="{ selected: year === selectedYear }">
                    {{ toTaiwanYear(year) }}
                </button>
            </div>
        </div>

        <!-- 顯示選擇結果 -->
        <!-- <p v-if="selectedYear">
          您選擇的年份是：西元 {{ selectedYear }} 年 (民國
          {{ toTaiwanYear(selectedYear) }} 年)
        </p> -->
    </div>
</template>

<style scoped>
.year-picker {
    font-family: Arial, sans-serif;
    text-align: center;
}

.year-picker .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.year-picker input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 0;
    border: 1px solid #eee;
}

.year-picker .toggle-button {
    padding: 8px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
}

.year-picker .toggle-button:hover {
    background-color: #e0e0e0;
}

.year-picker .dropdown {
    position: absolute;
    /* width: 100%; */
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 0;
    z-index: 10;
}

.year-picker .range-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 8px;
    line-height: 20px;
    color: black;
}

.year-picker .range-header button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.year-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 0px 10px 10px 10px;
}

.year-grid button {
    padding: 4px 10px;
    font-size: 16px;
    outline: 0;
    border: 0;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
}

.year-grid button:hover {
    background-color: #007bff;
    color: white;
    opacity: 0.5;
    transition: 0.3s;
}

.year-grid button.selected {
    transition: 0.3s;
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
}

p {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}
</style>