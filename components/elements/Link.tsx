import { ReactNode } from 'react'
import cls from 'classnames'

type PropTypes = {
  label: string
  icon: ReactNode
  link: string
  primary?: boolean
}

const Link = ({ label, icon, link, primary }: PropTypes) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cls('flex items-center gap-x-4 text-sm', {
        'text-primary': primary,
      })}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </a>
  )
}

export default Link
