import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import UserInfo from './UserInfo'

export default function Home(){
    const studentInfo = [
        {
            name : "shahadat",
            age : 34
        }  ,
        {
            name : "ariful islam",
            age : 18
        },
        {
            name : 'shakibul hasan',
            age : 44
        }
]

const [count,setCount] = useState(0)
const [message,setMessage] = useState('')

const increaseNum = () =>{
    const newCount = count + 1
    setCount(newCount)
    if (newCount > 10) {
       const errorMessage = 'sorry! Numbers above 10 are not allowed'
       setMessage(errorMessage)
       setCount(10)
    }else{
        setMessage()
    }
}
const decreaseNum = () =>{
    const newCount = count - 1
    setCount(newCount)
    if (newCount < 0) {
       const errorMessage = 'sorry! negative numbers are not allowed'
        setMessage(errorMessage)
        setCount(0)
    }else{
        setMessage()
    }
}

const [user,setUser] = useState([])
useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
},[])

    return (
        <div>
            <h1>this is home page</h1>
            {
                studentInfo.map(info => 
                  <StudentInfo key={info.age} details={info}></StudentInfo>
                )
            }
             <h3>counter : {count} </h3>
             <p>{message}</p>
             <button onClick={increaseNum}>add</button>
             <button onClick={decreaseNum}>reduce</button>
              
              <div style={{border:'2px solid red'}}>
                    <h3>Users : {user.length}</h3>
                    {
                        user.map(userInfo => 
                            <UserInfo key={userInfo.id} users={userInfo}></UserInfo>
                            )
                    }
                 
              </div>

        </div>
    );
}
