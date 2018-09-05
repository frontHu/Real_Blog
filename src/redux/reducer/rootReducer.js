import * as demoReducer from './demo.reducer'
import * as blogReducer from './blog.reducer'


export default {
  ...demoReducer,
  ...blogReducer
}