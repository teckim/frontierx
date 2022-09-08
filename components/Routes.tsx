import Link from 'next/link'

export type RouteItemType = {
  label: string
  path: string
}

type PropTypes = {
  routes: RouteItemType[]
}

const Routes = ({ routes }: PropTypes) => {
  return (
    <div className="flex gap-x-12">
      {routes.map(({ label, path }) => (
        <Link className="text-sm font-extrabold" key={label} href={path}>
          <a className="text-sm font-extrabold">{label}</a>
        </Link>
      ))}
    </div>
  )
}

export default Routes
