import classNames from 'classnames'
import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  color?: string
  size?: 'small' | 'medium' | 'large'
  bold?: boolean
  children: ReactNode
  className?: string
}

export function Text({
  bold,
  children,
  variant: Variant = 'p',
  size = 'medium',
  color = 'black',
  className
}: Props) {
  return (
    <Variant style={{ color }} className={cn(size, className, { bold })}>
      {children}
    </Variant>
  )
}
