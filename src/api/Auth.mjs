import { sha256 } from 'js-sha256';

const db = {
  // userId -> (info)
  users: {

  },
  // userName -> sha256 -> (userId)
  userNames: {

  },
  // email -> sha256 -> (userId)
  emails: {

  }
}

// edge cases:
//   - user with such email exists
//   - user with such userName exists
//
// return:
//   - user
async function createUser(userName, email, password) {
  const myPromise = new Promise((resolve, reject) => {

    const userNameExists = db.userNames[userName]
    const emailExists = db.emails[email]
  
    if (userNameExists) {
      const err = {}
      err.message = "Username already taken."
      reject(err)
    } else if (emailExists) {
      const err = {}
      err.message = "Email already used."
      reject(err)
    } else {
      // good
      const date = new Date();
      const userId = sha256(date.getDate() + date.getSeconds() + password)
      const encryptedPassword = sha256(password)
      db.userNames[userName] = {}
      db.userNames[userName][encryptedPassword] = userId
      db.emails[email] = {}
      db.emails[email][encryptedPassword] = userId
      const user = {
        userName,
        email,
        creationDate: date
      }
      db.users[userId] = user
      resolve(user)
    } 
  })
  return myPromise
}


// edge cases:
//   - user name is not used
// 
// return:
//   - user
async function signInWithUserName(userName, password) {
  const myPromise = new Promise((resolve, reject) => {
    const userNameExists  = db.userNames[userName]

    if (!userNameExists) {
      const err = {}
      err.message = "Username not found."
      reject(err)
    } else {
      const encryptedPassword = sha256(password)
      const userId = db.userNames[userName][encryptedPassword]

      if (!userId) {
        const err = {}
        err.message = "Wrong password."
        reject(err)
      } else {
        const user = db.users[userId]

        if (!user) {
          const err = {}
          err.message = "unexpected: no data on user"
          reject(err)
        } else {
          resolve(user)
        }
      }
    }
  })
  return myPromise
}

// edge cases:
//   - email is not used
// 
// return:
//   - user
async function signInWithEmail(email, password) {
  const myPromise = new Promise((resolve, reject) => {
    const emailExists  = db.emails[email]

    if (!emailExists) {
      const err = {}
      err.message = "email is not used"
      reject(err)
    } else {
      const encryptedPassword = sha256(password)
      const userId = db.emails[email][encryptedPassword]

      if (!userId) {
        const err = {}
        err.message = "wrong password"
        reject(err)
      } else {
        const user = db.users[userId]

        if (!user) {
          const err = {}
          err.message = "unexpected: no data on user"
          reject(err)
        } else {
          resolve(user)
        }
      }
    }
  })
  return myPromise
}

const Auth = {createUser, signInWithEmail, signInWithUserName}

export default Auth;