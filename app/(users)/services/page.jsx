import Image from "next/image"

//meta data
export const metadata = {
    title:"this is service page title",
    description:"this is description for learning nextjs",
    authors:[
        {name:"vikash burman"},
        {name:"Google",url:"https://www.google.com"}
    ],
    keywords:["nextjs","fullstack"]
};

const Service = () =>{
    return(
        <>
            <h1>Services Page</h1>
            <div>
                {/* <Image src="/profilepic.jpg" width={200} height={200} alt="vikash image" quality={100} priority={true}/> */}
            </div>
        </>
    )
}
export default Service;