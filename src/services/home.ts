import type { BannerItem } from '@/types/home'
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

export { getHomeBannerAPI }
