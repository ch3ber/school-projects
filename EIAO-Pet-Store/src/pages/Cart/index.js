import { Footer } from '../../components/Footer'
import { Nav } from '../../components/Nav'

export const Cart = () => {
  const view = `
    ${Nav()}
    <p>cart</p>
    ${Footer()}
  `
  return view
}
