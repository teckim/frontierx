export type PropTypes = {
  name: string
  label: string
  percentage: number
}

const StatsCard = ({ name, label, percentage }: PropTypes) => {
  return (
    <div className="flex flex-col gap-y-1 rounded bg-black px-8 py-4 text-center">
      <div className="text-sm text-[#a2a2a2]">{name}</div>
      <div className="text-md">{label}</div>
      <div className="text-sm text-[#a2a2a2]">{percentage}%</div>
    </div>
  )
}

export default StatsCard
