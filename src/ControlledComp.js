import React, { useState } from 'react'

export default function ControlledComp() {
    const [showData , setShowData] = useState(false)
    const [name ,setName] = useState("")
    const [age,setAge] = useState("")
    const [objData , setObjData] = useState([])
   function formData(e){
    e.preventDefault()
    const data = {
        name : name,
        age : age
    }
    objData.push(data)
    setObjData(objData)
    console.log(objData)
    setShowData(true)
   }

const listItems = objData.map((user) => <h1>{user.name} {user.age}</h1>  )

   if(showData){
 
    
        return(
            <div>
                <h1>Data : </h1>
                {listItems}
                <button onClick={() => {setShowData(false)}}>Go Back</button>
            </div>
        )       
    

        
   }else{
    return (

        <div>
            <form onSubmit={formData}>
                Name :
                <input type="text" name="name" value={name} onChange ={(e)=>{setName(e.target.value)}} ></input><br></br>
                Age :
                <input type="number" name="age" value={age} onChange ={(e)=>{setAge(e.target.value)}} ></input><br></br>
                <input type="submit" value="submit"></input>
            </form>
        </div>
      )
   }

  
}
