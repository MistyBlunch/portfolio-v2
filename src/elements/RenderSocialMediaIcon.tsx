'use client'

import { useTheme } from 'next-themes'

import { Github } from '@/public/images/social-media/github'
import { Instagram } from '@/public/images/social-media/instagram'
import { LinkedIn } from '@/public/images/social-media/linkedin'
import { Gmail } from '@/public/images/social-media/gmail'
import { YouTube } from '@/public/images/social-media/youtube'

import NoSsr from './NoSsr'

export const RenderSocialMediaIcon = (props: { icon: string }) => {
  const { theme } = useTheme()

  const lightColor = '#fefeff'
  const darkColor = '#334155'
  const color = theme === 'dark' ? lightColor : darkColor

  return (
    <NoSsr>
      {props.icon === 'github' && <Github color={color} />}
      {props.icon === 'instagram' && <Instagram color={color} />}
      {props.icon === 'linkedin' && <LinkedIn color={color} />}
      {props.icon === 'gmail' && <Gmail color={color} />}
      {props.icon === 'youtube' && <YouTube color={color} />}
    </NoSsr>
  )
}
