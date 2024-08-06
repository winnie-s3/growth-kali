
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";


export function MenuButton() {
  return (
    <Sheet className="lg:hidden flex flex-col justify-center items-center backdrop-blur-sm">
      <SheetTrigger asChild>
        <button variant="outline" className="lg:hidden"><MenuIcon className="w-10 h-10 text-mainColor" /></button>
      </SheetTrigger>
      <SheetContent>
        <ul className="list-none flex flex-col items-center justify-center gap-4 h-full pt-14">
          <li className=""><a href="/">Home</a></li>
          <li><a href="/servicesPage/">Services</a></li>
          <li><a href="/pricingPage/">Pricing</a></li>
          <li><a href="/blogPage/">Blog</a></li>
          <li><a href="/servicesPage/">About</a></li>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex md:flex-row flex-col gap-4">
              <button className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition duration-300 ease-in-out">Contact Us</button>
              <button className="px-4 py-2 bg-mainColor text-primaryText rounded-full hover:bg-white transition duration-300 ease-in-out">Get the template</button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
