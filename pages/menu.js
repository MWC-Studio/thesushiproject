import TopBanner from "@components/TopBanner";
import OrderBanner from "@components/OrderBanner";
import MobileMenuCatogory from "@components/menu/MobileMenuCatogory";
import MobileMenuDetails from "@components/menu/MobileMenuDetails";
import ChefSpecialRolls from "@components/menu/ChefSpecialRolls";
import SpecialRolls from "@components/menu/SpecialRolls";
import MenuSection from "@components/menu/MenuSection";
import ProcessSection from "@components/menu/ProcessSection";

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
          <ProcessSection />
          <MenuSection />
          <OrderBanner
            bgColor="#FBF8ED"
            isMobile={props.isMobile}
            text="Find Us Here"
          />
        </>
      )}
    </>
  );
};

export default MenuPage;
