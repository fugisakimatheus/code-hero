import React from 'react'
import { chakra, ChakraProps } from '@chakra-ui/react'

interface IconProps extends ChakraProps {
  variant?: 'outlined' | 'round' | 'sharp' | 'two-tone'
  name: string
  color?: string
  size?: number | string
  className?: string
}

const ChakraSpan = chakra('span')

const Icon: React.FC<IconProps> = ({
  variant,
  name,
  color,
  size,
  className,
  ...props
}: IconProps) => {
  const suffix = variant ? `-${variant}` : ''
  return (
    <ChakraSpan
      {...props}
      className={`material-icons${suffix} ${className}`}
      color={color}
      fontSize={size || 18}
      display="block"
    >
      {name}
    </ChakraSpan>
  )
}

export default Icon
