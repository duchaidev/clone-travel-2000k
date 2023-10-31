import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { Logo } from "src/components";
import { NavLink } from "react-router-dom";
import NavbarManage from "src/components/Navbar/NavbarManage";

interface Props {
  children: React.ReactNode;
}

function ManageLayout({ children }: Props) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
      <div className="bg-blue-800/90">
        <NavbarManage></NavbarManage>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default ManageLayout;
