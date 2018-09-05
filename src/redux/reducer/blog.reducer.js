import * as Types from './../actionType'

const initState = {
  currentPage: 0,
  list: []
}

export function blogReducer(state=initState, action) {
  switch(action.type) {
    case Types.BLOG_LIST:
      let currentPage = action.payload.currentPage
      let list = [...state.list, ...action.payload.list]
      console.log({...state, currentPage, list})
      return {...state, currentPage, list}
    default:
      return state
  }
}