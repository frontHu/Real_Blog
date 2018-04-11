import App from "./../component/App/App"
import IndexPage from "components/IndexPage/IndexPage"
import BlogPage from "components/BlogPage/BlogPage";
import MyBlog from "components/MyBlog/MyBlog";

const router = [
  {
    path: "/",
    components: App,
    indexRoute: {component: IndexPage},
    childRoutes: [
      {
        path: "blog",
        components: BlogPage,
        indexRoute: {component: MyBlog}
      }
    ]
  }
];

export default router; 