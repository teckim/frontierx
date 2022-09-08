import Image from 'next/image'
import CoverImage from '@/assets/images/cover.jpg'
import AvataImage from '@/assets/images/avatar.png'

const Profile = () => {
  return (
    <div className="mb-16 w-full">
      <div className="relative mb-20">
        <Cover />
        <Avatar />
      </div>
      <div>
        <div className="mb-2 text-center text-5xl font-extrabold">
          Lorem ipsum
        </div>
        <div className="h-10 text-center">
          Created by: <span className="text-primary">Lorem ispum</span>
        </div>
        <div className="h-8 text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </div>
      </div>
    </div>
  )
}

const Cover = () => (
  <div className="mx-5">
    <div className="mx-auto h-64 overflow-hidden rounded">
      <Image
        src={CoverImage}
        layout="responsive"
        alt="Cover image"
      />
    </div>
  </div>
)

const Avatar = () => (
  <div className="absolute inset-x-0 -bottom-14 flex justify-center">
    <Image src={AvataImage} alt="Avata image" />
  </div>
)

export default Profile
