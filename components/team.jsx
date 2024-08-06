import { FacebookLogo, LinkSimple, XLogo } from "@phosphor-icons/react";

export function Team({member, position, description, site, facebook, twitter}) {
    return(
        <div className="w-80 flex flex-col gap-4 items-center justify-center text-center">
            <img src="https://picsum.photos/80" alt="" className="w-20 h-20 rounded-full" />

            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">{member}</h2>
              <p className="text-secondaryText">{position}</p>
            </div>
            
            <p className="text-secondaryText">{description}</p>

            <span className="flex gap-3">
              <a href={site} className="p-2 bg-[#393938] rounded-full text-mainColor"><LinkSimple size={24} weight="bold" /></a>
              <a href={facebook} className="p-2 bg-[#393938] rounded-full text-mainColor"><FacebookLogo size={24} weight="bold" /></a>
              <a href={twitter} className="p-2 bg-[#393938] rounded-full text-mainColor"><XLogo size={24} weight="bold" /></a>
            </span>
        </div>
    )
}