import { ReactNode } from 'react'
import cls from 'classnames'

type PropTypes = {
  children: ReactNode
  icon?: ReactNode
  transparent?: boolean
}

const Button = ({ children, icon, transparent = false }: PropTypes) => {
  return (
    <button
      className={cls('flex items-center rounded px-9 py-4 text-sm capitalize', {
        'bg-dark': !transparent,
        'bg-dark/50': transparent,
      })}
    >
      <div className="mr-2">{icon}</div>
      {children}
    </button>
  )
}

export default Button
