import App from "./../page/App/App"
import IndexPage from "./../page/IndexPage/IndexPage"
import BlogPage from "./../page/BlogPage/BlogPage";
import Artical from "./../page/Artical/Artical";
import Hero from "./../page/Hero/Hero";
import AboutMe from "./../page/AboutMe/AboutMe";
import Comment from "./../page/Comment/Comment";
import Plane from "./../page/Plane/Plane";

const router = [
  {
    path: "/",
    components: App,
    indexRoute: {component: IndexPage},
    childRoutes: [
      {
        path: "blog",
        components: BlogPage
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
        path: "about",
        components: AboutMe
      },
      //留言
      {
        path: "comment",
        components: Comment
      },
      {
        path: "plane",
        component: Plane
      }
    ]
  }
];

export default router; 