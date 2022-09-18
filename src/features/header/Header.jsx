import Logo from '../../assets/bigBuyLogo';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
