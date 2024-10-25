import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-black lg:pt-16 lg:pb-7 flex flex-col items-center gap-7">
      <Logo color="#FFFF" />
      <h3 className="text-white text-xs lg:text-2xl">
        © 2020 Kasa. All rights reserved
      </h3>
    </footer>
  );
};
export default Footer;
