'use client'

import { columns } from '@/components/issues-table/colums'
import { DataTable } from '@/components/issues-table/data-table'
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const IssuesPage = () => {
  const [issuesData, setIssuesData] = useState([])

  const getData = async () => {
    const data = await axios.get('/api/issues')
    setIssuesData(data?.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <Button>
        <Link href='/issues/new'>New Issue</Link>
      </Button>

      <div className='mx-auto '>
        <DataTable columns={columns} data={issuesData} />
      </div>
    </div>
  )
}

export default IssuesPage
