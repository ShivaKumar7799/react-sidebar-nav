import React, {useState} from 'react'

function Directory({data}) {
  const [isExpanded, toggleExpanded] = useState(false)
  if(data.type === 'folder'){
    return (
      <div>
        <h1 onClick={() => toggleExpanded(!isExpanded) } > {data.name} </h1>
        {
          isExpanded && data.items.map((item) => <Directory data = {item} /> )
        }
      </div>
    )
  } else {
    return (
      <>
        <h4>{data.name} </h4>
      </>
    )
  }
}

export default Directory