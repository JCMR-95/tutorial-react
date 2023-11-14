import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { increment } from "../../store/counterSlice";

const ProductItem = (props) => {

    const dispatch = useDispatch();
    const {img, name, description, price} = props.data;
    const numberInput = useRef(null);

    const addNewItem = (event) => {
        event.preventDefault();
        const enteredAmount = numberInput.current.value;
        const amount = +enteredAmount;
        dispatch(increment(amount));
    }

    return <li className="flex justify-between border-b border-secondary my-2">
                <div className="flex">
                    <div className={`w-14 h-14 rounded-full shadow-lg ${img}`}></div>
                    <div className="ml-2">
                        <h3 className="text-xl font-bold">{name} </h3>
                        <div className="font-light">{description}</div>
                        <p className="font-semibold text-lg text-primary">$ {price}</p>
                    </div>
                </div>

                <div>
                    <form className="text-right" onSubmit={addNewItem}>
                        <div className="mb-2">
                            <label htmlFor="amount" className="block uppercase text-gray-500 text-xs font-bold mb-2 tracking-wide">Amount</label>
                            <input type="number" id="amount"className="w-12 border border-gray-500 pl-1" max={6} min={1} defaultValue={1} ref={numberInput}/>
                        </div>
                        <button className="bg-primary px-2 py-1 text-gray-100 hover:bg-secondary">add</button>
                    </form>
                </div>
            </li>
}
export default ProductItem;