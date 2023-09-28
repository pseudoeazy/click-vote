import Container from "components/container";
import Menu from "./menu";
import Hero from "components/sections/hero";

const Header = () => {
  return (
    <header className="w-full">
      <Container className="relative">
        <div className="background__header"></div>
        <Menu />
        <Hero />
      </Container>
    </header>
  );
};

export default Header;
