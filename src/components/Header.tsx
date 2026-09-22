import '../styles/Header.css';
import withLogger from './withLogger';

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

export default withLogger(Header, 'Header');