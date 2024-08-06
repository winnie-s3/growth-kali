import { FaFacebook } from "react-icons/fa6";
import { RiLink, RiTwitterXFill } from "react-icons/ri";

export function Author({author, dataPost, min}) {
    return(
        <span className="flex justify-between items-center text-white w-full text-left">
          <span className="flex gap-3">
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/64" alt="" className="md:w-14 md:h-14 w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{author}</p>
                <span className="flex items-center gap-2">
                  <p className="text-sm text-secondaryText">{dataPost}</p>
                  <p className="text-sm text-secondaryText">• {min} min read</p>
                </span>
              </div>
            </div>
          </span>
          <span className="flex gap-3">
            <ul className="flex gap-3 text-mainColor">
              <li className="md:p-2 p-1 bg-[#393938] rounded-full list-none"><a href=""><RiLink size={20} /></a></li>
              <li className="md:p-2 p-1 bg-[#393938] rounded-full list-none"><a href=""><FaFacebook size={20} /></a></li>
              <li className="md:p-2 p-1 bg-[#393938] rounded-full list-none"><a href=""><RiTwitterXFill size={20} /></a></li>
            </ul>
          </span>
        </span>
    )
}