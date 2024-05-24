import { enum2Options } from '@/utils'

// 会员等级
export const MEMBER_LEVEL = {
  1: '白银会员',
  2: '黄金会员',
  3: '钻石会员'
}
export const MEMBER_LEVEL_OPTIONS = enum2Options(MEMBER_LEVEL)

// 性别
export const GENDER = {
  1: '男',
  2: '女'
}
export const GENDER_OPTIONS = enum2Options(GENDER)
