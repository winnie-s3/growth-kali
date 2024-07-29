import Image from "next/image";

export function MiniCard({miniCardText}) {
    return(
        <div className="text-sm text-center text-mainColor bg-miniCard rounded-full px-3 py-2 flex items-center justify-center gap-2 border border-mainColor font-medium">
          <div>
            <Image src="/miniCard-icon.svg" alt="" width={20} height={20} />
          </div>
          {miniCardText}
        </div>
    )
}