import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { useUserAuth } from '../context/UserAuthContext';
import c1 from "../images/e71f21c48e8d2eed27b7e545f430b6e1.gif"

const SignIn = () => {
  const history = useNavigate();
  const { signIn} = useUserAuth();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Track login status

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg(""); 
    try {
      if (!values.email || !values.password) {
        setErrorMsg("Please fill in all fields.");
        return;
      }
      await signIn(values.email, values.password); // Pass email and password to signUp function
      setSuccessMsg("Logged in successfully!");
      setIsLoggedIn(true); // Update login status to true
      history('/payment');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (

    <section className='bg-gray-300 min-h-screen flex items-center justify-center'>

      <div className='bg-[#bad4f9] flex rounded-2xl shadow-lg  p-5'>
        <div className='sm:w-1/2 px-16'>
          <h2 className='text-4xl font-bold '> Login</h2>
          <p className="font-medium text-lg text-gray-500 mt-4">Please enter your details</p>
          <div className='mt-8'>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
              />
            </div>
            {errMsg && <div className="mb-4 text-red-500">{errMsg}</div>}
            {successMsg && <div className="text-green-500 mb-4">{successMsg}</div>}

            <div className='mt-8 flex flex-col gap-y-4'>
              <button
                type="submit" onClick={handleSubmit} className="bg-[#5e89ef]  hover:bg-[#352771] rounded-xl text-white py-2"> Sign In
              </button>
              {isLoggedIn && (
                <Link to="/payment" className="block w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-voilet-600 focus:outline-none focus:ring focus:border-blue-300 mt-4 text-center">
                  Go to Payment
                </Link>

              )}
            </div>
            <div className='mt-8 flex justify-center items-center'>
              <p className="font-medium text-base">Don't have an account ?</p>
              <Link to="/" className='text-voilet-500 text-base font-medium ml-2' >Sign Up</Link>
            </div>
          </div>
        </div>

        <div className='sm:block hidden w-1/2 '>
          <img className='h-full w-full object-fit:cover rounded-2xl' src={c1} alt='...'></img>
        </div>
      </div>

    </section>

  );
};

export default SignIn;

