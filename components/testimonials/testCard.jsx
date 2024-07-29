export function TestCard({author, position, testimonial}) {
    return(
        <div className="w-96 ml-8 text-secondaryText flex flex-col gap-6 items-start justify-center text-left bg-[#12161B] border border-border rounded-lg p-5">
            <p className="">"{testimonial}"</p>
            <span className="flex gap-3">
              <img src="https://picsum.photos/64" alt="" className="w-16 h-16 rounded-lg" />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-white text-lg">{author}</p>
                <p className="text-sm">{position}</p>
              </div>
            </span>
        </div>
    )
}