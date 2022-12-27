import { IconName } from '@fortawesome/fontawesome-svg-core'
import cn from 'classnames'
import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Paper } from '../Paper'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  icon: IconName
  children?: ReactNode
}

export function MenuItem({ children, title, icon }: Props) {
  return (
    <div className="memuItem" title={title}>
      <Icon name={icon} />
    </div>
  )
}
