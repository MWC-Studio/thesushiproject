import TopBanner from "@components/TopBanner";
import QuiltedImagesWithText from "@components/locations/QuiltedImagesWithText";
import OrderBanner from "@components/OrderBanner";
import CarouselMobileImage from "@components/locations/CarouselMobileImage";
import LocationsContentMobile from "@components/locations/LocationsContentMobile";

const LocationPage = ({isMobile}) => {
  const text = "Call for Pickup or Get it Delivered now!";
  const mtext = "Call for Pickup \n or Get it Delivered now!";
  return (
    <>
      <TopBanner
        title="Locations"
        description="Locations"
        isMobile={isMobile}
      />
      {isMobile ? <CarouselMobileImage /> : <QuiltedImagesWithText />}
      {isMobile ? <LocationsContentMobile /> : null}
      <OrderBanner
        bgColor="common.beige"
        isMobile={isMobile}
        text={isMobile ? mtext : text}
      />
    </>
  );
};

export default LocationPage;
