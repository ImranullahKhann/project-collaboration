export default function Login () {
    return (
        <form className="authForm" action="">
            <div className="authTextInput">
                <label htmlFor="email">EMAIL</label>
                <input className="authInputBox" type="email" name="email" />
            </div>
            <div className="authTextInput">
                <label htmlFor="password">PASSWORD</label>
                <input className="authInputBox" type="password" name="password" />
            </div>
            <button className="authFormButton">Login</button>
        </form>
    )
}