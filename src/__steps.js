/**
 * 1. visit: console.firebase.google.com
 * 
 * 2. create project (skip google analytics) 
 * 
 * 3. register app (create config)
 * 
 * 4. install firebase: npm install firebase
 * 
 * 5. add config file to : firebase.init.js
 * 
 * 6. export app from the firebase.init.js
 * 
 * 7. DANGER: Do not publish or make firebase config to public by pushing those to github
 * 
 * 8. Visit: goto Docs > Build > Authentication > Web > Get Started
 * 
 * 9. Login.jsx: import getAuth from firebase/auth
 * 
 * 10.create const auth = getAuth(app)
 * 
 * 11. import googleAuthProvider and create a new provider
 * 
 * 12. create a function whitch is use in onlcick for login button
 * 
 * 13. in the fuction use signInWithPopUp and pass auth and provider
 * 
 * 14. use promice like this
 *  .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log('error',error.message);
    })

 * 15. go to project > Build >  Authentication > Sign-In method and  activate sign-in method (google, facebook, github, etc.)
 * 
 * 16. 
 * 
 */
