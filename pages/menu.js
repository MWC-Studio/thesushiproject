import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";
import MobileMenuCatogory from "@components/menu/MobileMenuCatogory";
import MobileSpecialRolls from "@components/menu/MobileSpecialRolls";
import MobileMenuDetails from "@components/menu/MobileMenuDetails";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      {props.isMobile ? (
        <>
          <MobileMenuCatogory />
          <MobileSpecialRolls />
          <MobileMenuDetails />
          <OrderBanner
            bgColor="common.white"
            isMobile={props.isMobile}
            text="Find Us Here"
          />
        </>
      ) : (
        <>
          <OrderBanner
            bgColor="common.white"
            isMobile={props.isMobile}
            text="Find Us Here"
          />
          <TitlebarBelowImageList />
          <CenterDetailedMenuList />
          <BottomMenuImageList />
        </>
      )}
    </>
  );
};

export default MenuPage;
