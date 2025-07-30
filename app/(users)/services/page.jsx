import Image from "next/image"

const Service = () =>{
    return(
        <>
            <h1>Services</h1>
            <div>
                <Image src="/profilepic.jpg" width={200} height={200} alt="vikash image" quality={100} priority={true}/>
            </div>
        </>
    )
}
export default Service;