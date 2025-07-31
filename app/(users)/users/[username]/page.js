const UserProfile = async (props)=>{
    const userName = await props.params;
    console.log(userName)
    return(
        <>
            <h1>User Profile</h1>
            <h2>{userName.username}</h2>
        </>
    )
}
export default UserProfile;