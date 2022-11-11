import React from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItemProps {
  title: string
  path: string
}

export default function MenuItem({ title, path }: MenuItemProps) {
  const setActive = ({ isActive }: any) =>
    isActive ? 'menu__item menu__item-active' : 'menu__item'
  return (
    <NavLink to={path} className={setActive}>
      {title}
    </NavLink>
  )
}
