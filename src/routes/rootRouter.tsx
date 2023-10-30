import type { RouteObject } from "react-router-dom";
import HomeLayout from "src/layouts/client/HomeLayout";
import Home from "src/pages/client/Home";
import { EnterpriseLayout, EnterpriseLayoutLogIned } from "src/layouts/client/EnterpriseLayout";
import { Analysis, EnterpriseHome, EnterpriseLogin } from "src/pages/client/Enterprise";
import PATH from "src/constants/path";
import Login from "src/pages/client/Login";
import NotFound from "src/pages/client/NotFound";
import ProductDetail from "src/pages/client/Product/ProductDetail";
import Register from "src/pages/client/Register";
import Cart from "src/pages/client/Cart";
import DefaultLayout from "src/layouts/DefaultLayout";
import CheckOut from "src/pages/client/Checkout/Checkout";

const rootRouter: RouteObject[] = [
  {
    path: PATH.home,
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
  },
  {
    path: PATH.productDetail,
    element: (
      <DefaultLayout>
        <ProductDetail />
      </DefaultLayout>
    )
  },
  {
    path: PATH.login,
    element: <Login />
  },
  {
    path: PATH.register,
    element: <Register />
  },
  {
    path: PATH.cart,
    element: (
      <DefaultLayout>
        <Cart />
      </DefaultLayout>
    )
  },
  {
    path: PATH.checkout,
    element: (
      <DefaultLayout>
        <CheckOut />
      </DefaultLayout>
    )
  },
  {
    path: "/*",
    element: (
      <DefaultLayout>
        <NotFound />
      </DefaultLayout>
    )
  },
  {
    path: PATH.enterprise,
    element: (
      <EnterpriseLayout>
        <EnterpriseHome />
      </EnterpriseLayout>
    )
  },
  {
    path: PATH.enterprise + PATH.login,
    element: (
      <EnterpriseLayoutLogIned isNavLink={false}>
        <EnterpriseLogin />
      </EnterpriseLayoutLogIned>
    )
  },
  {
    path: PATH.enterprise + PATH.analysis,
    element: (
      <EnterpriseLayoutLogIned>
        <Analysis />
      </EnterpriseLayoutLogIned>
    )
  }
];

export default rootRouter;
