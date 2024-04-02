<template>
  <CustomNavbar />
  <scroll-view
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrolltoLower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
      <uni-card>
        <text>她来自烦星</text>
      </uni-card>
    </template>
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
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from '@/pages/index/Components/PageSkeleton.vue'

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

// 滚动触底自动触发
// 获取子组件实例
const guessRef = ref<XtxGuessInstance>()
const onScrolltoLower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新状态
const isTriggered = ref(false)
// 下拉刷新 可以当作一个生命周期钩子
const onRefresherrefresh = () => {
  // 开始动画
  isTriggered.value = true
  // 重置猜你喜欢
  guessRef.value?.resetData()
  getHomeBannerData()
  getCategoryData()
  getHotData()
  guessRef.value?.getMore()
  // 结束动画
  // 计时器是宏任务，会在微任务之后执行。或者promise.all
  setTimeout(() => {
    isTriggered.value = false
  }, 1000)
}

const isLoading = ref(false)
// uniapp生命周期
onLoad(() => {
  isLoading.value = true
  getHomeBannerData()
  getCategoryData()
  getHotData()
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
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
