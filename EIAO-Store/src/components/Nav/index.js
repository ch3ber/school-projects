export const Nav = () => {
  const view = `
    <nav class="nav">
      <a href="/" class="nav__link">
        <h2 nav__logo>EIAO Store</h2>
      </a>
      <ul class="nav__list">
        <li>
          <a href="/" class="nav__link">Home</a>
        </li>
        <li>
          <a href="/#/Cart" class="nav__link">View Cart</a>
        </li>
        <li>
          <a href="/#/login" class="nav__link">Login</a>
        </li>
        <li>
          <button class="nav__link">LogOut</button>
        </li>
      </ul>
    </nav>
  `
  return view
}
