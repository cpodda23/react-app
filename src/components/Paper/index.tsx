import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  children: ReactNode
  rounded?: boolean
  shadow?: boolean
  className?: string
}

export function Paper({ children, className, rounded = true, shadow = true }: Props) {
  return <div className={cn('paper', className, { rounded, shadow })}>{children}</div>
}
