
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

  const [user, setUser] = useState(null)

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedInUser = result.user;
        setUser(loggedInUser)
      })
      .catch(error => {
        console.log('error', error.message);
      })
  }
  console.log("User", user);

  return (
    <div className="mx-20 min-h-[90vh] flex justify-center items-center gap-10 flex-col">
      {user &&
        <div className="flex justify-center items-center gap-10">

          <div className="flex justify-center items-center">
            <img className="rounded-full " src={user?.photoURL} alt=""/>
          </div>

          <div>
            <h1> <span className="font-semibold">Name: </span>{user?.displayName}</h1>
            <h1> <span className="font-semibold">Email: </span>{user?.email}</h1>
            <h1><span className="font-semibold">Acc Create: </span>{user?.metadata.creationTime}</h1>
            <h1><span className="font-semibold">Last Sign In Time : </span>{user?.metadata.lastSignInTime}</h1>
          </div>

        </div>
      }

      <div className="">
        <button onClick={handleGoogleSignIn} className="bg-emerald-400 text-white px-4 py-2 rounded-lg hover:bg-emerald-300 active:scale-95 transition-all">Google Login</button>
      </div>
    </div>
  )
}

export default Login