import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap gap-8 justify-center lg:justify-between">
      {/* Logo Section */}
      <aside className="flex flex-col items-center md:items-start md:ml-12 lg:ml-20 text-center md:text-left">
        <img className="w-24 h-24 rounded-xl mb-4" src={logo} alt="DineBoard Logo" />
        <p className="font-bold">
          DineBoard Ltd.
          <br />
          Providing best foods since 2002
        </p>
      </aside>

      {/* Services Section */}
      <nav className="flex flex-col items-center md:items-start">
        <h6 className="footer-title text-lg font-semibold mb-3">Services</h6>
        <a className="link link-hover hover:text-primary">Branding</a>
        <a className="link link-hover hover:text-primary">Design</a>
        <a className="link link-hover hover:text-primary">Marketing</a>
        <a className="link link-hover hover:text-primary">Advertisement</a>
      </nav>

      {/* Company Section */}
      <nav className="flex flex-col items-center md:items-start">
        <h6 className="footer-title text-lg font-semibold mb-3">Company</h6>
        <a className="link link-hover hover:text-primary">About us</a>
        <a className="link link-hover hover:text-primary">Contact</a>
        <a className="link link-hover hover:text-primary">Foods</a>
        <a className="link link-hover hover:text-primary">Press kit</a>
      </nav>

      {/* Legal Section */}
      <nav className="flex flex-col items-center md:items-start">
        <h6 className="footer-title text-lg font-semibold mb-3">Legal</h6>
        <a className="link link-hover hover:text-primary">Terms of use</a>
        <a className="link link-hover hover:text-primary">Privacy policy</a>
        <a className="link link-hover hover:text-primary">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
