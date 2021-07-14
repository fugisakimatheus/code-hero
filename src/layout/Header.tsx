import React from 'react'
import { Flex, Text, Avatar, Image } from '@chakra-ui/react'

import LogoObjective from 'assets/logo-objective.jpg'

const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY={3}
      paddingX={5}
      height="65px"
      bgColor="white"
    >
      <Image src={LogoObjective} alt="Logo Objective" height="28px" />

      <Flex align="center">
        <Flex align="flex-end" flexDirection={{ base: 'column', sm: 'row' }}>
          <Text
            fontSize={{ base: 'xs', sm: 'sm' }}
            fontWeight="bold"
            marginRight={{ base: 0, sm: 1 }}
            color="smoke.900"
          >
            Matheus Fugisaki
          </Text>
          <Text fontSize={{ base: 'xs', sm: 'sm' }} color="smoke.900">
            Teste de Front-end
          </Text>
        </Flex>

        <Avatar
          name="C B"
          size="sm"
          color="smoke.900"
          fontWeight="bold"
          bgColor="snow.700"
          borderRadius="3px"
          transition="all"
          transitionDuration="200ms"
          cursor="pointer"
          marginLeft={4}
          _hover={{
            color: 'snow.700',
            bgColor: 'smoke.900'
          }}
        />
      </Flex>
    </Flex>
  )
}

export default Header
