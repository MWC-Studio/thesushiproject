import ContactUsBanner from "@components/ContactUsBanner";
import TextImgGrid from "@components/TextImgGrid";
import TextImgGridMobile from "@components/TextImgGridMobile";
import FranchiseProcess from "@components/Franchise/FranchiseProcess";
import TopBanner from "@components/TopBanner";

const FranchisePage = (props) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={props.isMobile} />
      { props.isMobile ? <TextImgGridMobile /> : <TextImgGrid /> }
      <FranchiseProcess isMobile={props.isMobile} />
      <ContactUsBanner isMobile={props.isMobile} />
    </>
  )
};

export default FranchisePage
;
