import React from 'react'
import Navigation from '@/components/Navigation'

export default function layout({children}: {children: React.ReactNode}) {

  const links = [
    { title: 'User 1', href: '/users/user1'},
    { title: 'User 2', href: '/users/user2'},
  ]

  return (
    <div>
      <div className="nav p-3 flex items-center justify-center ">
        <Navigation items={links}/>
      </div>
      {children}
    </div>
  )
}
