import MainPage from "./pages/main";
import RootLayout from "./layouts/RootLayout/RootLayout";
import News from "./pages/news";
import Detail from "./pages/detail";
import Error from "@/pages/error/Error";

const homepagePaths = ["/", "/homepage", "/main"].map((path) => {
  return {
    path,
    element: <MainPage />,
  };
});

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      ...homepagePaths,
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
];

export { routes };
