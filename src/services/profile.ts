// 个人信息
import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

// 获取个人信息
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}

// 修改个人信息
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
  })
}
