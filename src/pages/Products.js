import { useParams, Link } from "react-router-dom";
import ProductItem from "../components/UI/ProductItem";
import Section from "../components/UI/Section";

const DUMMY_PRODUCTS = [
    {
        id:"01",
        name:"cerveza",
        img:"bg-green-900",
        products:[
            { id: "001", price: 10, description: "the best beer", name: "the best", img:"bg-gray-700"},
            { id: "002", price: 9, description: "nothing better the rogue", name: "The red one", img:"bg-red-700" }
         ]
    },
    {
        id:"02",
        name:"biere",
        img:"bg-blue-900",
        products:[
            { id: "003", price: 20, description: "La bière est sacrée ", name: "la sacrée", img:"bg-blue-100" }
         ]
    },
    {
        id:"03",
        name:"beer",
        img:"bg-red-900",
        products:[
            { id: "004", price: 8, description: "the big macqui", name: "red x", img:"bg-blue-500"},
            { id: "005", price: 7, description: "the one", name: "test", img:"bg-green-600"}
         ]
    }
];

const Products = () => {
    const params = useParams();
    const brand = DUMMY_PRODUCTS.find(item => item.id === params.id);

    if(!brand){
        return <>
            <div className="text-center">
                <p>No products found</p>
                <Link to="/" className="btn-primary">Back to home</Link>
            </div>
        </>
    }

    const productsList = brand.products;

    return <>
        <div className="text-center mb-3">
            <div className={`w-24 h-24 rounded-full ${brand.img} mx-auto shadow-lg`}></div>
            <h1 className="text-2xl text-gray-700 uppercase">{brand.name}</h1>
        </div>
        <Section>
        <ul>
            {productsList.map((product)=>(
                <ProductItem key={product.id} data={product}></ProductItem>
            ))}
        </ul>
        </Section>
        <div className="text-center mt-3">
                <Link to="/" className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary">Back</Link>
        </div>
       
    </>
}

export default Products;