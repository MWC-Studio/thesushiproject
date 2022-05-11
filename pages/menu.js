import TopBanner from "@components/TopBanner";
import OrderBanner from "@components/OrderBanner";
import MenuSection from "@components/menu/MenuSection";
import ProcessSection from "@components/menu/ProcessSection";

const MenuPage = (props) => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" isMobile={props.isMobile} />
      <ProcessSection isMobile={props.isMobile} />
      <MenuSection isMobile={props.isMobile} />
      <OrderBanner
        bgColor="common.beige"
        isMobile={props.isMobile}
        text="Find Us Here"
      />
    </>
  );
};

export default MenuPage;
