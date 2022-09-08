import type { NextPage } from 'next'
import Button from '@/components/elements/Button'
import Collapser from '@/components/elements/Collapser'
import Link from '@/components/elements/Link'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import StatsCard from '@/components/StatsCard'
import Footer from '@/components/Footer'
import StatsData from '@/data/stats'

import GraphIcon from '@/assets/icons/graph.svg'
import CirclesIcon from '@/assets/icons/circles.svg'
import TagIcon from '@/assets/icons/tag.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import ExternalLinkIcon from '@/assets/icons/external-link.svg'
import DiscordIcon from '@/assets/icons/discord.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-11">
        <Profile />
        <div className="flex justify-center gap-x-5">
          <Button transparent icon={<GraphIcon />}>
            Lorem ipsum
          </Button>
          <Button icon={<CirclesIcon />}>Lorem ipsum</Button>
          <Button transparent icon={<TagIcon />}>
            Lorem ipsum
          </Button>
        </div>
        <div className="container mx-auto mt-20 mb-16">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <Collapser isOpen>
                <div>
                  <p className="mb-10 max-w-md text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <div className="grid grid-cols-2 gap-y-5">
                    <Link
                      primary
                      label="Lorem ipsum.com"
                      icon={<ExternalLinkIcon />}
                      link="#"
                    />
                    <Link
                      primary
                      label="@Lorem ipsum"
                      icon={<InstagramIcon />}
                      link="#"
                    />
                    <Link
                      primary
                      label="@Lorem ipsum"
                      icon={<DiscordIcon />}
                      link="#"
                    />
                    <Link
                      label="@Lorem ipsum"
                      icon={<TwitterIcon />}
                      link="#"
                    />
                  </div>
                </div>
              </Collapser>
            </div>
            <div className="flex flex-col gap-y-5">
              <Collapser isHintable isOpen>
                <div className="grid grid-cols-3 gap-x-2 gap-y-3">
                  {StatsData.map(({ name, label, percentage }) => (
                    <StatsCard
                      key={name}
                      name={name}
                      label={label}
                      percentage={percentage}
                    />
                  ))}
                </div>
              </Collapser>
              <Collapser>
                <div>Lorem ipsum</div>
              </Collapser>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
