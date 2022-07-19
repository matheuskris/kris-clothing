import './button.styles.scss'

const ButtonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted',
}
const Button = ({ children, buttonType, ...otherProps }) => {
    return(
        <button 
            className={`button-container ${ButtonTypeClasses[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button