import React from 'react'

type Props = {
  params: { id: string }
}

const IssuePage = ({ params: { id } }: Props) => {
  return (
    <div>
      <h1>Issue Page: {id}</h1>
    </div>
  )
}

export default IssuePage
