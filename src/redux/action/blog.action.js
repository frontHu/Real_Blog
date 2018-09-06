import * as Types from './../actionType'
import { Type } from './../saga/blog.saga'

export function blogListAction(params, cb) {
  return {type: `${Type}_${Types.BLOG_LIST}`, payload: {params, cb}}
}

