import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
import OrderBanner from "@components/OrderBanner";
import CarouselSpecialRoll from "@components/menu/CarouselSpecialRoll";
import CategoriList from "@components/menu/CategoriList";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      { props.isMobile ? 
          <>
            <CarouselSpecialRoll />
            <CategoriList />
            <OrderBanner bgColor="common.white" isMobile={props.isMobile} text="People Can Find Us Here" />
          </>
          : 
          <>
            <OrderBanner bgColor="common.white" isMobile={props.isMobile} text="People Can Find Us Here" />
            <TitlebarBelowImageList />
            <CenterDetailedMenuList />
            <BottomMenuImageList />
          </>
      }
    </>
  );
};

export default MenuPage;
