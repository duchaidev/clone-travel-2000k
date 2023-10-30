import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import { FaAngleRight } from "react-icons/fa6";
import { Container } from "src/components";

interface Props {
  children: React.ReactNode;
}

const tabList = [
  { id: 0, name: "Sport" },
  { id: 1, name: "Culture" },
  { id: 2, name: "Food" },
  { id: 3, name: "Nature" }
];

const headerData = [
  {
    title: "Exploring the World of the McLaren Technology Centre",
    banner: "bg-[url('/banner/banner1.jpeg')]"
  },
  {
    title: "Experience a symphony of sound and color at Sagrada Familia",
    banner: "bg-[url('/banner/banner2.webp')]"
  },
  {
    title: "South asian cooking class with Zainab",
    banner: "bg-[url('/banner/banner3.jpeg')]"
  },
  {
    title: "Rewilding the Scottish Highlands",
    banner: "bg-[url('/banner/banner4.jpeg')]"
  }
];

function HomeLayout({ children }: Props) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleChangeTab = (newTab: number) => {
    setTabIndex(newTab);
  };
  return (
    <>
      <header className={`${headerData[tabIndex].banner} bg-cover bg-center`}>
        <div className="bg-slate-950/20">
          <Navbar></Navbar>
          <section className="text-white py-20">
            <Container>
              <h2 className="text-6xl font-bold">
                Travel memories
                <br />
                you'll never forget
              </h2>
              <div className="mt-10">
                <h5>Originals by GetYourGuide</h5>
                <h4 className="text-2xl font-semibold">{headerData[tabIndex].title}</h4>
                <p className="flex items-center text-base cursor-pointer hover:text-primary mt-6">
                  Learn more <FaAngleRight />
                </p>
              </div>
            </Container>
          </section>
          <Container>
            <div className="grid grid-cols-4 grid-rows-1 gap-10 mt-6 text-white">
              {tabList.map((tab) => {
                return (
                  <div
                    key={tab.id}
                    className={`col-span-1 text-2xl font-bold text-center py-4 rounded-t-xl cursor-pointer transition-all ${
                      tabIndex === tab.id ? "text-text bg-white" : ""
                    }`}
                    onClick={() => handleChangeTab(tab.id)}
                  >
                    {tab.name}
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default HomeLayout;
