import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList";
import BottomMenuImageList from "@components/menu/BottomMenuImageList";
import CenterDetailedMenuList from "@components/menu/CenterDetailedMenuList";
const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <TitlebarBelowImageList />
      <CenterDetailedMenuList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
