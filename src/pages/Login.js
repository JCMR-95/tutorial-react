import { useState } from 'react';

const Login = () => {
    
    const [title, setTitle] = useState('test title');
    const [age, setAge] = useState(30);
    const [isActive, setActive] = useState(false);
    const list = [1, 2, 3, 4, 5, 5, 5, 5];

    let message;
    if (isActive) {
        message = "It is active";
    } else {
        message = "It's not active";
    }

    const sayHello = () => {

        setTitle("New title");
        setAge(age + 1);
        setActive(true);
    }


    return (
        <>
            <h1 className="text-xl mb-3">{title}</h1>
            <p>{age}</p>
            <p>{message}</p>
            <p>{isActive ? "yes" : "Not"}</p>
            <p>{isActive && <>hello user</>}</p>
            <button
                className="bg-primary px-3 py-2"
                onClick={sayHello}
            >Click</button>
            <ul>
                {list.map((item, index)=>(
                    <li key={index}>Item {item}</li>
                ))}
            </ul>
        </>
    )



}

export default Login