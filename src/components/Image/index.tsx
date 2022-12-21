import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  source: string
  size?: 'small' | 'medium' | 'large'
}

export function Image({ source, size = 'medium' }: Props) {
  return <img src={source} alt="" className={size} />
}
