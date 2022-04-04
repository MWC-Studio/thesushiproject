import TopBanner from '@components/TopBanner';
import About from '@components/About';

const AboutUsPage = ({isMobile}) => {
  return (
    <>
      <TopBanner
        title="About"
        isMobile={isMobile}
        description="About"
      />
      <About isMobile ={isMobile} />
    </>
  );
};

export default AboutUsPage;

