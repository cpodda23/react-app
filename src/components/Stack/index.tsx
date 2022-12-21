import cn from 'classnames'
import { ReactNode } from 'react'
import './style.css'

type Props = {
  direction?: 'horizontal' | 'vertical'
  gap?: number
  children: ReactNode
  className?: string
}

export const Stack = ({
  children,
  className,
  direction = 'horizontal',
  gap = 20
}: Props) => (
  <div
    style={{ gap }}
    className={cn('stack', className, { 'stack-v': direction === 'vertical' })}
  >
    {children}
  </div>
)
