"use client"
const ClientComponent = () =>{
  return(
    <>
      <h1>Client Component</h1>
      <button onClick={()=>{
        alert("hello world")
      }}>click me</button>
    </>
  )
}
export default ClientComponent;