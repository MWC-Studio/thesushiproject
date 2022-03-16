import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/locations/QuiltedImages";
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
      {props.isMobile ? <CarouselMobileImage /> : <QuiltedImages />}
      <LocationsContent isMobile={props.isMobile} />
      <div className="display-linebreak">
        <OrderBanner
          bgColor="common.beige"
          isMobile={props.isMobile}
          text={props.isMobile ? mtext : text}
        />
      </div>
    </>
  );
};

export default LocationPage;
