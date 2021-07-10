import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			My website- feel free to copy | {new Date().getFullYear()}
        </div>
    );
}

export default Footer;
