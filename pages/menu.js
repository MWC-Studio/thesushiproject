import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList"
import OrderBanner from "@components/OrderBanner";

const MenuPage = () => {
  return (
    <>
      <OrderBanner bgColor="common.white" />
      <TopBanner title="Menu" description="Menu" />
      <TitlebarBelowImageList />
    </>
  );
};

export default MenuPage;
