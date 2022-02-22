import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import LocationInfoSection from "@components/LocationInfoSection";
import OrderBanner from "@components/OrderBanner";

const LocationPage = () => {
  return (
    <>
      <TopBanner title="Location" description="Location" />
      <QuiltedImages />
      <LocationInfoSection />
      <OrderBanner />
    </>
  )
};

export default LocationPage;