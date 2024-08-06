
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

export default function Home() {

  return (
    <div className="w-full md:px-16 px-8 text-center py-32 gap-15 flex flex-col">
      <section className="container flex flex-col items-center gap-14 text-white">
        <Header />
        <MiniCard miniCardText="PRICING" className="" />
        <h1 className="text-4xl font-semibold">Choose the right pricing plan for you</h1>

        <div className="flex justify-center items-center md:flex-row flex-col gap-10 md:justify-between w-full">
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full border-2 border-white hover:bg-mainColor hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full text-primaryText bg-mainColor hover:bg-white hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full border-2 border-white hover:bg-mainColor hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <MiniCard miniCardText="TESTIMONIALS" className="" />
        <h1 className="text-4xl font-semibold">Testimonials About Us</h1>
        <TestCardCarousel direction="left" />
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>

        <AccordionQuest />
      </section>

      <section className="container flex items-center justify-center text-white md:mt-32 mt-16">
        <div className="flex flex-col items-center gap-5 text-center md:w-7/12 w-full bg-miniCard rounded-xl md:p-14 p-8 bg-gradient-to-b from-dark to-miniCard">
          <h1 className="md:text-5xl text-4xl font-semibold leading-tight">Ready to Experience Exponential Growth?</h1>
          <p className="text-lg">Don't wait! Take the first step towards transforming your business today.</p>
          <MainButton textButton="Schedule Your Free Consultation" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <FooterGrowth />
      </section>
      
    </div>
  );
}