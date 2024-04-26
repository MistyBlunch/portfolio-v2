import { Flask, HexagonDice, Mail, UserCircle } from 'iconoir-react'

export const RenderNavbarIcon = (props: { icon: string }) => {
  if (props.icon === 'aboutme')
    return <UserCircle className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'experience')
    return <Flask className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'projects')
    return <HexagonDice className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'contact')
    return <Mail className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
}
