import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import LocationInfoSection from "@components/LocationInfoSection";
import OrderBanner from "@components/OrderBanner";

const LocationPage = (props) => {
  return (
    <>
      <TopBanner title="Locations" description="Locations" isMobile={props.isMobile} />
      {/* TODO: Update carousel here */}
      { props.isMobile ? 
          <h1>hi</h1> 
          : 
          <QuiltedImages /> 
      }
      <LocationInfoSection />
      <OrderBanner bgColor="common.beige" isMobile={props.isMobile} text="Call for Pickup or Get it Delivered now!" mText="Find us here!" />
    </>
  )
};

export default LocationPage;