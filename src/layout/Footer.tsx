import React, { useCallback } from 'react'

import { Flex } from '@chakra-ui/react'
import Paginator from 'components/Paginator'

import { useStore } from 'hooks/useStore'
import { useSelector } from 'store'

const Footer: React.FC = () => {
  const { page, onChangePage } = useStore()

  const offset = useSelector(state => state.character.offset)
  const total = useSelector(state => state.character.total)

  const onPageChanged = useCallback(
    page => {
      onChangePage(page)
    },
    [onChangePage]
  )

  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      position="fixed"
      bottom="0px"
      wrap="nowrap"
      width="100%"
      paddingY={3}
      paddingX={5}
      height="65px"
      bgColor="white"
    >
      <Paginator
        page={page}
        offset={offset}
        total={total}
        onPageChanged={onPageChanged}
      />
    </Flex>
  )
}

export default Footer
