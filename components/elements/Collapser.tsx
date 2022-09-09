import { ReactNode, useState } from 'react'
import cls from 'classnames'
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
    <div className="block rounded bg-dark/50">
      <button
        className="flex w-full items-center py-8 px-7"
        onClick={() => setOpen(!open)}
      >
        <CirclesIcon />
        <div className="ml-3">Lorem ipsum</div>
        <div className="mr-auto ml-2">{isHintable && <QuestionMarkIcon />}</div>
        <ChevronDownIcon />
      </button>
      <div
        className={cls(
          'mx-7 mb-12 overflow-y-scroll transition-all duration-500',
          { 'mb-0 opacity-0': !open }
        )}
        style={{ maxHeight: open ? '336px' : '0' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapser
