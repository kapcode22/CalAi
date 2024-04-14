import * as React from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../context/UserAuthContext';
import c1 from "../images/image_processing20190924-14569-tu6ube.gif";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const history = useNavigate();
  const { signUp } = useUserAuth(); // Destructure signUp from useUserAuth hook
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState(""); // New state for success message

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    try {
      if (!values.username || !values.email || !values.password || !values.confirmpassword) {
        setErrorMsg("Please fill in all fields.");
        return;
      }

      if (values.password !== values.confirmpassword) {
        setErrorMsg("Passwords do not match. Please try again.");
        return;
      }

      await signUp(values.email, values.password); 
      // Pass email and password to signUp function
      setSuccessMsg("Sign up successful!"); // Set success message
      history('/signin'); // Redirect to sign-in page after successful sign-up
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <section className='bg-gray-300 min-h-screen flex items-center justify-center'>
      <div className='bg-[#bad4f9] flex rounded-2xl shadow-lg p-5'>
        <div className='sm:w-1/2 px-16'>
          <h2 className='text-4xl font-bold'>Sign Up</h2>
          <p className="font-medium text-lg text-gray-500 mt-4">Please enter your details</p>
          <div className='mt-8'>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
                onChange={(event) => setValues((prev) => ({ ...prev, username: event.target.value }))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
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
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmpassword" className="block mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Confirm your password"
                onChange={(event) => setValues((prev) => ({ ...prev, confirmpassword: event.target.value }))}
              />
            </div>
            {errMsg && <div className="mb-4 text-red-500">{errMsg}</div>}
            {successMsg && <div className="mb-4 text-green-500">{successMsg}</div>}

            <div className='mt-8 flex flex-col gap-y-4'>
              <button type="button" onClick={handleSubmit} className="bg-[#5e89ef]  hover:bg-[#352771] rounded-xl text-white py-2">Sign Up</button>
              <div className='flex justify-center items-center'>
                <p className="font-medium text-base">Already have an account?</p>
                <Link to="/signin" className='text-violet-500 text-base font-medium ml-2'>Sign In</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:block hidden w-1/2 '>
          <img className='h-full w-full object-fit:cover rounded-2xl' src={c1} alt='...' />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
