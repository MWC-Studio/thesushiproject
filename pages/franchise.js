import ContactUsBanner from "@components/ContactUsBanner";
import TextImgGrid from "@components/TextImgGrid";
import TopBanner from "@components/TopBanner";

const FranchisePage = (props) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={props.isMobile} />
      <TextImgGrid />
      <ContactUsBanner isMobile={props.isMobile} />
    </>
  )
};

export default FranchisePage
;
