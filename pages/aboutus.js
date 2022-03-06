import TopBanner from '@components/TopBanner';
import TextImgGridMobile from "@components/TextImgGridMobile";
import About from '@components/About';

const AboutUsPage = (props) => {
  return (
    <>
      <TopBanner title="About" description="About" isMobile={props.isMobile} />
      { props.isMobile ? <AboutMobile /> : <About /> }
    </>
  );
};

export default AboutUsPage;
