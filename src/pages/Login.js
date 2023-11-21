import { useState, useRef } from "react"
import Input from "../components/UI/Input";

const Login = () => {

    const [errorUsername, setErrorUsername] = useState(false);
    const [errorMessageUsername, setErrorMessageUsername] = useState(null);

    const [errorPassword, setErrorPassword] = useState(false);
    const [errorMessagePassword, setErrorMessagePassword] = useState(null);

    const classUsername = errorUsername?'border-error':'';
    const classPassword = errorPassword?'border-error':'';

    const usernameInput = useRef();
    const passwordInput = useRef();

    const userLogin = (event) => {

        event.preventDefault();
        
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
  
        const usernameIsValid = username.trim() !== "";
        const passwordIsValid = password.trim() !== "";

        const formIsValid = usernameIsValid && passwordIsValid;

        if(!formIsValid){
            if(!usernameIsValid){
                setErrorUsername(true);
                setErrorMessageUsername("This field is required!");
            }
            if(!passwordIsValid){
                setErrorPassword(true);
                setErrorMessagePassword("This field is required!");
            }
            return;
        }
  
        console.log('Send data ', username, ' ', password);
    }
    
    return (
        <>
          <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">Login</h1>
          <div className="bg-white mx-auto w-8/12 p-10">
                <form onSubmit={userLogin}>
                    <Input id="username" label="Username" placeholder="Jondoe" ref={usernameInput} extraClass={classUsername} onChange={()=>{setErrorUsername(false); setErrorMessageUsername(null)}} errors={errorMessageUsername}></Input>
                    <Input id="password" label="Password" placeholder="******" type="password" ref={passwordInput} errors={errorMessagePassword} extraClass={classPassword} onChange={()=>{setErrorPassword(false); setErrorMessagePassword(null)}}></Input>
                    <button>Send</button>
                </form>
          </div>
        </>
    );
}

export default Login;