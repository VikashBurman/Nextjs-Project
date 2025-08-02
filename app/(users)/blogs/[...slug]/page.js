const Blogs = async (props)=>{
    // console.log(props);
    const data = await props.params;
    console.log(data);
    console.log(data.slug);
    return(
        <>
            <h1>Blogs</h1>
            <h2>{data.slug}</h2>
        </>
    )
}
export default Blogs;