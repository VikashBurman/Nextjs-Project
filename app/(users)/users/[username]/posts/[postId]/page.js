const Posts = async (props)=>{

    const data = await props.params;
    console.log(data)
    return(
        <>
            <h1>User Profile</h1>
            <h2>{data.postId}</h2>
            <h2>{data.username}</h2>
        </>
    )
} 
export default Posts;