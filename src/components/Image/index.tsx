import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  source: string
}

export function Image({ source }: Props) {
  return <img src={source} alt="" />
}
