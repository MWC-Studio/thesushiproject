import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/locations/QuiltedImages";
import OrderBanner from "@components/OrderBanner";
import CarouselMobileImage from "@components/locations/CarouselMobileImage";
import LocationsContent from "@components/locations/LocationsContent";

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
      <OrderBanner bgColor="common.beige" isMobile={props.isMobile} text="Call for Pickup or Get it Delivered now!" />
    </>
  )
};

export default LocationPage;