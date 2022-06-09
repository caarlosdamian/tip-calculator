import React from 'react'
import { Input } from '../Input/Input'
import dollar from '../../images/icon-dollar.svg'
import './Card.scss'

export const Card = () => {
  return (
    <div className='card__container'>
      <Input icon={dollar}/>
    </div>
  )
}
