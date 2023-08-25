import "../src/App.css";

// const links = [{link: '/'}];

const Header = () => {
  return (
    <header>
      <h1>Color Flipper</h1>
      <nav>
        {/* <Link href="/">Simple</Link> */}
        {/* <Link to={links[0].link}>Hex</Link> */}
        <a href="#">Simple</a>
        <a href="#">Hex</a>
      </nav>
    </header>
  );
};

export default Header;
