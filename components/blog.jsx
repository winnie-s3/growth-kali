import { ArrowArcRight } from "@phosphor-icons/react";
import { FaChevronRight } from "react-icons/fa";

export function Blog({blogMin, blogTitle, blogText}) {
    return(
        <div className="flex flex-col gap-3 items-start text-left justify-between md:w-1/3 w-full">
          <img src="https://picsum.photos/320/250" alt="" className="rounded-lg w-80" />
          <p className="text-sm font-semibold">{blogMin} min read</p>
          <p className="text-2xl font-semibold">{blogTitle}</p>
          <p className="text-base">{blogText}</p>
          <a href="" className="font-semibold text-base flex gap-3">Read more <FaChevronRight size={20} /></a>
        </div>
    )
}