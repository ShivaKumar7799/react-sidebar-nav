import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function SubSideBar({data}) {
 const [isExpanded, setIsExpanded] = useState(false)
 if(data.items){
  return(
    <div >
       <h1 onClick={() => setIsExpanded(!isExpanded) } > {data.name} {isExpanded ? <KeyboardArrowUpIcon />: <KeyboardArrowDownIcon />} </h1>
        <div className='subSideBar' >
        { isExpanded &&  data.items.map((item, index) => <SubSideBar data = {item} /> ) }
        </div>
    </div>
  )
 } else {
  return(
    <>
      <h1>{data.name}</h1>
    </>
  )
 }
}

export default SubSideBar