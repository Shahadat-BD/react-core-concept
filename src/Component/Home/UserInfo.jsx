export default function name({users}) {
    const {name,email,phone,website} = users
    return (
     
        <div style={{border:"2px solid gray", margin:'20px'}}>
             <h3>Name : {name}</h3>
             <p>Email : {email}</p>
             <p>Phone : {phone} </p>
             <p>Website :{website} </p>
        </div>

    )
} 