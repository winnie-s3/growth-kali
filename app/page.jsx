
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

export default function Home() {

  return (
    <div className="w-full px-16 text-center py-32 gap-15 flex flex-col">
      <section id="homeSection" className="container flex flex-col items-center gap-10 mb-44">
        <Header />
        <MiniCard miniCardText="Growth Kali ➜" className="my-64" />

        <div className="flex flex-col items-center text-center gap-5 text-white w-3/5">
          <h1 className="text-6xl font-semibold"><span className="text-mainColor">Automate</span> The Way You Grow Your <span className="text-mainColor">Business</span></h1>
          <p className="text-lg font-medium text-secondaryText">Growth Kali helps you <span className="font-bold">attract, qualify, and close</span> more leads with cutting-edge AI strategies, that mix technology with deep understanding of marketing and sales. Ready to dominate your market?</p>
          <div className="flex flex-col gap-4 items-center w-full">
            <EmailSubs />
            <span className="flex gap-8">
              <Check checkText="Get New Automations Every Week" />
              <Check checkText="100% Free" />
            </span>
          </div>
        </div>

        <img src="../kali-img.png" id="kaliImg" alt="" className="w-full mb-24 mt-59" />

        <Carousel />
      </section>

      <section className="container flex flex-col items-center gap-20 text-white h-screen">
        <MiniCard miniCardText="HOW YOU ARE GOING TO GROW" className="my-64" />

        <h1 className="text-4xl font-semibold">Transform Your Business with Our Expert Services</h1>

        <ServiceContainer>
          <ServiceCard serviceIcon="../card2.svg" serviceTitle="AI Marketing" serviceText="Harness the power of AI to create compelling, data-driven marketing campaigns that convert" />
          <ServiceCard serviceIcon="../card2.svg" serviceTitle="Sales Automation" serviceText="Automate your sales processes to save time and close more deals efficiently and predictably" />
          <ServiceCard serviceIcon="../card3.svg" serviceTitle="Ads Management" serviceText="Maximize your ad spend with targeted, high-ROI campaigns managed by world-class experts" />
          <ServiceCard serviceIcon="../card4.svg" serviceTitle="Conversion Automation" serviceText="Engage your leads 24/7 with intelligent conversation automation that drives conversions" />
          <ServiceCard serviceIcon="../card1.svg" serviceTitle="Authority Strategies" serviceText="Build trust, in scale, with our proprietary content creation system that differentiates your business from everything else" />
          <ServiceCard serviceIcon="../card5.svg" serviceTitle="Advanced Analytics" serviceText="We support pushing the boundaries of achievable with our advanced data analytics that will guide your business decision making" />
        </ServiceContainer>
        

      </section>

      <section className="container flex items-center justify-center gap-20 text-white h-screen">
        <div className="flex flex-col items-start gap-6 text-left w-3/12">
          <MiniCard miniCardText="WHO WE ARE" className="my-64" />
          <h1 className="text-4xl font-semibold leading-tight">Innovative technology to <span className="text-mainColor">skyrocket</span> your business</h1>
          <p className="text-secondaryText leading-relaxed">Welcome to Growth Kali, the ultimate powerhouse in AI Marketing and Sales Automation. We blend innovative technology with expert strategies to skyrocket your business growth. Whether you're a startup or an established enterprise, our tailored solutions will amplify your efforts and deliver outstanding results.</p>
          <MainButton textButton="Discover More" />
        </div>

        <img src="../kali-img.png" alt="" className="w-80 rounded-lg" />

      </section>

      <section className="container flex flex-row-reverse items-center justify-center gap-20 text-white mt-20">
        <div className="flex flex-col items-start gap-6 text-left w-3/12">
          <MiniCard miniCardText="FEATURES" className="my-64" />
          <h1 className="text-4xl font-semibold leading-tight">Why <span className="text-mainColor">Growth Kali?</span></h1>
          <p className="text-secondaryText leading-relaxed font-medium">At Growth Kali, we don't just follow trends—we set them. Our unique approach combines AI technology with proven marketing and sales strategies to deliver unmatched results. Here’s why we stand out:</p>
          <div className="flex flex-col gap-3 text-sm">
            <Check checkText='Proven ROI: "Clients see an average ROI of 5x their investment."' />
            <Check checkText='State-of-the-art: "Automation tools to streamline routine processes."' />
            <Check checkText='Tailored Strategies: "Custom solutions designed to meet your specific needs."' />
            <Check checkText='Expert Team: "A dedicated team of AI and marketing professionals committed to your success."' />
          </div>
        </div>

        <img src="../kali-img.png" alt="" className="w-80 rounded-lg" />
      </section>

      <section className="container flex flex-col items-center justify-center gap-20 text-white mt-20">
        <div className="flex flex-col items-start gap-6 text-left w-4/12">
          <img src="../integration.svg" alt="" className="w-12" />
          <h1 className="text-4xl font-semibold leading-tight">Growth-oriented integration</h1>
          <p className="text-secondaryText leading-relaxed font-medium">Empower your business with flexible and growth-oriented integration solutions & technologies</p>
          <MainButton textButton="Discover More"  />
        </div>

        <div className="w-full flex ml-[-300px] mt-6 items-center justify-center">
          <IntegCarousel className="ml-[-50px]" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white h-screen mt-80">
        <MiniCard miniCardText="PRICING" className="" />
        <h1 className="text-4xl font-semibold">Choose the right pricing plan for you</h1>

        <div className="flex justify-between w-full">
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full border-2 border-white hover:bg-mainColor hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full text-primaryText bg-mainColor hover:bg-white hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
          <PriceCard priceCardTitle="Forever Free" priceCardText="Forever free, even after the launch" buttonText="Discover More" styleButton="w-full p-3 rounded-full border-2 border-white hover:bg-mainColor hover:border-mainColor hover:text-primaryText transition duration-300 ease-in-out" />
        </div>


      </section>

      <section className="container flex flex-col items-center gap-14 text-white h-screen mt-80">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>

        <TestCardCarousel />


      </section>
      
    </div>
  );
}