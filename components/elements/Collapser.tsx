import { ReactNode, useState } from 'react'
import CirclesIcon from '@/assets/icons/circles.svg'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
import QuestionMarkIcon from '@/assets/icons/question-mark.svg'

type PropTypes = {
  children: ReactNode
  isOpen?: boolean
  isHintable?: boolean
}

const Collapser = ({
  children,
  isOpen = false,
  isHintable = false,
}: PropTypes) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="block rounded bg-dark">
      <button
        className="flex w-full items-center py-8 px-7"
        onClick={() => setOpen(!open)}
      >
        <CirclesIcon />
        <div className="ml-3">Lorem ipsum</div>
        <div className="mr-auto ml-2">{isHintable && <QuestionMarkIcon />}</div>
        <ChevronDownIcon />
      </button>
      {open && (
        <div className="mx-7 mb-12 max-h-80 overflow-y-scroll">{children}</div>
      )}
    </div>
  )
}

export default Collapser
