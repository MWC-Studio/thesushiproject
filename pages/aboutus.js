import TopBanner from '@components/TopBanner';
import About from '@components/About';
import AboutMobile from '@components/AboutMobile' ;

const AboutUsPage = (props) => {
  return (
    <>
      <TopBanner title="About" description="About" isMobile={props.isMobile} />
      { props.isMobile ? <AboutMobile /> : <About /> }
    </>
  );
};

export default AboutUsPage;

