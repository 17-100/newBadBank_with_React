function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(''); 

    return (
        <Card
            bgcolor="primary"
            header="LogIn"
            status={status}
            body={show ? 
                    <CreateLoginForm setShow={setShow}/> 
                    : 
                    <CreateLoginMsg setShow={setShow}/>    
                }
        />
    )
}

function CreateLoginMsg(props) {
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

function CreateLoginForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handle() {
        function getLoggedInUser() {
            return fetch(`/account/${mail}/`)
                    .then(response => response.json())
                    .then(data => console.log("tried to login as: " + data[0]));
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