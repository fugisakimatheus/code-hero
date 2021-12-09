import React from 'react'

import { Grid, Box, Heading, Image, Skeleton } from '@chakra-ui/react'

import { useStore } from 'hooks/useStore'
import { CharacterType } from 'store/ducks/characterSlice'

type CharacterCardType = {
  key?: number
  loading?: boolean
  character?: CharacterType
}

const CharacterCard: React.FC<CharacterCardType> = ({ character, loading }) => {
  const { setDetails } = useStore()

  const imageUrl = character?.thumbnail.path + '.' + character?.thumbnail.extension
  const series = (character?.series.items || []).slice(0, 4)
  const events = (character?.events.items || []).slice(0, 4)

  function renderSeries() {
    if (series.length === 0 && !loading) {
      return (
        <Heading fontSize="14px" fontWeight="normal" color="smoke.700">
          No data...
        </Heading>
      )
    }
    return series.map((serie: { name: string }, index) => (
      <Heading key={index} fontSize="14px" fontWeight="normal" color="smoke.900">
        {serie.name}
      </Heading>
    ))
  }

  function renderEvents() {
    if (events.length === 0 && !loading) {
      return (
        <Heading fontSize="14px" fontWeight="normal" color="smoke.700">
          No data...
        </Heading>
      )
    }
    return events.map((serie: { name: string }, index) => (
      <Heading key={index} fontSize="14px" fontWeight="normal" color="smoke.900">
        {serie.name}
      </Heading>
    ))
  }

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)'
      }}
      marginTop="8px"
      gap={4}
      bgColor="white"
      borderRadius="4px"
      boxShadow="0px 0px 5px #00000033"
      width="100%"
      padding="16px"
      minHeight="88px"
      cursor="pointer"
      _hover={{
        boxShadow: '0px 0px 7px #00000099'
      }}
      onClick={() => setDetails(character || ({} as CharacterType))}
    >
      <Box w="100%" alignItems="center" display="flex">
        {loading && (
          <Skeleton
            height="48px"
            width="48px"
            borderRadius="4px"
            marginRight="16px"
            startColor="smoke.700"
            endColor="snow.700"
          />
        )}
        <Image
          src={imageUrl}
          alt={character?.name}
          height="48px"
          borderRadius="4px"
          marginRight="16px"
        />

        <Heading fontSize="md" color="smoke.900">
          {loading && (
            <Skeleton
              height="19px"
              width="132px"
              borderRadius="4px"
              startColor="smoke.700"
              endColor="snow.700"
            />
          )}
          {character?.name}
        </Heading>
      </Box>
      <Box
        w="100%"
        alignItems="flex-start"
        justifyContent="center"
        display={{ base: 'none', sm: 'flex' }}
        flexDirection="column"
      >
        {loading && (
          <Skeleton
            height="19px"
            width="200px"
            borderRadius="4px"
            startColor="smoke.700"
            endColor="snow.700"
          />
        )}
        {renderSeries()}
      </Box>
      <Box
        w="100%"
        alignItems="flex-start"
        justifyContent="center"
        display={{ base: 'none', md: 'flex' }}
        flexDirection="column"
      >
        {loading && (
          <Skeleton
            height="19px"
            width="120px"
            borderRadius="4px"
            startColor="smoke.700"
            endColor="snow.700"
          />
        )}
        {renderEvents()}
      </Box>
    </Grid>
  )
}

export default CharacterCard
