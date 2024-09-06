import "./style.css";

const Header = () => {
    return (    
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            Привет, это <em>Биржа практик</em><br />
            Администрации Екатеринбурга<br />
        </h1>
        <div className="header__text">
            <p>здесь ты не останешься без дела следующим летом.</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
    </div>
</header>);
}

export default Header;