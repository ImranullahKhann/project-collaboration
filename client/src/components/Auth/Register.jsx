export default function Register () {
    return (
        <form className="authForm mt-10" action="">
            <div className="authTextInput">
                <label htmlFor="email">EMAIL</label>
                <input className="authInputBox" type="email" name="email" />
            </div>
            <div className="authTextInput">
                <label htmlFor="username">USERNAME</label>
                <input className="authInputBox" type="text" name="username" />
            </div>
            <div className="authTextInput">
                <label htmlFor="password">PASSWORD</label>
                <input className="authInputBox" type="password" name="password" />
            </div>
            <div className="authTextInput">
                <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                <input className="authInputBox" type="password" name="confirmPassword" />
            </div>
            <button className="authFormButton">Login</button>
        </form>
    )
}