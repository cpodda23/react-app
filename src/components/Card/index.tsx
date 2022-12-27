import cn from 'classnames'
import { ReactNode } from 'react'
import { Paper } from '../Paper'
import { Stack } from '../Stack'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Card({ title, description, children, className }: Props) {
  return (
    <Paper className={cn('paper-card', className)}>
      <div className="card-header">
        <Text variant="h4">{title}</Text>
        {description && (
          <Text variant="h6" color="grey">
            {description}
          </Text>
        )}
      </div>
      <div className="card-content">{children}</div>
    </Paper>
  )
}
