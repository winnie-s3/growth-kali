
import { Carousel } from "@/components/Carousel/carousel";
import { Check } from "@/components/check";
import { EmailSubs } from "@/components/Home/emailSubs";
import { Header } from "@/components/header";
import { MiniCard } from "@/components/miniCard";
import { ServiceCard } from "@/components/serviceCard";
import Image from "next/image";
import { ServiceContainer } from "@/components/serviceContainer";
import { MainButton } from "@/components/mainButton";
import { FaCheck, FaUser } from "react-icons/fa6";
import IntegCarousel from "@/components/Carousel/integCarousel";
import { PriceCard } from "@/components/priceCard/priceCard";
import TestCardCarousel from "@/components/testimonials/testCardCarousel";
import { AccordionQuest } from "@/components/questions/accordionQuest";
import { Footer, FooterGrowth } from "@/components/footer";

export default function Home() {

  return (
    <div className="w-full md:px-16 px-8 text-center py-32 gap-15 flex flex-col">
      <section id="homeSection" className="container flex flex-col items-center gap-10 mb-44">
        <Header />
        <MiniCard miniCardText="Growth Kali ➜" className="my-64 animate-on-scroll" />

        <div className="flex flex-col items-center text-center gap-5 text-white md:w-3/5 w-full">
          <h1 className="md:text-6xl text-4xl font-semibold animate-on-scroll"><span className="text-mainColor">Automate</span> The Way You Grow Your <span className="text-mainColor">Business</span></h1>
          <p className="md:text-lg text-base md:leading-normal leading-relaxed font-medium text-secondaryText animate-on-scroll">Growth Kali helps you <span className="font-bold">attract, qualify, and close</span> more leads with cutting-edge AI strategies, that mix technology with deep understanding of marketing and sales. Ready to dominate your market?</p>
          <div className="flex flex-col gap-4 items-center w-full animate-on-scroll">
            <EmailSubs />
            <span className="md:flex-row flex md:gap-8 gap-3 flex-col items-center">
              <Check checkText="Get New Automations Every Week" />
              <Check checkText="100% Free" />
            </span>
          </div>
        </div>

        <img src="../kali-img.png" id="kaliImg" alt="" className="animate-on-scroll w-full mb-24 mt-59 animate-on-scroll" />

        <Carousel />
      </section>

      <section className="container flex flex-col items-center gap-20 text-white h-screen mb-20">
        <MiniCard miniCardText="HOW YOU ARE GOING TO GROW" className="my-64 animate-on-scroll" />

        <h1 className="text-4xl font-semibold animate-on-scroll">Transform Your Business with Our Expert Services</h1>

        <ServiceContainer>
          <ServiceCard serviceIcon="../card1.png" serviceTitle="AI Marketing" serviceText="Harness the power of AI to create compelling, data-driven marketing campaigns that convert" />
          <ServiceCard serviceIcon="../card2.svg" serviceTitle="Sales Automation" serviceText="Automate your sales processes to save time and close more deals efficiently and predictably" />
          <ServiceCard serviceIcon="../card3.svg" serviceTitle="Ads Management" serviceText="Maximize your ad spend with targeted, high-ROI campaigns managed by world-class experts" />
          <ServiceCard serviceIcon="../card4.svg" serviceTitle="Conversion Automation" serviceText="Engage your leads 24/7 with intelligent conversation automation that drives conversions" />
          <ServiceCard serviceIcon="../card1.png" serviceTitle="Authority Strategies" serviceText="Build trust, in scale, with our proprietary content creation system that differentiates your business from everything else" />
          <ServiceCard serviceIcon="../card5.png" serviceTitle="Advanced Analytics" serviceText="We support pushing the boundaries of achievable with our advanced data analytics that will guide your business decision making" />
        </ServiceContainer>
        

      </section>

      <section className="container flex-col md:flex-row flex items-center justify-center gap-20 text-white h-screen md:mt-0">
        <div className="flex flex-col md:items-start items-center gap-6 md:text-left text-center lg:w-3/12 w-full">
          <MiniCard miniCardText="WHO WE ARE" className="my-64" />
          <h1 className="text-4xl font-semibold leading-tight">Innovative technology to <span className="text-mainColor">skyrocket</span> your business</h1>
          <p className="text-secondaryText leading-relaxed">Welcome to Growth Kali, the ultimate powerhouse in AI Marketing and Sales Automation. We blend innovative technology with expert strategies to skyrocket your business growth. Whether you're a startup or an established enterprise, our tailored solutions will amplify your efforts and deliver outstanding results.</p>
          <MainButton textButton="Discover More" />
        </div>

        <img src="../kali-img.png" alt="" className="lg:w-1/3 w-2/3 rounded-lg" />

      </section>

      <section className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-20 text-white md:mt-20 mt-40">
        <div className="flex flex-col md:items-start items-center gap-6 text-left lg:w-4/12 w-full">
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

        <img src="../whyKali.jpg" alt="" className="lg:w-1/3 w-2/3 rounded-2xl" />
      </section>

      <section className="container flex flex-col lg:flex-row items-center justify-center gap-20 text-white md:mt-20 mt-40">
        <div className="flex flex-col md:items-start items-center gap-6 text-left lg:w-4/12 w-full">
          <MiniCard miniCardText="FEATURES" className="my-64" />
          <h1 className="text-4xl font-semibold leading-tight">The Difference Maker</h1>
          <p className="text-secondaryText leading-relaxed font-medium">Delivering Unmatched Value for Your Business<br />At Growth Kali, we offer more than just services—we deliver results. Here's what you can expect:</p>
          <div className="flex flex-col gap-3 text-sm">
            <Check checkText='Increased Lead Generation: "Attract high-quality leads with our AI-powered strategies."' />
            <Check checkText='Improved Lead Qualification: "Ensure your sales team focuses on the most promising prospects."' />
            <Check checkText='Higher Conversion Rates: "Convert more leads into customers with our automated follow-ups and nurturing campaigns."' />
            <Check checkText='Time and Cost Efficiency: "Save time and reduce costs with our seamless automation solutions."' />
          </div>
        </div>

        <img src="../whyKali.jpg" alt="" className="lg:w-1/3 w-2/3 rounded-2xl" />
      </section>

      <section className="container flex flex-col items-center justify-center gap-20 text-white mt-20">
        <div className="flex flex-col items-start gap-6 text-left md:w-4/12 w-full">
          <img src="../integration.svg" alt="" className="w-12" />
          <h1 className="text-4xl font-semibold leading-tight">Growth-oriented integration</h1>
          <p className="text-secondaryText leading-relaxed font-medium">Empower your business with flexible and growth-oriented integration solutions & technologies</p>
          <MainButton textButton="Discover More"  />
        </div>

        <div className="hidden w-full md:flex md:flex-col flex-row items-center justify-center rotate-90 mt-10">
          <IntegCarousel className="hidden" direct="right" />
          <IntegCarousel className="hidden" direct="left" />
        </div>

        <div className="w-full md:hidden flex-row items-center justify-center rotate-90 mt-10">
          <IntegCarousel className="hidden" direct="right" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white md:mt-80 mt-96">
        <MiniCard miniCardText="PRICING" className="" />
        <h1 className="text-4xl font-semibold">Choose the right pricing plan for you</h1>

        <div className="flex md:flex-row flex-col gap-10 md:justify-between w-full">
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