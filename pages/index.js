import SectionAbout from '@components/home/SectionAbout';
import SectionMenu from '@components/home/SectionMenu';
import SectionReview from '@components/home/SectionReview';
import SectionLocations from '@components/home/SectionLocations';
import TopBanner from '@components/TopBanner';

const Homepage = (props) => {
  return (
    <>
      <TopBanner
        title="Home"
        isMobile={props.isMobile}
        description="Re-thinking the"
        second="Sushi Experience"
      />

      <SectionAbout isMobile={props.isMobile} />
      <SectionMenu />
      <SectionLocations />
      <SectionReview />
    </>
  );
};

export default Homepage;
