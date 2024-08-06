export function Achievement({achievementNumber, achievementText}) {
    return(
        <div className="flex flex-col items-start justify-center text-left gap-2">
          <p className="text-5xl font-semibold">{achievementNumber}+</p>
          <p className="text-secondaryText text-lg font-medium">{achievementText}</p>
        </div>
    )
}