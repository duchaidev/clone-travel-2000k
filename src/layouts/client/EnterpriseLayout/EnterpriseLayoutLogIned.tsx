import React from "react";
import { Container, Logo } from "src/components";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { DropDownItem } from "src/components";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
  isNavLink?: boolean;
}

function EnterpriseLayoutLogIned({ children, isNavLink = true }: Props) {
  const itemsHelp: MenuProps["items"] = [
    {
      key: "1",
      label: <DropDownItem label="Contact form" />
    },
    {
      key: "2",
      label: <DropDownItem label="FAQs" />
    }
  ];

  const itemsUser: MenuProps["items"] = [
    {
      key: "1",
      label: <DropDownItem label="Company profile" />
    },
    {
      key: "2",
      label: <DropDownItem label="Account settings" />
    },
    {
      key: "3",
      label: <DropDownItem label="Log out" />
    }
  ];

  const handleChangeLink = ({ isActive }: { isActive: boolean }) => {
    return `inline-block py-1 ${isActive ? "border-b-[2.4px] border-primary" : ""}`;
  };
  return (
    <>
      <header className="shadow-lg relative z-50">
        <nav className="">
          <Container className="py-4">
            <div className="flex justify-between items-center">
              <Logo white={false} />
              <Dropdown
                menu={{ items: itemsHelp }}
                className="px-2 hidden lg:inline-block"
                trigger={["hover", "click"]}
                placement="bottomRight"
              >
                <a onClick={(e) => e.preventDefault()} className="hover:text-primary font-medium">
                  <Space size="small">
                    <span className="text-lg m-0 flex">
                      <FaRegCircleQuestion />
                    </span>
                    Help
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            {isNavLink && (
              <div className="border-t-[1.2px] border-gray-300 pt-3 pb-2 flex items-center justify-between">
                <ul className="flex items-center gap-8">
                  <li className="text-base font-medium hover:text-primary">
                    <NavLink to="/" end className={handleChangeLink}>
                      Home
                    </NavLink>
                  </li>
                  <li className="text-base font-medium hover:text-primary">
                    <NavLink to="/1" end className={handleChangeLink}>
                      Create
                    </NavLink>
                  </li>
                  <li className="text-base font-medium hover:text-primary">
                    <NavLink to="/2" end className={handleChangeLink}>
                      Manage
                    </NavLink>
                  </li>
                  <li className="text-base font-medium hover:text-primary">
                    <NavLink to="/3" end className={handleChangeLink}>
                      Bookings
                    </NavLink>
                  </li>
                  <li className="text-base font-medium hover:text-primary">
                    <NavLink to="/3" end className={handleChangeLink}>
                      Performance
                    </NavLink>
                  </li>
                </ul>
                <Dropdown
                  menu={{ items: itemsUser }}
                  className="px-2 hidden lg:inline-block"
                  trigger={["hover", "click"]}
                  placement="bottomRight"
                >
                  <a onClick={(e) => e.preventDefault()} className="hover:text-primary font-medium">
                    <Space size="small">
                      <Avatar size="large" icon={<UserOutlined />} />
                      Jason Doe
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            )}
          </Container>
        </nav>
      </header>
      <main className="bg-backgroundSecondary min-h-[calc(100vh-115px)]">{children}</main>
      <Footer></Footer>
    </>
  );
}

export default EnterpriseLayoutLogIned;
