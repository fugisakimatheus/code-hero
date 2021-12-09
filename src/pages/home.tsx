import React from 'react'
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Grid,
  Box
} from '@chakra-ui/react'
import Icon from 'components/Icon'
import CharacterCard from 'components/CharacterCard'
import CharacterDetails from 'components/CharacterDetails'

import { useSelector } from 'store'
import { useStore } from 'hooks/useStore'
import { CharacterType } from 'store/ducks/characterSlice'

const Home: React.FC = () => {
  const { filter, setFilter, details } = useStore()

  const isLoading = useSelector(state => state.character.isLoading)
  const isError = useSelector(state => state.character.isError)
  const characters = useSelector(state => state.character.characters)

  if (details.stories) {
    return <CharacterDetails character={details} />
  }

  return (
    <Flex align="center" justifyContent="center" flexDirection="column" width="100%">
      <Flex
        align={{ base: 'center', sm: 'flex-start' }}
        width="100%"
        flexDirection="column"
        justifyContent={{ base: 'center', sm: 'flex-start' }}
      >
        <Heading as="h2" fontSize={{ base: '26px', sm: '32px' }} color="smoke.900">
          Busca de personagens
        </Heading>

        <Heading as="h5" size="sm" paddingTop="16px" color="smoke.900">
          Nome do personagem
        </Heading>

        <InputGroup
          bgColor="white"
          borderRadius="7px"
          marginTop="8px"
          height="32px"
          width={{ base: '100%', sm: '295px' }}
        >
          <InputRightElement pointerEvents="none" height="32px">
            <Icon name="search" color="smoke.700" size="24px" marginRight="10px" />
          </InputRightElement>
          <Input
            value={filter}
            inputMode="text"
            placeholder="Search"
            textColor="smoke.700"
            borderColor="snow.900"
            fontStyle="italic"
            fontSize="14px"
            height="32px"
            _placeholder={{
              color: 'smoke.700',
              fontSize: '14px',
              fontStyle: 'italic'
            }}
            onChange={event => setFilter(event.target.value)}
          />
        </InputGroup>
      </Flex>

      <Flex
        align={{ base: 'center', sm: 'flex-start' }}
        paddingTop="40px"
        width="100%"
        flexDirection="column"
        justifyContent={{ base: 'center', sm: 'flex-start' }}
      >
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          }}
          gap={4}
          width="100%"
          paddingX="18px"
        >
          <Box w="100%" h="5">
            <Text fontSize="xs" color="smoke.700">
              Personagem
            </Text>
          </Box>
          <Box w="100%" h="5" display={{ base: 'none', sm: 'inline-block' }}>
            <Text fontSize="xs" color="smoke.700">
              Séries
            </Text>
          </Box>
          <Box w="100%" h="5" display={{ base: 'none', md: 'inline-block' }}>
            <Text fontSize="xs" color="smoke.700">
              Eventos
            </Text>
          </Box>
        </Grid>

        <Box width="100%" paddingBottom="80px" position="relative">
          {isLoading &&
            [1, 2, 3, 4].map(number => <CharacterCard key={number} loading />)}
          {isError && 'Erro ao carregar personagens'}
          {!isError &&
            characters.map((character: CharacterType, index) => (
              <CharacterCard key={index} character={character} />
            ))}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
