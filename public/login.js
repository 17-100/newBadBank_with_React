

function Login() {
    // Encrypted password requirements
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(''); 
    

    return (
        <Card
            bgcolor="primary"
            header="LogIn"
            status={status}
            body={show ? 
                    <LogInForm setShow={setShow}/> 
                    : 
                    <LoggedInMsg setShow={setShow}/>    
                }
        />
    )
}

function LoggedInMsg(props) {
    return (<>
    <img src="user.png" className="img-fluid" alt="Responsive image"></img>
        <h5>Success! You are logged in.</h5>
        <h5>This is your profile page my friend!</h5>
        <button type="submit" 
                className="btn btn-light" 
                onClick={() => props.setShow(true)}
        >LogOut
        </button>
    </>)
}

function LogInForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handle() {
        function getLoggedInUser() {
            return fetch(`/account/login/${email}/${password}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data[0].response) {
                            console.log("Password Correct! You are Logged In Now");
                            props.setShow(false);
                        }
                        if (!data[0].response) {
                            console.log("Password incorrect! Try again.")
                        }
                    })
                    
        } 
        getLoggedInUser();
    }

    return (<>

        Email address<br/>
        <input  type="input"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
        />
        <br/>

        Password<br/>
        <input  type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
        />
        <br/>
        <button type="submit"
                className="btn btn-light"
                onClick={handle}
        >Login
        </button>
    </>)
}