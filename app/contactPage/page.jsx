
import { Carousel } from "@/components/Carousel/carousel";
import { Check } from "@/components/check";
import { EmailSubs } from "@/components/Home/emailSubs";
import { Header } from "@/components/header";
import { MiniCard } from "@/components/miniCard";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { ServiceContainer } from "@/components/serviceContainer";
import { MainButton } from "@/components/mainButton";
import { FaChair, FaCheck, FaPhone, FaVoicemail } from "react-icons/fa6";
import IntegCarousel from "@/components/Carousel/integCarousel";
import { PriceCard } from "@/components/priceCard/priceCard";
import TestCardCarousel from "@/components/testimonials/testCardCarousel";
import { AccordionQuest } from "@/components/questions/accordionQuest";
import { Footer, FooterGrowth } from "@/components/footer";
import { Contact } from "@/components/contact";

export default function Home() {

  return (
    <div className="w-full px-16 text-center py-32 gap-15 flex flex-col">
      <section className="container flex flex-col items-center gap-20 mt-20">
        <Header />

        <div className="flex items-start text-left justify-between w-full gap-5 text-white">
          <div className="flex flex-col gap-5 w-1/3">
            <h1 className="text-6xl font-semibold">Contact Us</h1>
            <p className="text-lg font-medium text-secondaryText">Need assistance or have questions? Don't hesitate to reach out to us. Our dedicated team is here to help.</p>
          </div>
        
          <div className="flex flex-col gap-4 items-center w-3/6 p-5 bg-miniCard rounded-xl">
            <span className="flex gap-4 w-full">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-xl focus:outline-none" />
              <input type="email" name="" placeholder="Email" className="w-full p-3 rounded-xl focus:outline-none" id="" />
            </span>
            <textarea name="" id="" placeholder="Message" className="w-full h-36 p-3 rounded-xl focus:outline-none"></textarea>
            <button className="w-full bg-mainColor text-primaryText p-3 rounded-xl">Submit</button>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <Contact contactTitle="Email" contactText="Are you tired of juggling endless spreadsheets, emails, and sticky notes to manage your projects?" icon={FaVoicemail} contact="w9Eg6@example.com" />
          <Contact contactTitle="Call Us" contactText="Don't hesitate to reach out to us. Our dedicated team is here to help." icon={FaPhone} contact="+91 9876543210" />
          <Contact contactTitle="Chat with Us" contactText="We're here to help. Reach out to us anytime." icon={FaChair} contact="Chat with Us" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>

        <AccordionQuest />
      </section>

      <section className="container flex flex-col items-center gap-14 text-white mt-32">
        <FooterGrowth />
      </section>
      
    </div>
  );
}