import Auth from "./Auth.mjs";

const testCreation = (userName, email, password) => {
  Auth.createUser(userName, email, password)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const testSignInWithEmail = (email, password) => {
  Auth.signInWithEmail(email, password)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const testSignInWIthUserName = (userName, password) => {
  Auth.signInWithUserName(userName, password)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.message)
    })
}


testCreation("ok", "ok", "ok")

testSignInWithEmail("ok", "wrong password")
testSignInWithEmail("email is not used", "ok")
testSignInWithEmail("ok", "ok")

testSignInWIthUserName("ok", "wrong password")
testSignInWIthUserName("user name is not used", "ok")
testSignInWIthUserName("ok", "ok")