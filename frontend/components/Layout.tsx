import React from "react";
import Footer from "./Footer";
import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";

type Props = {
  children: React.ReactNode;
  isAuth?: boolean;
};

const Layout = ({ children, isAuth }: Props) => {
  return (
    <div>
      {!isAuth && <DesktopNav />}
      {!isAuth && <MobileNav />}
      {children}
      {!isAuth && <Footer />}
    </div>
  );
};

export default Layout;
