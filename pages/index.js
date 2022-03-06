import SectionAbout from "@components/SectionAbout";
import SectionMenu from "@components/SectionMenu";
import SectionReview from "@components/SectionReview";
import SectionLocations from "@components/SectionLocations";
import TopBanner from "@components/TopBanner";

const Homepage = (props) => {
  return (
    <>
      <TopBanner title="Home" isMobile={props.isMobile} description="Re-thinking the" second="Sushi Experience" />
     
      <SectionAbout />
      <SectionMenu />
      <SectionLocations />
      <SectionReview />

      
    </>
  );
};

export default Homepage;
