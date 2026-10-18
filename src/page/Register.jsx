
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Register = () => {

    const { createUser, setUser } = useContext(AuthContext)

    const [nameError, setNameError] = useState("")

    const handleRegister = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name Should be more than 5 character")
            return
        } else {
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log({ name, photo, email, pass })
        createUser(email, pass)
            .then(result => {
                const user = result.user;
                // console.log(user)
                setUser(user)
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    alert("এই Email দিয়ে আগে থেকেই Account খোলা আছে!");
                }
                else {
                    alert(error.message);
                }
            });
    }


    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse w-100">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                            <h2 className="font-semibold text-2xl text-center">Register your account</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Your Name</label>
                                    <input type="text" required name="name" className="input" placeholder="Your Name" />
                                    {nameError && <p className="text-xs text-error">{nameError}</p>}
                                    <label className="label">Photo URL</label>
                                    <input type="text" required name="photo" className="input" placeholder="Photo URL" />
                                    <label className="label">Email</label>
                                    <input required name="email" type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input required name="pass" type="password" className="input" placeholder="Password" />
                                    <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                    <p className="font-semibold text-center mt-5">Dont't Have An Account ? <Link to="/auth/login" className="text-red-500">Login</Link></p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;