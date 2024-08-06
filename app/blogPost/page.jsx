
import { Carousel } from "@/components/Carousel/carousel";
import { Check } from "@/components/check";
import { EmailSubs } from "@/components/Home/emailSubs";
import { Header } from "@/components/header";
import { MiniCard } from "@/components/miniCard";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { ServiceContainer } from "@/components/serviceContainer";
import { MainButton } from "@/components/mainButton";
import { FaCheck } from "react-icons/fa6";
import IntegCarousel from "@/components/Carousel/integCarousel";
import { PriceCard } from "@/components/priceCard/priceCard";
import TestCardCarousel from "@/components/testimonials/testCardCarousel";
import { AccordionQuest } from "@/components/questions/accordionQuest";
import { Footer, FooterGrowth } from "@/components/footer";
import { Author } from "@/components/author";

export default function Home() {

  return (
    <div className="w-full md:px-16 px-8 text-center py-32 gap-15 flex flex-col">
      <section className="w-full flex flex-col items-center gap-14 text-white">
        <Header />

        <div className="flex justify-center items-center text-left flex-col gap-10 md:w-7/12 w-full">
          <h1 className="text-4xl font-semibold">5 Tips for Effective Project Management in Remote Teams</h1>
          <Author author="John Doe" dataPost="12 Mar, 2024" min={5} />
        </div>

        <img src="../blogPost.jpg" alt="" className="w-full" />

        <div className="flex justify-center items-start text-left flex-col gap-10 md:w-7/12 w-full">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="text-secondaryText">Managing projects with a remote team presents unique challenges, but with the right strategies in place.</p>
          <figure>
            <img src="../blogPost2.jpg" alt="" className="w-full" />
            <figcaption className="text-sm text-secondaryText border-l-gray-500 border-l-2 px-2 mt-2">5 Tips for Effective Project Management in Remote Teams</figcaption>
          </figure>
        </div>

        <div className="flex justify-center items-start text-left flex-col gap-10 md:w-7/12 w-full border-b-2 border-b-gray-800 pb-16">
          <h3 className="text-2xl font-semibold">Ensure that everyone on your remote team understands the project goals, objectives, and their individual responsibilities. Set clear expectations for deliverables.</h3>
          <p className="text-secondaryText">Utilize collaboration tools and project management software to streamline workflows and facilitate teamwork. Platforms like Saasta offer features such as task management, file sharing, and real-time updates, enabling remote teams to collaborate seamlessly and track progress effectively.</p>
          <blockquote className="text-2xl font-semibold text-white border-l-mainColor border-l-2 px-5">
            Remote work can blur the lines between work and personal life, leading to burnout and decreased productivity. Encourage your team members to establish boundaries between work and personal time, take regular breaks, and prioritize self-care.
          </blockquote>
          <p className="text-secondaryText">Effective project management in remote teams requires clear communication, goal setting, collaboration, trust, and work-life balance. By implementing these tips, you can lead your remote team to success and achieve your project goals efficiently and effectively.</p>
          <div className="flex text-left flex-col gap-5 md:w-7/12 w-full">
            <h2 className="text-3xl font-semibold">Conclusion</h2>
            <p className="text-secondaryText">In conclusion, effective project management in remote teams requires clear communication, goal setting, collaboration, trust, and work-life balance. By implementing these tips, you can lead your remote team to success and achieve your project goals efficiently and effectively.</p>
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <FooterGrowth />
      </section>
      
    </div>
  );
}