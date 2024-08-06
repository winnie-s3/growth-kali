
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
import { Blog } from "@/components/blog";

export default function Home() {

  return (
    <div className="w-full px-16 text-center py-32 gap-15 flex flex-col">
      <section className="container flex flex-col items-center gap-14 text-white h-screen md:mt-10">
        <Header />

        <h1 className="md:text-5xl text-4xl md:w-3/4 w-full leading-tight font-semibold">Insights & Updates: Explore Our Latest Blog Posts</h1>

        <div className="flex md:flex-row flex-col items-center gap-10 justify-between w-full">
          <Blog blogMin="4" blogTitle="How to use Growth Kali" blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..." />
          <Blog blogMin="4" blogTitle="How to use Growth Kali" blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..." />
          <Blog blogMin="4" blogTitle="How to use Growth Kali" blogText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..." />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-[140vh]">
        <FooterGrowth />
      </section>
      
    </div>
  );
}