import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

type PaginatorType = {
  page: number
  offset: number
  total: number
  onPageChanged: (page: number) => void
}

const PAGE_NEIGHBOURS = 2

const range = (from: number, to: number, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

const Paginator: React.FC<PaginatorType> = props => {
  const { total, onPageChanged, page } = props
  const totalPages = Math.round(total / 10)

  const fetchPageNumbers = () => {
    const totalNumbers = PAGE_NEIGHBOURS * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, page - PAGE_NEIGHBOURS)
      const endPage = Math.min(totalPages - 1, page + PAGE_NEIGHBOURS)

      let pages = range(startPage, endPage)

      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [...extraPages, ...pages]
          break
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [...pages]
          break
        }
      }
      return [1, ...pages, totalPages]
    }
    return range(1, totalPages)
  }

  const pageItems = fetchPageNumbers() || []
  return (
    <Stack spacing={{ base: 1, sm: 3 }} direction="row" align="center">
      {page > 4 && (
        <Button
          color="smoke.700"
          size="xs"
          fontSize={{ base: 'xs', sm: 'sm' }}
          bgColor="white"
          onClick={() => onPageChanged(0)}
        >
          {'<<'}
        </Button>
      )}
      {page > 0 && (
        <Button
          color="smoke.700"
          size="xs"
          fontSize={{ base: 'xs', sm: 'sm' }}
          bgColor="white"
          onClick={() => onPageChanged(page - 1)}
        >
          {'<'}
        </Button>
      )}

      {pageItems.map((pageNumber, index) => {
        return (
          <Button
            key={index}
            color={page === pageNumber - 1 ? 'white' : 'smoke.900'}
            bgColor={page === pageNumber - 1 ? 'blue.700' : 'snow.700'}
            border="1px solid"
            borderColor={page === pageNumber - 1 ? 'transparent' : 'snow.900'}
            fontWeight="regular"
            size="sm"
            fontSize={{ base: 'xs', sm: 'sm' }}
            _hover={{
              bgColor: 'blue.400',
              color: 'white',
              border: '1px solid transparent'
            }}
            onClick={() => onPageChanged(pageNumber - 1)}
          >
            {pageNumber}
          </Button>
        )
      })}

      {page + 1 < totalPages && (
        <Button
          color="smoke.700"
          size="xs"
          fontSize={{ base: 'xs', sm: 'sm' }}
          bgColor="white"
          onClick={() => onPageChanged(page + 1)}
        >
          {'>'}
        </Button>
      )}
      {totalPages > page + 3 && (
        <Button
          color="smoke.700"
          size="xs"
          fontSize={{ base: 'xs', sm: 'sm' }}
          bgColor="white"
          onClick={() => onPageChanged(totalPages - 1)}
        >
          {'>>'}
        </Button>
      )}
    </Stack>
  )
}

export default Paginator
