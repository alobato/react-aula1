import React from 'react'
import styled from 'styled-components'

const Card = ({ className, pages = 0, title = 'Nao informou titulo', name }) => {
  return (
    <div className='className'>
      <div>Pages: {pages}</div>
      <div>Title: {title}</div>
      <div>Name: {name}</div>
    </div>
  )
}

const StyledCard = styled(Card)`
  padding: 10px;
  border: 1px solid red;
  background: papayawhip;
`

export default StyledCard
