import TopBanner from "@components/TopBanner";

import TitlebarBelowImageList from "@components/TitlebarBelowImageList";
import BottomMenuImageList from "@components/BottomMenuImageList";
import CenterDetailedMenuList from "@components/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner"
import FindUs from "@components/FindUs"

const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <OrderBanner style={{ backgroundColor: "#ffffff" }} />
      <TitlebarBelowImageList />
      <CenterDetailedMenuList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
