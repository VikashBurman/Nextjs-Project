const DataFetch = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(data);
    
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 3000);
    // });

    return(
        <>
            <h1>Data Fetch Page</h1>
            <h2>User List</h2>
            {
                data.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </>
    )
}
export default DataFetch;