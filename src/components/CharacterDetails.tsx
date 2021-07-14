import React, { useCallback, useEffect, useState } from 'react'

import { Grid, Heading, Image, GridItem, Button } from '@chakra-ui/react'

import { CharacterType } from 'contexts/store'
import Icon from './Icon'
import { useStore } from 'hooks/useStore'

type CharacterDetailsType = {
  character: CharacterType
}

const CharacterDetails: React.FC<CharacterDetailsType> = ({ character }) => {
  const { setDetails } = useStore()
  const imageUrl = character.thumbnail.path + '.' + character.thumbnail.extension
  const series = character.series.items || []
  const events = character.events.items || []
  const stories = character.stories.items || []

  useEffect(() => {
    history.pushState({}, '')
    window.onpopstate = () => {
      setDetails({} as CharacterType)
    }

    return () => {
      history.replaceState(undefined, '')
    }
  }, [])

  function renderSeries() {
    if (!series[0]?.name) {
      return (
        <Heading fontSize="14px" fontWeight="normal" color="smoke.700">
          No data...
        </Heading>
      )
    }
    return series.map((serie: { name: string }, index) => (
      <Heading
        key={index}
        fontSize="14px"
        fontWeight="normal"
        color="smoke.900"
        paddingBottom="4px"
      >
        {serie.name}
      </Heading>
    ))
  }

  function renderEvents() {
    if (!events[0]?.name) {
      return (
        <Heading fontSize="14px" fontWeight="normal" color="smoke.700">
          No data...
        </Heading>
      )
    }
    return events.map((event: { name: string }, index) => (
      <Heading
        key={index}
        fontSize="14px"
        fontWeight="normal"
        color="smoke.900"
        paddingBottom="4px"
      >
        {event.name}
      </Heading>
    ))
  }

  function renderStories() {
    if (!stories[0]?.name) {
      return (
        <Heading fontSize="14px" fontWeight="normal" color="smoke.700">
          No data...
        </Heading>
      )
    }
    return stories.map((story: { name: string }, index) => (
      <Heading
        key={index}
        fontSize="14px"
        fontWeight="normal"
        color="smoke.900"
        paddingBottom="4px"
      >
        {story.name}
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
      width="100%"
      padding="16px"
      minHeight="88px"
    >
      <GridItem colSpan={3} display="flex" alignItems="center">
        <Button
          leftIcon={<Icon name="arrow_back" />}
          color="smoke.900"
          variant="ghost"
          width="100px"
          size="md"
          onClick={() => setDetails({} as CharacterType)}
        >
          Voltar
        </Button>
      </GridItem>

      <GridItem colSpan={4} display="flex" alignItems="center">
        <Image
          src={imageUrl}
          alt={character.name}
          height="90px"
          borderRadius="4px"
          marginRight="16px"
        />

        <Heading fontSize="28px" color="smoke.900">
          {character.name}
        </Heading>
      </GridItem>

      <GridItem
        colSpan={{ base: 3, md: 2 }}
        bg="snow.700"
        padding="8px"
        borderRadius="4px"
      >
        <Heading fontSize="18px" color="smoke.900" paddingBottom="8px">
          Séries
        </Heading>
        {renderSeries()}
      </GridItem>

      <GridItem
        colSpan={{ base: 3, md: 2 }}
        bg="snow.700"
        padding="8px"
        borderRadius="4px"
      >
        <Heading fontSize="18px" color="smoke.900" paddingBottom="8px">
          Eventos
        </Heading>
        {renderEvents()}
      </GridItem>

      <GridItem
        colSpan={{ base: 3, md: 2 }}
        bg="snow.700"
        padding="8px"
        borderRadius="4px"
      >
        <Heading fontSize="18px" color="smoke.900" paddingBottom="8px">
          Histórias
        </Heading>
        {renderStories()}
      </GridItem>
    </Grid>
  )
}

export default CharacterDetails
