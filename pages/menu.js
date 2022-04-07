import TopBanner from "@components/TopBanner";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";
import MobileMenuCatogory from "@components/menu/MobileMenuCatogory";
import MobileSpecialRolls from "@components/menu/MobileSpecialRolls";
import MobileMenuDetails from "@components/menu/MobileMenuDetails";
import SectionMenu from "@components/home/SectionMenu";

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
          <SectionMenu title="Special Rolls" page="menu" />
          <CenterDetailedMenuList />
          <BottomMenuImageList />
        </>
      )}
    </>
  );
};

export default MenuPage;
