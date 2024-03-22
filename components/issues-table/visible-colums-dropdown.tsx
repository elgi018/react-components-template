import React from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Table } from '@tanstack/react-table'

type Props = {
  table: Table<any>
  title: string
}

const VisibleColumsDropdown = ({ table, title }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='outline' className=''>
          {title}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className='capitalize'
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default VisibleColumsDropdown
