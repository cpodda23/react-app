import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  children: ReactNode
  rounded?: boolean
  shadow?: boolean
}

export function Paper({ children, rounded = true, shadow = true }: Props) {
  return <div className={cn('paper', { rounded, shadow })}>{children}</div>
}
