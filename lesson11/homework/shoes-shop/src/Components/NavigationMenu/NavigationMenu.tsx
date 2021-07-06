import "./NavigationMenu.css";

function NavigationMenu(): JSX.Element {
    return (
        <div className="NavigationMenu">
            <h2>Recommended links about shoes:</h2>
            <div className="links">
                <a href="https://www.nike.com/il/">Nike</a>
                <a href="https://www.adidas.com">Adidas</a>
                <a href="https://www.underarmour.com/en-us/c/mens/shoes/"> Under Armour</a>
                <a href="https://www.reebok.com/"> Reebok</a>
            </div>
        </div>
    );
}

export default NavigationMenu;
