import {
  BeakerIcon,
  UserCircleIcon,
  BoltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const RenderIcon = (props: { icon: string }) => {
  if (props.icon === 'aboutme')
    return <UserCircleIcon className='xs:w-8 sm:w-6 lg:w-8' />
  if (props.icon === 'experience')
    return <BeakerIcon className='xs:w-8 sm:w-6 lg:w-8' />
  if (props.icon === 'project')
    return <BoltIcon className='xs:w-8 sm:w-6 lg:w-8' />
  if (props.icon === 'contact')
    return <PhoneIcon className='xs:w-8 sm:w-6 lg:w-8' />
}
