import './Header.css';

const Header = ({ variant, title }) => {
    return (
        <div className={variant}>
            <h1>{title}</h1>
        </div>
    )
}

export default Header