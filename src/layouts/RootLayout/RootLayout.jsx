import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop";

const RootLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
    </ScrollToTop>
  );
};

export default RootLayout;
