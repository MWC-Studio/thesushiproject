import ContactUsBanner from "@components/ContactUsBanner";
import INaNugget from "@components/franchise/INaNugget";
import FranchiseProcess from "@components/franchise/FranchiseProcess";
import TopBanner from "@components/TopBanner";
import WhatWeOffer from "@components/franchise/WhatWeOffer";
import ReviewSection from "@components/franchise/ReviewSection";


const FranchisePage = (isMobile) => {
  return (
    <>
      <TopBanner title="Franchise" description="Franchise" isMobile={isMobile} />
      <INaNugget isMobile={isMobile} />
      <WhatWeOffer isMobile={isMobile} />
      <FranchiseProcess isMobile={isMobile} />
      <ReviewSection isMobile={isMobile} />
      <ContactUsBanner isMobile={isMobile} />
    </>
  )
};

export default FranchisePage;
