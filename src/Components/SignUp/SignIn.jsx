import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const SignIn = () => {
  const btnStyle = "bg-emerald-500 py-3 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all"

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [pass, setPass] = useState()

  const reloadHandler = (e) => {
    e.preventDefault();
  }

  const submitHandler = (e) => {
    reloadHandler(e)
    console.log('name:', name);
    console.log('email:', email);
    console.log('phone:', phone);
    console.log('password:', pass);
  }

  const handleNameChange = (e) => setName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)
  const handlePasswordChange = (e) => setPass(e.target.value)

  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10
    ">
      <div>

        <form action="" className="flex flex-col gap-5 md:w-6/12 mx-auto border p-10 rounded-md shadow-lg my-10">
          <h1 className="text-2xl font-semibold text-center">Sign In</h1>
          <input type="text" onChange={handleNameChange} name="name" placeholder="Name" className="border rounded-md p-4" />
          <input type="email" onChange={handleEmailChange} name="email" placeholder="Email" className="border rounded-md p-4" />
          <input type="number" onChange={handlePhoneChange} name="phone" placeholder="Phone" className="border rounded-md p-4" />
          <input type="password" onChange={handlePasswordChange} name="pass" placeholder="Password" className="border rounded-md p-4" />
          <input type="submit" className={btnStyle} onClick={submitHandler} />

          <div className="mt-6 flex flex-col gap-3 justify-between">
            <button type="submit" className={btnStyle} onClick={reloadHandler}> Sign in with Google </button>
            <button type="submit" className={btnStyle} onClick={reloadHandler}> Sign in with Facebook</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default SignIn