import React from 'react'

import { IMenuItem } from '../../models'

import MenuItem from './MenuItem'

interface MenuProps {
  list: IMenuItem[]
}

export default function Menu({ list }: MenuProps) {
  return (
    <nav className='menu'>
      {list.map((item, idx) => (
        <MenuItem title={item.title} path={item.path} key={idx}></MenuItem>
      ))}
    </nav>
  )
}
