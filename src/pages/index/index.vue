<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <uni-card>
    <text>她来自烦星</text>
  </uni-card>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './Components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// uniapp生命周期
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
//
</style>
