import SectionAbout from '@components/home/SectionAbout';
import SectionMenu from '@components/home/SectionMenu';
import SectionMenuMobile from '@components/home/SectionMenuMobile';
import SectionLocations from '@components/home/SectionLocations';
import TopBanner from '@components/TopBanner';
import CustomerReview from "@components/CustomerReview"
const Homepage = ({isMobile}) => {
  return (
    <>
      <TopBanner
        title="Home"
        isMobile={isMobile}
        description="Re-thinking the"
        second="Sushi Experience"
      />

      <SectionAbout isMobile = {isMobile} />
      { isMobile ? <SectionMenuMobile /> : <SectionMenu/> }
      {/*<SectionMenu isMobile = {props.isMobile} />*/}
      <SectionLocations isMobile={isMobile} />
      <CustomerReview  isMobile={isMobile} reviewTitle="Here’s What the Customers Say" />
    </>
  );
};

export default Homepage;
