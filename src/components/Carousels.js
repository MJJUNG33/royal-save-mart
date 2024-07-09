import Carousel from "react-bootstrap/Carousel";

import { useState } from "react";

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="my-3 m-xl-4"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item className="carousel">
        <img
          src="/images/Carousel1.png"
          className="d-block w-100"
          alt="Promotion for special products"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          src="/images/Carousel2.png"
          className="d-block w-100"
          alt="Promotion for noodle products"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          src="/images/Carousel1.png"
          className="d-block w-100"
          alt="Promotion for special products"
          loading="lazy"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
