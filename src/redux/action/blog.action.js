import * as Types from './../actionType'
import { Type } from './../saga/blog.saga'

export function blogAction(params) {
  return {type: `${Type}_${Types.BLOG_LIST}`, payload: params}
}

