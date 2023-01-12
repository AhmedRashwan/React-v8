import { useState } from "react";

const Carousel = (props) => {
  const { images } = props;
  const [active, setActive] = useState(0);
  if (!images.length) {
    return;
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-4 rounded-xl">
          <img src={images[active]} alt="animal" className="rounded-xl" />
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active " : ""}
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
