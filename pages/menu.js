import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList"
import BottomMenuImageList from "@components/menu/BottomMenuImageList"
const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <TitlebarBelowImageList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
