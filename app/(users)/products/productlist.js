"use client";
import { useSearchParams } from "next/navigation";
const ProductList = () =>{
    const searchParams = useSearchParams();
    // console.log(searchParams);
    const category = searchParams.get("category");
    const page = searchParams.getAll("page");
    console.log(category);
    console.log(page);
    return(
        <>
            <h1>Product List</h1>
        </>
    )
}

export default ProductList;