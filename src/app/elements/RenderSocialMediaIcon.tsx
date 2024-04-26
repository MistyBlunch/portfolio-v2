'use client'

import { GithubCircle, Instagram, Linkedin, Mail, Youtube } from 'iconoir-react'
import NoSsr from './NoSsr'

export const RenderSocialMediaIcon = (props: { icon: string }) => {
  return (
    <NoSsr>
      {props.icon === 'github' && (
        <GithubCircle className='social-icon h-10 w-10' />
      )}
      {props.icon === 'instagram' && (
        <Instagram className='social-icon h-10 w-10' />
      )}
      {props.icon === 'linkedin' && (
        <Linkedin className='social-icon h-10 w-10' />
      )}
      {props.icon === 'gmail' && <Mail className='social-icon h-10 w-10' />}
      {props.icon === 'youtube' && (
        <Youtube className='social-icon h-10 w-10' />
      )}
    </NoSsr>
  )
}
