<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <uni-card>
    <text>她来自烦星</text>
  </uni-card>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './Components/CustomNavbar.vue'
import CategoryPanel from './Components/CategoryPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取分类数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// uniapp生命周期
onLoad(() => {
  getHomeBannerData()
  getCategoryData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
