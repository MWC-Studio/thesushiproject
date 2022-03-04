import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import OrderBanner from "@components/OrderBanner";
import CarouselMobileImage from "@components/CarouselMobileImage";
import LocationsContent from "@components/LocationsContent";

const LocationPage = (props) => {
  return (
    <>
      <TopBanner title="Locations" description="Locations" isMobile={props.isMobile} />
      { props.isMobile ? 
          <CarouselMobileImage />
          : 
          <QuiltedImages /> 
      }
      <LocationsContent isMobile={props.isMobile} />
      <OrderBanner bgColor="common.beige" isMobile={props.isMobile} text="Call for Pickup or Get it Delivered now!" mText="Find us here!" />
    </>
  )
};

export default LocationPage;