// import "./Hours.css";
import css from "./Hours.module.css";

function Hours(): JSX.Element {
    return (
        // <div className="Hours">
        <div className={css.Hours + " Box"}>
            <p className={css.Bright}>
                Opening hours: Never
            </p>
        </div>
    );
}

export default Hours;
