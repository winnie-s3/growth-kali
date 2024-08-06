import { ProjectorScreen } from "@phosphor-icons/react";

export function Contact({contactTitle, contactText, icon: Icon, contact}) {
    return(
        <div className="flex flex-col gap-4 items-start justify-center text-left w-64 text-white">
            <Icon weight="fill" className="w-10 h-10 text-mainColor" />
            <p className="text-3xl font-semibold">{contactTitle}</p>
            <p className="text-secondaryText">{contactText}</p>
            <p>{contact}</p>
        </div>
    )
}