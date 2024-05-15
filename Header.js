const Header =props => (
    <header>
        <h3>My First ReactJS SPA.</h3>
        <h3>{props.appName}</h3>
    </header>
);

export default Header;