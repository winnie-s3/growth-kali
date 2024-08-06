export function EmailSubs(){
    return(
        <form action="" className="flex gap-2 p-3 md:pl-8 bg-[#0D0D0D] rounded-2xl border border-border md:w-4/5 w-full">
          <input type="email" placeholder="example@gmail.com" className="w-full bg-[#0D0D0D] focus:outline-none placeholder:text-[#CCCCCC]"/>
          <button className="px-4 py-2 bg-mainColor text-primaryText rounded shadow-xl shadow-shadow">Subscribe</button>
        </form>
    )
}