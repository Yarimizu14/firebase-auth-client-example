<template>
  <div class="container">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { auth } from '@/plugins/firebase'
const firebaseui = require('firebaseui')

export default {
  mounted() {
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // eslint-disable-next-line no-console
          console.log('signInSuccessWithAuthResult', authResult, redirectUrl)

          const isNewUser = authResult.additionalUserInfo.isNewUser

          // eslint-disable-next-line no-console
          console.log('isNewUser: ' + isNewUser)
          if (!isNewUser) {
            return true
          }
        },
        signInFailure: error => {
          alert(error.message)
        }
      },
      autoUpgradeAnonymousUsers: true,
      signInFlow: 'redirect',
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
