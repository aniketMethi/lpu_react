import React, { useState } from 'react'

export default function FuncState() {
    
    const [data,setData] = useState()


  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>{setData(data+1)}}>+</button>
    </div>
  )
}
