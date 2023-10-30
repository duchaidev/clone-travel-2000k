import React from "react";
import Footer from "./Footer";
import { Container, Logo } from "src/components";
import FlexMiddle from "src/components/FlexMiddle";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

function EnterpriseLayout({ children }: Props) {
  return (
    <>
      <header className="bg-white py-2 fixed top-0 left-0 right-0 shadow-md z-50">
        <nav>
          <Container>
            <div className="flex items-center justify-between">
              <Logo size="large" white={false} />
              <FlexMiddle className="gap-5">
                <FlexMiddle className="text-base text-primary underline">
                  <span className="">Why GetYourGuide</span>
                  <div className="h-[26px] w-[1px] bg-black mx-4 inline-block"></div>
                  <Link to="/enterprise/login" className="">
                    Log in
                  </Link>
                </FlexMiddle>
                <button className="py-2.5 px-8 text-white bg-primary rounded-full hover:bg-hoverPrimary">
                  Get Started
                </button>
              </FlexMiddle>
            </div>
          </Container>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-102px)] mt-[102px]">{children}</main>
      <Footer />
    </>
  );
}

export default EnterpriseLayout;
