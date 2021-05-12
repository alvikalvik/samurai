import styles from './Header.module.css';

const {header} = styles;

const Header = () => {
    return (
        <header className={header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
        </header>
    );
}

export default Header;