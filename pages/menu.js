import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/SpecialRolls";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";
import MobileMenuCatogory from "@components/menu/MobileMenuCatogory";
import MobileSpecialRolls from "@components/menu/MobileSpecialRolls";
import MobileMenuDetails from "@components/menu/MobileMenuDetails";
import SpecialRolls from "@components/menu/SpecialRolls";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      {props.isMobile ? (
        <>
          <MobileMenuCatogory />
          <SpecialRolls isMobile = {props.isMobile} />
          {/* <MobileSpecialRolls /> */}
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
          <SpecialRolls />
          <CenterDetailedMenuList />
          <BottomMenuImageList />
        </>
      )}
    </>
  );
};

export default MenuPage;
