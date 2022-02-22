import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import Findus from "@components/menu/Findus"
import OrderBanner from "@components/OrderBanner";

const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <OrderBanner bgColor="common.white" />
      <TitlebarBelowImageList />
      <CenterDetailedMenuList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
