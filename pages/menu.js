import Hero from "@components/Hero";
import TitlebarBelowImageList from "@components/menu/TitlebarBelowImageList"

const MenuPage = () => {
  return (
  <>
    <Hero
    imgSrc="/menu_page/Menu_banner_img.svg"
    imgAlt="sushi in black and white"
    title="Menu"
    subtitle=""
    />
    
    <TitlebarBelowImageList />
  </>
  );
};

export default MenuPage;
