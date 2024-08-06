import React from "react";
import Marquee from "react-fast-marquee";
import { IntegCard } from "./integCard";

const images = [
  {
    intImage: "../intCarousel/intCard1.png",
    integTitle: "Discord",
    integText: "The most popular cross-platform chat app",
  },
  {
    intImage: "../intCarousel/intCard2.png",
    integTitle: "Figma",
    integText: "Notion is a versatile all-in-one workspace application",
  },
  {
    intImage: "../intCarousel/intCard3.png",
    integTitle: "Asana",
    integText: "Notion is a versatile all-in-one workspace application",
  },
  {
    intImage: "../intCarousel/intCard4.png",
    integTitle: "Linear",
    integText: "Notion is a versatile all-in-one workspace application",
  },
  {
    intImage: "../intCarousel/intCard5.png",
    integTitle: "Trello",
    integText: "Notion is a versatile all-in-one workspace application",
  },
];

const IntegCarousel = ({direct}) => (
      <Marquee className="h-[300px]" play={true} gradient={true} gradientColor="#111822" gradientWidth={100} direction={direct} speed={30} loop={0} style={{ width: "600px" }}>
        {images.map((image, index) => (
          <IntegCard key={index} {...image} />
        ))}
      </Marquee>
);

export default IntegCarousel;