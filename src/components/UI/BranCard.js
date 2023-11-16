import { Link } from "react-router-dom";

const BrandCard = (props) => {

    const {id, name, img} = props.data
    
    return (
        <div className="bg-white border shadow-xl py-10 px-3 text-center font-semibold w-80">
          <div className={`w-32 h-32 ${img} shadow-xl rounded-full mb-3 mx-auto`}></div>
          <h1 className="text-lg text-gray-700 mb-4">{name}</h1>
          <Link className="bg-primary px-8 py-2 text-gray-100 hover:bg-secondary uppercase" to={`/products/${id}`}>Visit store</Link>
        </div>
    )
}

export default BrandCard;