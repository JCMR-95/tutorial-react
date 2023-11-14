import BrandCard from "../components/UI/BranCard";

const dummy = [ 
    {
        id:"01",
        name:"cerveza",
        img:"bg-green-900"
    },
    {
        id:"02",
        name:"biere",
        img:"bg-blue-900"
    },
    {
        id:"03",
        name:"beer",
        img:"bg-red-900"
    },
]

const Home = () => {
    
    const brands = dummy;

    return (
        <div className="flex justify-around flex-wrap">
            {brands.map((brand)=>(
                <BrandCard key={brand.id} data={brand}></BrandCard>
            ))}
        </div>
    )
}

export default Home;