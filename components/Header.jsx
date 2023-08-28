import "../src/App.css";

// const links = [{link: '/'}];

const Header = ({ simple, setSimple, hex, setHex }) => {
  // const defaultBackgroundColor = "#f1f5f3";

  const navs = [
    { id: 1, title: "Simple", ref: "#" },
    { id: 2, title: "Hex", ref: "#" },
  ];

  const handleClick = (id) => {
    // mainStyle.backgroundColor = defaultBackgroundColor;
    // console.log(mainStyle.backgroundColor);

    // if (id === 1) setHex(false), setSimple(true);
    // if (id === 2) setSimple(false), setHex(true);
    // Or
    setSimple(id === 1);
    setHex(id === 2);
  };
  console.log(simple, hex);

  return (
    <header>
      <h1>Color Flipper</h1>
      <nav>
        {/* <Link href="/">Simple</Link> */}
        {/* <Link to={links[0].link}>Hex</Link> */}
        {/* <a href="#" onClick={handleClick}>
          Simple
        </a>
        <a href="#">Hex</a> */}

        {navs.map((nav) => {
          return (
            <a key={nav.id} href={nav.ref} onClick={() => handleClick(nav.id)}>
              {nav.title}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
