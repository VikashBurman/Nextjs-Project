import {db} from "@/config/db"

const StaticPage = async () =>{
    const users = await db.execute("select * from users");
    console.log(users);
    return(
        <>
            <h1>Static Page</h1>
            <ul>
                 {users[0].map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
               
        </>
    )
}
export default StaticPage;