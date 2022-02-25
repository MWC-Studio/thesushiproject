import TopBanner from '@components/TopBanner';
import About from '@components/About';

const AboutUsPage = (props) => {
  return (
    <>
      <TopBanner title="About" description="About" isMobile={props.isMobile} />
      <About />
    </>
  );
};

export default AboutUsPage;
