import { ReactNode } from 'react'

type PropTypes = {
  icon?: ReactNode
  placeholder?: string
}

const Input = ({ icon, placeholder }: PropTypes) => {
  return (
    <div
      className="flex h-11 items-center rounded-xl bg-[#1f1f1f] drop-shadow-lg"
      style={{ width: 657 }}
    >
      <div className="px-5">{icon}</div>
      <input
        className="w-full bg-transparent text-sm font-semibold 
          text-[#a2a2a2] placeholder:text-sm 
          placeholder:font-semibold focus:border-none focus:outline-none"
        placeholder={placeholder}
        type="text"
      />
    </div>
  )
}

export default Input
