import App from "./../component/App/App"
import IndexPage from "components/IndexPage/IndexPage"
import BlogPage from "components/BlogPage/BlogPage";
import MyBlog from "components/MyBlog/MyBlog";
import Artical from "components/Artical/Artical";
import Hero from "components/Hero/Hero";
import Comment from "components/Comment/Comment";

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
      },
      {
        path: "artical/:articalID",
        components: Artical
      },
      {
        path: "hero",
        components: Hero
      },
      {
        path: "comment",
        components: Comment
      }
    ]
  }
];

export default router; 