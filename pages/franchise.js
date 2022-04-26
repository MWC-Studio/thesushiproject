import ContactUsBanner from "@components/ContactUsBanner";
import TextImgGrid from "@components/franchise/TextImgGrid";
import TextImgGridMobile from "@components/franchise/TextImgGridMobile";
import FranchiseProcess from "@components/franchise/FranchiseProcess";
import TopBanner from "@components/TopBanner";
import WhatWeOffer from "@components/franchise/WhatWeOffer";
import CustomerReview from "@components/CustomerReview"

const FranchisePage = (props) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={props.isMobile} />
      { props.isMobile ? <TextImgGridMobile /> : <TextImgGrid /> }
      <WhatWeOffer isMobile={props.isMobile} />
      <FranchiseProcess isMobile={props.isMobile} />
      <CustomerReview  isMobile={props.isMobile} reviewTitle="Proven by Customers" />
      <ContactUsBanner isMobile={props.isMobile} />
    </>
  )
};

export default FranchisePage
;
