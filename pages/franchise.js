import ContactUsBanner from "@components/ContactUsBanner";
import INaNugget from "@components/franchise/INaNugget";
import FranchiseProcess from "@components/franchise/FranchiseProcess";
import TopBanner from "@components/TopBanner";
import WhatWeOffer from "@components/franchise/WhatWeOffer";
import ReviewSection from "@components/franchise/ReviewSection";


const FranchisePage = (props) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={props.isMobile} />
      <INaNugget isMobile={props.isMobile} />
      <WhatWeOffer isMobile={props.isMobile} />
      <FranchiseProcess isMobile={props.isMobile} />
      <ReviewSection isMobile={props.isMobile} />
      <ContactUsBanner isMobile={props.isMobile} />
    </>
  )
};

export default FranchisePage;
