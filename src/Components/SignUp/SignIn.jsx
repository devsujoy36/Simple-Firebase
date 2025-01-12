import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const SignIn = () => {
  const btnStyle = "bg-emerald-500 py-2 px-4 rounded-lg hover:bg-transparent border-2 border-transparent hover:border-black  font-semibold active:scale-95 cursor-pointer transition-all"

  const auth = getAuth(app);
  const googgleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState()
  console.log("User", user);


  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [pass, setPass] = useState()

  const reloadHandler = (e) => {
    e.preventDefault();
  }

  const handleGoogleSignIn = (e) => {
    reloadHandler(e);
    signInWithPopup(auth, googgleProvider)
      .then(result => {
        const signInUser = result.user;
        setUser(signInUser)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleGithubSignIn = (e) => {
    reloadHandler(e);
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const signInUser = result.user;
        setUser(signInUser)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null)
      })
      .catch(error => {
        alert(error.message)
      })
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
    <div className="max-w-screen-2xl lg:mx-auto mx-10">
      {
        user &&
        <div className="lg:w-6/12 mx-auto flex justify-center items-center gap-5 my-10 border py-5 shadow-xl rounded-lg wfi">
          <div>
            <img className="w-28 rounded-full" src={user?.photoURL} alt="" />
          </div>
          <div>
            <h1 className="font-semibold">{user?.displayName}</h1>
            <h1>{user?.email}</h1>
            <h1>{user?.providerId}</h1>
            <h1>{user?.metadata?.lastSignInTime}</h1>
          </div>
        </div>
      }

      {user
        ?
        <div className="flex justify-center">
          <button onClick={handleSignOut} className={btnStyle}>Sign Out</button>
        </div>
        :
        <div>
          <form action="" className="flex flex-col gap-5 lg:w-4/12 md:w-6/12 mx-auto border p-10 rounded-md shadow-lg my-10">
            <h1 className="text-4xl font-bold text-center text-emerald-600">Sign In</h1>
            <input type="text" onChange={handleNameChange} name="name" placeholder="Name" className="border rounded-md p-4" />
            <input type="email" onChange={handleEmailChange} name="email" placeholder="Email" className="border rounded-md p-4" />
            <input type="number" onChange={handlePhoneChange} name="phone" placeholder="Phone" className="border rounded-md p-4" />
            <input type="password" onChange={handlePasswordChange} name="pass" placeholder="Password" className="border rounded-md p-4" />
            <input type="submit" className={btnStyle} onClick={submitHandler} />
            <div className="mt-6 flex flex-col gap-3 justify-between">
              <button type="submit" className={btnStyle} onClick={handleGoogleSignIn}> Sign in with Google </button>
              <button type="submit" className={btnStyle} onClick={handleGithubSignIn}> Sign in with Github </button>
              <button type="submit" className={btnStyle} onClick={reloadHandler}> Sign in with Facebook</button>
            </div>
          </form>
        </div>}




    </div>
  )
}

export default SignIn