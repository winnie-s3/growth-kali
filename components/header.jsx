"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

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
    <header id="navbar" className="container w-4/5 rounded-full bg-primary flex justify-between items-center px-16 text-white border-border border fixed z-50">
      <img src="/logo.png" alt="" className="w-48" />
      <nav className="flex gap-5">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
        <a href="">About</a>
      </nav>
      <span className="flex gap-4">
        <a href="" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition duration-300 ease-in-out">Contact Us</a>
        <a href="" className="px-4 py-2 bg-mainColor text-primaryText rounded-full hover:bg-white transition duration-300 ease-in-out">Get the template</a>
      </span>
    </header>
  );
}
