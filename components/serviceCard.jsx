import Image from "next/image";

export function ServiceCard({serviceIcon, serviceTitle, serviceText}) {
    return(
        <div className="rounded-lg gap-7 p-5 md:w-[23rem] w-full flex items-start bg-miniCard text-left">
          <img className="rounded-lg p-4 bg-border w-16" src={serviceIcon} alt=""/>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">{serviceTitle}</h2>
            <p className="text-secondaryText">{serviceText}</p>
          </div>
        </div>
    )
}