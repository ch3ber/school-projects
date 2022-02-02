import { user } from '../login'
import { routes } from './index.routes'

class Router {
  getNameRoute () {
    return (
      window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || 'root'
    )
  }

  getContentOfRoute () {
    const route = this.getNameRoute()
    return routes[route] ? routes[route].template : routes.error404.template
  }

  async render (id) {
    const container = document.getElementById(id)
    container.innerHTML = await router.getContentOfRoute()
    console.log('finish render')
  }
}

export const router = new Router()

export const changeRoute = async () => {
  await router.render('app')

  const loginButton = document.getElementById('loginButton')
  console.log(loginButton)
  loginButton.addEventListener('click', async () => {
    user.setAuth({ auth: [true] })
    console.log(user.getUserAuth())
    await router.render('app')
  })
}
