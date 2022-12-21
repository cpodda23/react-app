// import cn from 'classnames'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Children, ReactNode } from 'react'
import { Icon } from '../Icon'
import { Paper } from '../Paper'
import { Stack } from '../Stack'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  description?: string
  icon: IconName
  iconColor?: string
}

export function Statistic({ title, description, icon, iconColor }: Props) {
  return (
    <Paper>
      <Icon name="ellipsis" className="menu-icon" />
      <Stack>
        <div className="statistic-icon">
          <Icon name={icon} color={iconColor} />
        </div>
        <Stack direction="vertical" gap={4}>
          <Text variant="h4" size="large">
            {title}
          </Text>
          <Text variant="h5" size="small" color="grey">
            {description}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  )
}
