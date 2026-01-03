import { DocStarIn, HexagonDice, Mail, Suitcase, UserCircle } from 'iconoir-react'

export const RenderNavbarIcon = (props: { icon: string }) => {
  if (props.icon === 'aboutme')
    return <UserCircle className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'experience')
    return <Suitcase className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'projects')
    return <HexagonDice className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'resume')
    return <DocStarIn className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
  if (props.icon === 'contact')
    return <Mail className='max-lg:h-6 max-lg:w-6 lg:h-8 lg:w-8' />
}
