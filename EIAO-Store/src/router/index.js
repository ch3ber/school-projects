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
}

const router = new Router()

export const changeRoute = async () => {
  const container = document.getElementById('app')
  container.innerHTML = await router.getContentOfRoute()
}
