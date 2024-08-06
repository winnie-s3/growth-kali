import { FacebookLogo, LinkSimple, XLogo } from "@phosphor-icons/react";
import { RiLink, RiLinkM, RiTwitterXFill  } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

export function FooterGrowth(){
    return(
        <footer className="w-full flex flex-col items-start justify-between text-left p-4 font-medium h-[40vh] text-white pb-28">
          <div className="w-full flex md:flex-row flex-col items-start justify-center md:selection:gap-0 gap-14">
            <div className="w-full flex flex-col items-start justify-center gap-6">
              <img src="../intCarousel/intCard6.png" alt="" className="w-24 h-24" />
              <p>Experience Growth Like You've Always Dreamt. <br /> Partner today with Growth Kali.</p>
              <span className="flex gap-3">
                <a href="https://twitter.com/Tanjim38" className="p-2 bg-[#393938] rounded-full text-mainColor"><RiLink size={20} weight="bold" /></a>
                <a href="https://twitter.com/Tanjim38" className="p-2 bg-[#393938] rounded-full text-mainColor"><FaFacebook size={20} weight="bold" /></a>
                <a href="https://twitter.com/Tanjim38" className="p-2 bg-[#393938] rounded-full text-mainColor"><RiTwitterXFill size={20} weight="bold" /></a>
              </span>
            </div>

            <div className="w-full flex items-start justify-between">
              <div className="flex flex-col items-start justify-center gap-3">
                <h3 className="text-2xl font-medium">Page</h3>
                <ul className="flex flex-col gap-3 items-start justify-center">
                  <li className="list-none"><a href="/">Home</a></li>
                  <li className="list-none"><a href="/servicesPage/">Pricing</a></li>
                  <li className="list-none"><a href="/blogPage/">Blog</a></li>
                  <li className="list-none"><a href="/contactPage/">Contact</a></li>
                  <li className="list-none"><a href="/servicesPage">About page</a></li>
                  <li className="list-none"><a href="">404 Error page</a></li>
                  <li className="list-none"><a href="">Blog Details page</a></li>
                </ul>
              </div>
              <div className="w-2/3 flex flex-col items-start justify-center gap-3">
                <h3 className="text-2xl font-medium">Contact Us</h3>
                <ul className="flex flex-col gap-3 items-start justify-center">
                  <li className="list-none"><a href="mailto: info@growthkali.com">info@growthkali.com</a></li>
                  <li className="list-none"><a href="tel:+1 877-355-9977">+1 877-355-9977</a></li>
                  <li className="list-none"><a href="https://www.google.com/maps/place/200+Massachusets+Ave+NW,+Washington,+DC+20001">200 Massachussets Ave NW, Washington, DC - 20001</a></li>
                </ul>
              </div>
            </div>
          </div>

          <span className="w-full flex items-center justify-between mt-10 border-t-border border-t-2 pt-5 pb-6 text-sm">
            <p>Copyright © 2024 Growth Kali. All rights reserved.</p>
            <span className="flex md:gap-12 gap-4">
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
              <a href="">Terms & Conditions</a>
            </span>
          </span>
        </footer>
    )
}