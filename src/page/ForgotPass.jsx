import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const ForgotPass = () => {
    const {forgotPassword} = useContext(AuthContext)


    const handleReset = (e) => {
        e.preventDefault()

        const email = e.target.email.value;

        forgotPassword(email)
            .then(() => {
                alert("Password reset email sent!");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="flex justify-center items-center">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-100">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className="font-semibold text-2xl text-center">Forgot your Password</h2>
                        <form onSubmit={handleReset} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" required type="email" className="input" placeholder="Email" />



                                <button type="submit" className="btn btn-neutral mt-4">Forgot</button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;