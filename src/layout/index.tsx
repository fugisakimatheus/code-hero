import React, { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/layout'
import Header from 'layout/Header'
import Footer from 'layout/Footer'

import scrollStyle from 'styles/scroll'
import { useStore } from 'hooks/useStore'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const { details } = useStore()

  return (
    <Flex height="full">
      <Box
        height="100vh"
        width="100%"
        overflow="hidden"
        position="relative"
        bgColor="snow.900"
      >
        <Header />
        <Box
          overflow="auto"
          width="100%"
          height="calc(100% - 65px)"
          bgColor="snow.900"
          css={scrollStyle}
        >
          <Box
            padding={{
              base: details.name ? '10px' : '16px 30px',
              sm: '28px 40px',
              md: '42px 80px'
            }}
          >
            {children}
          </Box>
        </Box>
        {!details.name && <Footer />}
      </Box>
    </Flex>
  )
}

export default Layout
