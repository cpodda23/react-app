// import cn from 'classnames'
import { ReactNode } from 'react'
import { Card } from '../Card'
import { Paper } from '../Paper'
import { Stack } from '../Stack'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export function Special({ title, description, children }: Props) {
  return (
    <Paper className="special">
      <Stack className="stack-v">
        <Text variant="h1" size="large" color="white">
          {title}
        </Text>
        <Text variant="h5" size="small" color="white">
          {description}
        </Text>
        <div> {children}</div>
      </Stack>
    </Paper>
  )
}
