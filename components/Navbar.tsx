import Routes, { RouteItemType } from '@/components/Routes'
import Input from '@/components/elements/Input'
import LogoImage from '@/assets/images/logo-light.svg'
import MagnifierIcon from '@/assets/icons/magnifier.svg'

const ROUTES: RouteItemType[] = [
  { label: 'Lorem 1', path: '#' },
  { label: 'Lorem 1', path: '#' },
  { label: 'Lorem 1', path: '#' },
]

const Navbar = () => {
  return (
    <div>
      <div className="flex h-24 items-center bg-dark px-10">
        <div className="mr-auto">
          <LogoImage />
        </div>
        <div className="mx-10">
          <Input placeholder="Lorem ipsum" icon={<MagnifierIcon />} />
        </div>
        <div>
          <Routes routes={ROUTES} />
        </div>
      </div>
      <div
        className="h-1"
        style={{
          background:
            'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)',
        }}
      />
    </div>
  )
}

export default Navbar
