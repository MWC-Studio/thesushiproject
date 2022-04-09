import TopBanner from "@components/TopBanner";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";
import MobileMenuCatogory from "@components/menu/MobileMenuCatogory";
import MobileMenuDetails from "@components/menu/MobileMenuDetails";
import ChefSpecialRolls from "@components/menu/ChefSpecialRolls";
import SpecialRolls from "@components/menu/SpecialRolls";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      {props.isMobile ? (
        <>
          <MobileMenuCatogory />
          <ChefSpecialRolls isMobile={props.isMobile} />
          <SpecialRolls isMobile={props.isMobile} />
          <MobileMenuDetails />
          <OrderBanner
            bgColor="common.beige"
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
          <ChefSpecialRolls />
          <SpecialRolls />
          <CenterDetailedMenuList />
          <BottomMenuImageList />
        </>
      )}
    </>
  );
};

export default MenuPage;
