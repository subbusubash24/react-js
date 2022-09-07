 import { useState, useEffect } from "react";

function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [log, setLog] = useState("")

    useEffect(() => {
        // alert(localStorage.getItem("login"))
        setLog(localStorage.getItem("login"))
    }, [])

    function emailHandler(event) {
        setEmail(event.target.value)
    }
    function passwordHandler(event) {
        setPassword(event.target.value)
    }


    function loginHandler(event) {


        // props.login(log)
        event.preventDefault()
        // console.log(email);
        // console.log(password);
        if (log != true) {
            if (email.includes('@') && password.length > 5) {
                props.login(true)
                setEmail("")
                setPassword("")
                setLog(true)
            } else {
                alert("incorrect password")
            }
        } else {
            // setLog(false)
            props.login(false)
            setLog(false)

            setEmail("")
            setPassword("")
        }

    }

    return (
        <div>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Email" onChange={emailHandler} value={email} />
                <input type="password" placeholder="Password" onChange={passwordHandler} value={password} />
                <input type="submit" value={log == true ? "logout" : "login"} />
            </form>
        </div>
    )
}

export default Login;