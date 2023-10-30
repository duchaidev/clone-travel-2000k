import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegCircleQuestion } from "react-icons/fa6";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { BiSun, BiLogInCircle } from "react-icons/bi";
import DropDownItem from "../DropDownItem";
import PATH from "src/constants/path";

function NavMenu() {
  const itemsLang: MenuProps["items"] = [
    {
      key: "1",
      label: <span>English</span>
    },
    {
      key: "2",
      label: <span>Vietnamese</span>
    }
  ];

  const itemsLogIn: MenuProps["items"] = [
    {
      key: "1",

      label: <DropDownItem icon={<BiLogInCircle />} label="Log In" />
    },
    {
      key: "2",
      label: <DropDownItem icon={<BiSun />} label="Dark Mode" />
    }
  ];
  return (
    <div className="text-sm flex flex-row items-center gap-x-3 text-white font-medium">
      <Dropdown menu={{ items: itemsLang }} className="px-2 hidden lg:inline-block" trigger={["hover", "click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space size="small">
            English
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <div className="text-xl px-2">
        <Link to={PATH.home} className="text-inherit">
          <FaRegHeart />
        </Link>
      </div>
      <div className="text-xl px-2">
        <Link to={PATH.home} className="text-inherit">
          <FiShoppingCart />
        </Link>
      </div>
      <div className="text-xl px-2">
        <Link to={PATH.home} className="text-inherit">
          <FaRegCircleQuestion />
        </Link>
      </div>
      <Dropdown menu={{ items: itemsLogIn }} className="pl-2" trigger={["hover", "click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space size="small" className="flex items-center gap-x-1">
            <span className="text-xl">
              <FiUser />
            </span>
            <span className="hidden lg:inline-block">Log in</span>
            <span className="hidden lg:inline-block">
              <DownOutlined />
            </span>
          </Space>
        </a>
      </Dropdown>
      <div className="pl-2 hidden md:inline-block">
        <Link to={PATH.home}>
          <button className="bg-transparent border-2 border-white rounded-full font-semibold text-white py-2.5 px-6 cursor-pointer">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavMenu;
