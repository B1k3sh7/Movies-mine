import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carousel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";

const Carousel = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        className="carouselItem_img"
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
      />
      <b className="carouselItem_txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: { items: 3 },
    512: { items: 5 },
    1024: { items: 7 },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Carousel;
