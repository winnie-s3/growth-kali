import { FaCheck } from "react-icons/fa6";

export function Check({checkText}) {
    return(
        <span className="flex items-center gap-2 text-secondaryText font-semibold">
            <img src="../check.svg" alt="" className="w-4" />
            <p className="">{checkText}</p>
        </span>
    )
}