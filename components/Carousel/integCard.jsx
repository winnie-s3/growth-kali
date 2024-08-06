export function IntegCard({intImage, integTitle, integText}) {
    return(
        <div className="gap-2 p-5 w-64 h-64 flex justify-center flex-col items-center bg-miniCard text-white mr-5 hover:shadow-[inset_0px_-28px_31px_-32px_#A0E00D] rotate-[-90deg]">
          <div className="w-20 h-20 flex justify-end items-end rounded-full ">
            <img src={intImage} alt="" className="w-20 h-20 p-2 bg-miniCard rounded-full border-t-2 border-l-2 border-[#A0E00D]" />
          </div>
          <h2 className="text-2xl font-semibold">{integTitle}</h2>
          <p className="text-secondaryText">{integText}</p>
        </div>
    )
}