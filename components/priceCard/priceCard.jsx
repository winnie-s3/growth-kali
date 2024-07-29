import { Check } from "../check";
import { MainButton } from "../mainButton";
import { Price } from "./price";

export function PriceCard({priceCardTitle, priceCardText, buttonText, styleButton}) {
    return(
        <div className="flex flex-col gap-10 items-start justify-center bg-miniCard rounded-md p-9 w-96">
            <div className="flex flex-col gap-1 items-start">
              <p className="text-xl font-semibold">{priceCardTitle}</p>
              <p className="text-secondaryText">{priceCardText}</p>
            </div>
            
            <Price price={0} />

            <div className="flex flex-col items-start justify-center text-secondaryText gap-2">
                <Check checkText="Ten links available" />
                <Check checkText="Own analytics platform" />
                <Check checkText="Mobile app" />
                <Check checkText="Chat Support" />
                <Check checkText="1000 users" />
                <Check checkText="Template Library" />
            </div>

            <a href="" className={styleButton}>{buttonText}</a>
        </div>
    )
}