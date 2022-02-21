import TopBanner from "@components/TopBanner";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList"
import BottomMenuImageList from "@components/menu/BottomMenuImageList"
import Findus from "@components/menu/Findus"

const MenuPage = () => {
  return (
    <>
      <TopBanner title="Menu" description="Menu" />
      <Findus />
      <TitlebarBelowImageList />
      <BottomMenuImageList />
    </>
  );
};

export default MenuPage;
