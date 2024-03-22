import Brand from "./Brand";
import Container from "./shared/Container";

const Footer = () => {
  return (
    <footer className="bg-primary2">
      <Container className="p-10">
        <Brand className="text-white" />
      </Container>
    </footer>
  );
};

export default Footer;
