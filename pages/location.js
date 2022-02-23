import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import LocationInfoSection from "@components/LocationInfoSection";
import OrderBanner from "@components/OrderBanner";

const LocationPage = () => {
  return (
    <>
      <TopBanner title="Locations" description="Locations" />
      <QuiltedImages />
      <LocationInfoSection />
      <OrderBanner bgColor="secondary.main" text="Call for Pickup or Get it Delivered now!" />
    </>
  )
};

export default LocationPage;