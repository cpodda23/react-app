import classNames from 'classnames'
import cn from 'classnames'
import { ReactNode } from 'react'
import { Text } from '../Text'
import './style.css'

type Props = {
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  titleColor?: string
  titleSize?: 'small' | 'medium' | 'large'
  titleBold?: boolean
  descriptionVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  descriptionColor?: string
  descriptionSize?: 'small' | 'medium' | 'large'
  descriptionbold?: boolean
  children: ReactNode
  className?: string
}

export function Title({
  className,
  children,
  titleVariant = 'p',
  titleSize = 'medium',
  titleBold = false,
  descriptionVariant = 'p',
  descriptionColor = 'black',
  descriptionSize = 'medium',
  descriptionbold = false
}: Props) {
  return (
    <div>
      {/* <Text className={cn(titleVariant, titleSize, titleBold)} />
      <Text
        className={cn(
          (descriptionVariant = 'p'),
          (descriptionColor = 'black'),
          (descriptionSize = 'medium'),
          descriptionbold
        )}
      /> */}
    </div>
  )
}
