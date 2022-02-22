import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList"
import OrderBanner from "@components/OrderBanner";

const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <OrderBanner bgColor="common.white" />
      <TitlebarBelowImageList />
    </>
  );
};

export default MenuPage;
