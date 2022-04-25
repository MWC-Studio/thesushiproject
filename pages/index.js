import SectionAbout from "@components/home/SectionAbout";
import SectionMenu from "@components/home/SectionMenu";
import SectionLocations from "@components/home/SectionLocations";
import TopBanner from "@components/TopBanner";
import CustomerReview from "@components/CustomerReview";
const Homepage = (props) => {
  const isHome = true;

  return (
    <>
      <TopBanner
        title="Home"
        description="Re-thinking the"
        second="Sushi Experience"
        isMobile={props.isMobile}
      />

      <SectionAbout isMobile={props.isMobile} />
      <SectionMenu isMobile={props.isMobile} isHome />
      <SectionLocations isMobile={props.isMobile} />
      <CustomerReview
        isMobile={props.isMobile}
        reviewTitle="Here’s What the Customers Say"
      />
    </>
  );
};

export default Homepage;
