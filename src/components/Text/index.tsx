import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  color?: string
  size?: 'small' | 'medium' | 'large'
  bold?: boolean
  children: ReactNode
}

export function Text({
  bold,
  children,
  variant: Variant = 'p',
  size = 'medium',
  color = 'black'
}: Props) {
  return (
    <Variant style={{ color }} className={cn(size, { bold })}>
      {children}
    </Variant>
  )
}
