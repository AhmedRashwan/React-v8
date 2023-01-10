import { useState } from "react";

const Carousel = (props) => {
  const { images } = props;
  const [active, setActive] = useState(0);
  if (!images.length) {
    return;
  }
  return (
    <>
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
