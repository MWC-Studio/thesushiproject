import Banner from "@components/Banner";

const LocationPage = () => {
  return (
    <>
      {/* props 넘겨서 Banner 안 data 자동으로 바뀌게. (Typography, 이미지src, alt) */}
      <Banner />
    </>
  )
};

export default LocationPage;