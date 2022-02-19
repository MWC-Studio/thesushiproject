import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import BottomBanner from "@components/BottomBanner";
import LocationInfoSection from "@components/LocationInfoSection";

const LocationPage = () => {
  return (
    <>
      <TopBanner title="Location" description="Location" />
      <QuiltedImages />
      <LocationInfoSection />
      <BottomBanner />
      
    </>
  )
};

export default LocationPage;