import TopBanner from "@components/TopBanner";
import QuiltedImagesWithText from "@components/locations/QuiltedImagesWithText";
import OrderBanner from "@components/OrderBanner";
import CarouselMobileImage from "@components/locations/CarouselMobileImage";
import LocationsContent from "@components/locations/LocationsContent";

const LocationPage = (props) => {
  const text = "Call for Pickup or Get it Delivered now!";
  const mtext = "Call for Pickup \n or \n Get it Delivered now!";
  return (
    <>
      <TopBanner
        title="Locations"
        description="Locations"
        isMobile={props.isMobile}
      />
      {props.isMobile ? <CarouselMobileImage /> : <QuiltedImagesWithText />}
      {/* <LocationsContent isMobile={props.isMobile} /> */}
        <OrderBanner
          bgColor="common.beige"
          isMobile={props.isMobile}
          text={props.isMobile ? mtext : text}
        />
    </>
  );
};

export default LocationPage;
