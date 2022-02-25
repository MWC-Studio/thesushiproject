import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      <OrderBanner bgColor="common.white" isMobile={props.isMobile} text="People Can Find Us Here" />
      <TitlebarBelowImageList />
      <CenterDetailedMenuList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
