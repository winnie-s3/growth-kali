"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuButton } from './menu-button';

export function Header() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
    }
  }, []);

  return (
    <header id="navbar" className="container w-4/5 rounded-full bg-primary flex justify-between items-center md:px-16 px-6 text-white border-border border fixed z-50 backdrop-blur-sm">
      <img src="/logo.png" alt="" className="md:w-48 w-36" />
      <nav className="lg:flex gap-5 hidden">
        <Link href={"/"} className='hover:text-mainColor'>Home</Link>
        <Link href={"/servicesPage/"} className='hover:text-mainColor'>Services</Link>
        <Link href={"/pricingPage/"} className='hover:text-mainColor'>Pricing</Link>
        <Link href={"/blogPage/"} className='hover:text-mainColor'>Blog</Link>
        <Link href={"/servicesPage/"} className='hover:text-mainColor'>About</Link>
      </nav>
      <span className="lg:flex gap-4 hidden">
        <a href="/contactPage/" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition duration-300 ease-in-out">Contact Us</a>
        <a href="https://tanjim.lemonsqueezy.com/checkout" className="px-4 py-2 bg-mainColor text-primaryText rounded-full hover:bg-white transition duration-300 ease-in-out">Get the template</a>
      </span>
      <MenuButton className="lg:hidden block" />
    </header>
  );
}
