import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">Dev Insights</div>
      <nav>
        <a href="#" className="header-nav-link">New Post</a>
      </nav>
    </header>
  );
};

export default Header;