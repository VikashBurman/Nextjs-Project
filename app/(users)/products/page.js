import ProductList from "./productlist";

const Products = async ({searchParams}) =>{
    // const {searchParams} =  props;
    const data = await searchParams;
    console.log(data) 
    const {category,sort} = await searchParams;
    // console.log(searchParams);
    // console.log(category);
    // console.log(sort);
    return(
        <>
            <h1>Products page</h1>
            <h2>Category: {category}</h2>
            <h2>Sort: {sort}</h2>
            <ProductList/>
        </>
    )
}

export default Products;