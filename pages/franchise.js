import ContactUsBanner from "@components/ContactUsBanner";
import TextImgGrid from "@components/franchise/TextImgGrid";
import TextImgGridMobile from "@components/franchise/TextImgGridMobile";
import FranchiseProcess from "@components/franchise/FranchiseProcess";
import TopBanner from "@components/TopBanner";
import WhatWeOffer from "@components/franchise/WhatWeOffer";

const FranchisePage = (props) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={props.isMobile} />
      { props.isMobile ? <TextImgGridMobile /> : <TextImgGrid /> }
      <WhatWeOffer />
      <FranchiseProcess isMobile={props.isMobile} />
      <ContactUsBanner isMobile={props.isMobile} />
    </>
  )
};

export default FranchisePage
;
