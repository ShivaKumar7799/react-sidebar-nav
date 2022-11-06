import React from 'react'
import Directory from './Directory'
import data from './SidebarData.json'

function Sidebar1() {
  console.log(data, "sidebar data")
  return (
    <div>
      <Directory data = {data} />
    </div>
  )
}

export default Sidebar1