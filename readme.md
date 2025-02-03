# vue3-year-picker

這是一個非常簡易而且只有選擇年份的 Vue3 組件，支持西元轉民國年份轉換。

![範例](https://github.com/traveltime1221/vue3-year-picker/raw/main/src/assets/image/example.gif)

## 安裝

### 安裝方式
```
npm install vue3-year-picker
```

### 解決安裝衝突
如果專案包含 ESLint，安裝本套件時可能會遇到依賴衝突。可使用以下方法進行安裝處理：
```
npm install vue3-year-picker --legacy-peer-deps
```

### 其他版本
如果需要 vue2 版本可以前往此處：[vue2-year-picker](https://www.npmjs.com/package/vue2-year-picker)

## 使用方式
```
<script lang="ts" setup>
import YearPicker from 'vue3-year-picker'
import {ref} from 'vue'

let year = ref(114)
let icon = ref({ // 放置圖片路徑
  prev: '',
  next: '' 
}) 
</script>

<template>
  <YearPicker
    v-model:year="year"
    :icon="icon"
  />
</template>
```

## 屬性
|  參數 | 類型 | 描述 | 
| -------- | -------- | -------- | 
| year    | Number     | 預設、傳遞選擇年份     | 
| icon    | Object     | 傳遞圖片路徑, prev: 上一頁, next: 下一頁     | 


## 版本歷程
* 1.0.2 文件 keyword 修正
* 1.0.1 git連結錯誤修正
* 1.0.0 第一次發布

## License
MIT
