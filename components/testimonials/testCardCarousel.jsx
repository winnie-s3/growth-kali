import Marquee from "react-fast-marquee";
import { TestCard } from "./testCard";

const testimonials = [
  {
    author: "Emily Johnson",
    position: "Founder of StartUpX",
    testimonial: "I've tried many project management tools, but Saasta stands out for its simplicity and effectiveness. It has everything we need to stay organized and collaborate effectively. Our projects have never been smoother!",
  },
  {
    author: "Sarah Miller",
    position: "Marketing Director at Digital Agency",
    testimonial: "Saasta has transformed the way our marketing team operates. Its collaborative features and real-time updates have improved communication and coordination, leading to more successful campaigns and happier clients.",
  },
  {
    author: "David Johnson",
    position: "Marketing Director, Sparkle Brands",
    testimonial: "As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our data is safe and protected.",
  },
  {
    author: "Michael Brown",
    position: "Product Manager at Global Innovations",
    testimonial: "Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!",
  },
];

const TestCardCarousel = ({direction}) => (
  <Marquee play={true} gradient={true} gradientColor="#111822" gradientWidth={150} direction={direction} speed={70} loop={0} >
    {testimonials.map((testimonial, index) => (
      <TestCard key={index} {...testimonial} />
    ))}
  </Marquee>
);

export default TestCardCarousel;