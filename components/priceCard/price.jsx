export function Price({price}){
    return(
        <span className="flex gap-3 items-end">
            <p className="text-5xl font-bold text-mainColor">${price}</p>
            <p className="text-sm mb-1">/ per month</p>
        </span>
    )
}