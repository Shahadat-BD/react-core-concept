export default function StudentInfo({details}){
    const {name,age} = details
    return(
        <>
              <p>My name is :{name} and age is : {age}</p>
        </>
    )
}