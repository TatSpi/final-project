import "./Footer.css";

export const Footer = ({ year }) => {
    return (
        <div>
            <footer>
                <span>&copy; React Blog - {year}</span>
            </footer>
        </div>
    )
}