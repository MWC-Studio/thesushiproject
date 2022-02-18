import Hero from "@components/Hero";
import TitlebarBelowImageList from "@components/TitlebarBelowImageList"

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
