import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

// 封装获取首页轮播图数据
const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}

// 首页分类
const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

export { getHomeBannerAPI, getHomeCategoryAPI }
