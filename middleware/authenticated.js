import { auth } from '@/plugins/firebase'

function checkUser() {
  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      resolve(user)
    })
  })
}

export default async function({ redirect }) {
  const user = await checkUser()
  const isLogin = !!user
  // eslint-disable-next-line no-console
  console.log('isLogin: ' + isLogin)
  if (!isLogin) {
    return redirect('/login')
  }
}
