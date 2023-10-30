import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <>
      <div className="bg-blue-800/90">
        <Navbar></Navbar>
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
