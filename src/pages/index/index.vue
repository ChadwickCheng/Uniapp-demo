<template>
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess />
    <uni-card>
      <text>她来自烦星</text>
    </uni-card>
  </scroll-view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './Components/CustomNavbar.vue'
import CategoryPanel from './Components/CategoryPanel.vue'
import HotPanel from './Components/HotPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

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

// 获取热门数据
const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// uniapp生命周期
onLoad(() => {
  getHomeBannerData()
  getCategoryData()
  getHotData()
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
