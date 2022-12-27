import { IconName } from '@fortawesome/fontawesome-svg-core'
import cn from 'classnames'
import { ReactNode } from 'react'
import { Paper } from '../Paper'
import { Text } from '../Text'
import './style.css'

type Props = {
  name: string
  color: string
  icon: IconName
  children?: ReactNode
  className?: string
}

export function Button({ children, className, color, name, icon }: Props) {
  return (
    <button
      className={cn('button', className)}
      color={color}
      name={name}
      // icon={IconName}
    />
  )
}
