// 为组件提供全局类型声明
import XtxSwiper from './XtxSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GLobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
