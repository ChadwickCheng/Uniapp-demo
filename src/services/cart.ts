import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

// 加入购物车
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

// 获取购物车列表
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

// 删除购物车商品 data是skuids集合
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: `/member/cart`,
    data,
  })
}

// 修改购物车数量
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: {
    selected?: boolean
    count?: number
  },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

// 购物车全选取消全选
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: `/member/cart/selected`,
    data,
  })
}
