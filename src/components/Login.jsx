import Header from "./Header"


const Login = () => {
  return (
    <div>
      
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
        alt="" />
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">Sign Up</h1>

      <input type="text" placeholder="Email Address"
      className="p-4 my-4 w-full bg-grey-700" />
      <input type="password" placeholder="Password" 
      className="p-4 my-4 w-full bg-grey-700" />
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">
        Sign Up
      </button>
      <p className="py-4 cursor-pointer">
        New to Netflix? Sign Up Now
      </p>

    </form>
    </div>
  )
}

export default Login
