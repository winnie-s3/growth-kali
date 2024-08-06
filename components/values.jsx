import { ProjectorScreen } from "@phosphor-icons/react";

export function Values({valuesTitle, valuesText, icon: Icon}) {
    return(
        <div className="flex flex-col gap-3 items-center justify-center text-center w-64">
            <Icon weight="fill" className="w-12 h-12 text-mainColor" />
            <p className="text-3xl font-semibold">{valuesTitle}</p>
            <p className="text-secondaryText">{valuesText}</p>
        </div>
    )
}