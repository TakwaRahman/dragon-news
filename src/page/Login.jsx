import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";




const Login = () => {
    const [error, setError] = useState("")
    const { signUser } = useContext(AuthContext)
    const location = useLocation()
    const Navigate = useNavigate()
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        signUser(email, pass)
            .then((result) => {
                const user = result.user;
                Navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const code = error.code;
                // const msg = error.message;

                setError(code)
            })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-100">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" required type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="pass"
                                    required type="password" className="input" placeholder="Password" />
                                <Link to="/auth/forgot-password"><div><a className="link link-hover">Forgot password?</a></div></Link>


                                {error && <p className="text-red-400 text-xs">{error}</p>}
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                                <p className="font-semibold text-center mt-5">Dont't Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;