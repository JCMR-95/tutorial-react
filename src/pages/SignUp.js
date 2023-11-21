import { useRef } from "react";
import Input from "../components/UI/Input";
import HolyBeer from "../components/svg/HolyBeer";
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const _password = useRef({});
    _password.current = watch("password", "");
    
    const minValidation = {
        required: 'This field is required',
        minLength: {
            value: 5,
            message: 'Min 5'
        }
    }

    const emailValidation = {
        required: 'This field is required',
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Invalid email address'
        }
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">Sign up</h1>
            <div className="max-w-4xl mx-auto grid grid-cols-6 gap-2 bg-white">
                <div className="col-span-3 p-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("username", minValidation)}
                            label="Username"
                            placeholder="santy"
                            extraClass={errors.username ? 'border-error' : ''}
                            errors={errors.username ? errors.username.message : null}
                        ></Input>
                        <Input {...register("email", emailValidation)}
                            label="Email"
                            placeholder="santy@test.ca"
                            extraClass={errors.email ? 'border-error' : ''}
                            errors={errors.email ? errors.email.message : null}
                        ></Input>
                        <Input {...register("password", minValidation)}
                            label="Password"
                            placeholder="****"
                            extraClass={errors.password ? 'border-error' : ''}
                            errors={errors.password ? errors.password.message : null}
                        ></Input>
                        <Input {...register("confirmPassword", {
                            required: "This field is required",
                            validate: value => value === _password.current || "Passwords do not match"
                        })}
                            label="Confirm Password"
                            placeholder="****"
                            extraClass={errors.confirmPassword ? 'border-error' : ''}
                            errors={errors.confirmPassword ? errors.confirmPassword.message : null}
                        ></Input>
                        <button>Send</button>
                    </form>
                </div>
                <div className="col-span-3 grid content-center justify-items-center">
                    <div className="w-56 h-56"><HolyBeer></HolyBeer></div>
                </div>
            </div>
        </>
    )
}

export default SignUp;