"use client"

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
import { useEffect } from "react";
import { Achievement } from "@/components/achievement";
import { Values } from "@/components/values";
import { FileX, ProjectorScreen, ShareFat } from "@phosphor-icons/react";
import { Team } from "@/components/team";
import { FooterGrowth } from "@/components/footer";

export default function Services() {

  return (
    <div className="w-full text-center md:px-12 px-8 py-10 gap-32 flex flex-col">
      <section className="container flex flex-col items-center justify-center gap-10 md:mt-36 mt-20">
        <Header />

        <div className="flex flex-col items-center text-center gap-5 text-white">
          <h1 className="text-6xl font-medium"><span className="text-mainColor leading-normal">Empowering</span> Teams with Innovative Project <span className="text-mainColor">Management</span> Solutions</h1>
          <p className="text-lg font-medium text-secondaryText">Discover Our Story, Mission and Commitment to Streamlining Project Workflows</p>
        </div>
      </section>

      <section className="container flex flex-col items-center justify-center gap-12 text-white w-full">
        <div className="md:flex-row flex-col gap-10 flex md:items-start items-center md:justify-between w-full">
          <div className="flex flex-col items-start gap-6 text-left sticky">
            <MiniCard miniCardText="About us" className="my-64" />
            <h1 className="text-5xl font-semibold leading-tight"><span className="text-mainColor">Revolutionizing</span> Project Management with Saasta</h1>
            <MainButton textButton="Contact us" />
          </div>

          <div className="md:w-8/12 w-full text-left flex flex-col gap-8 text-xl text-secondaryText font-medium">
            <p>At Saasta, our journey began with a simple but powerful idea: to revolutionize project management for teams of all sizes. Frustrated by the complexities and limitations of existing solutions, we set out to create a platform that would empower teams to collaborate more effectively, streamline workflows, and drive success.</p>
            <p>With a team of passionate developers and project management experts, we embarked on a journey of innovation and iteration. We listened to the needs of our users, gathered feedback, and continuously refined our platform to meet the evolving demands of modern businesses.</p>
            <p>Today, Saasta stands as a testament to our commitment to excellence and our relentless pursuit of improvement. We take pride in providing a solution that not only meets the needs of our users but exceeds their expectations. As we continue to grow and evolve, our dedication to empowering teams with innovative project management solutions remains unwavering.</p>
          </div>
        </div>
        
        <img src="../aboutUs.jpg" alt="" className="rounded-xl w-full" />
      </section>

      <section className="container flex md:flex-row flex-col items-center justify-between gap-20 text-white w-full">
        <div className="flex flex-col items-start gap-14 text-left">
          <MiniCard miniCardText="ACHIEVEMENT" className="my-64" />
          <h1 className="text-5xl font-medium leading-tight">Highlight <span className="text-mainColor">achievements</span> by the <span className="text-mainColor">numbers</span></h1>
          <div className="flex justify-between items-center md:w-2/3 w-full">
            <div className="flex flex-col gap-8">
              <Achievement achievementNumber="500" achievementText="Projects completed" />
              <Achievement achievementNumber="500" achievementText="Projects completed" />
            </div>
            <div className="flex flex-col gap-8">
              <Achievement achievementNumber="500" achievementText="Projects completed" />
              <Achievement achievementNumber="500" achievementText="Projects completed" />
            </div>
          </div>
        </div>

        <div className="text-left flex flex-col gap-8 text-xl text-secondaryText font-medium">
          <img src="../achievement.jpg" alt="" className="rounded-xl md:w-[40vw] w-full" />
        </div>
      </section>

      <Carousel />

      <section className="container flex flex-col items-center justify-center gap-14 text-white mt-20">
        <div className="flex flex-col items-center gap-6 text-center md:w-3/6 w-full">
          <MiniCard miniCardText="Our Values" className="" />
          <h1 className="text-5xl font-semibold leading-tight">Delivering <span className="text-mainColor">Excellence</span> in Project <span className="text-mainColor">Management</span></h1>
          <p className="leading-relaxed font-normal">Discover How Saasta Redefines Project Management for Modern Teams</p>
        </div>

        <div className="w-full flex gap-10 md:flex-row flex-col items-center justify-center">
          <Values icon={ProjectorScreen} valuesTitle="Integrity" valuesText="We believe in transparency and honesty. We embrace diversity and strive to create a welcoming and inclusive environment for everyone." />
          <Values icon={ShareFat} valuesTitle="Collaboration" valuesText="We embrace collaboration and strive to build strong, mutually beneficial relationships with our clients and partners." />
          <Values icon={FileX} valuesTitle="Innovation" valuesText="We embrace innovation and strive to continuously improve our platform to meet the evolving demands of modern businesses." />
        </div>
      </section>

      <section className="container flex flex-col items-center justify-center gap-14 text-white">
        <div className="flex flex-col items-center gap-6 text-center md:w-3/6 w-full">
          <MiniCard miniCardText="TEAMS" className="" />
          <h1 className="text-5xl font-semibold leading-tight">Introduce our <span className="text-mainColor">Team</span></h1>
          <p className="leading-relaxed font-normal">Discover How Saasta Redefines Project Management for Modern Teams</p>
        </div>

        <div className="w-full flex flex-col gap-10 items-center justify-center">
          <div className="w-full flex md:flex-row flex-col gap-10 items-center justify-center">
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
          </div>

          <div className="w-full flex md:flex-row flex-col gap-10 items-center justify-center">
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
            <Team member="John Doe" role="Project Manager" site="https://twitter.com/Tanjim38" twitter="https://twitter.com/Tanjim38" facebook="https://twitter.com/Tanjim38" description="John is a project manager with 10 years of experience. He is passionate about project management and loves to help teams achieve their goals." />
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white">
        <MiniCard miniCardText="TESTIMONIALS" className="" />
        <h1 className="text-4xl font-semibold">Testimonials About Us</h1>
        <div className="w-full flex flex-col gap-10 items-center justify-center">
          <TestCardCarousel direction="left" />
          <TestCardCarousel direction="right" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>

        <AccordionQuest />


      </section>

      <section className="container flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-5 text-center md:w-7/12 w-full bg-miniCard rounded-xl p-14 bg-gradient-to-b from-dark to-miniCard">
          <h1 className="md:text-5xl text-4xl font-semibold leading-tight">Ready to Streamline Your Project Management?</h1>
          <p className="text-lg">Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>
          <MainButton textButton="Get Started Today" />
        </div>
      </section>

      <section className="container flex flex-col items-center gap-14 text-white">
        <FooterGrowth />
      </section>
      
    </div>
  );
}