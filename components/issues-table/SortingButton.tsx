import React from 'react'
import { Button } from '../ui/button'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { Column } from '@tanstack/react-table'

type Props = {
  column: Column<any, any>
  text: string
}

const SortingButton = ({ column, text }: Props) => {
  return (
    <Button
      variant='ghost'
      onClick={() => {
        column.toggleSorting(column.getIsSorted() === 'asc')
      }}
    >
      {text} <ArrowUpDown className='h-4 w-4 ml-2' />
    </Button>
  )
}

export default SortingButton
