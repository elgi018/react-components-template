'use client'

import { ColumnDef } from '@tanstack/react-table'
import moment from 'moment'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import SortingButton from './SortingButton'

export type Issues = {
  id: number
  title: string
  description: string
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
  createdAt: string
}

export const columns: ColumnDef<Issues>[] = [
  {
    header: ({ column }) => {
      return <SortingButton column={column} text='Id' />
    },
    accessorKey: 'id',
  },
  {
    header: ({ column }) => {
      return <SortingButton column={column} text='Title' />
    },
    accessorKey: 'title',
  },
  {
    header: 'Description',
    accessorKey: 'description',
    cell: ({ row }) => {
      const value: string = row.getValue('description')
      if (value.length <= 25) return value
      const subString = value.substring(0, 25)
      return `${subString}...`
    },
  },
  { header: 'Status', accessorKey: 'status' },
  {
    header: 'Date',
    accessorKey: 'createdAt',
    cell: ({ row }) => {
      const date: string = row.getValue('createdAt')
      const formatedDate = moment(date).format('MMM DD, YYYY')
      return formatedDate
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-8 h-8 p-0'>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/issues/${id}`}>View</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
