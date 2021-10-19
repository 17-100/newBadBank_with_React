function Login() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(''); 

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? 
                    <CreateForm setShow={setShow}/> 
                    : 
                    <CreateMsg setShow={setShow}/>    
                }
            text="create your account olum"
        />
    )
}

function CreateMsg(props) {
    return (<>
    <img src="user.png"></img>
        <h5>Success! You are logged in.</h5>
        <h5>This is your profile page my friend!</h5>
        <button type="submit" 
                className="btn btn-light" 
                onClick={() => props.setShow(true)}
        >LogOut
        </button>
    </>)
}

function CreateForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handle() {
        console.log(email, password);
        const url = `/account/login/${email}/${password}`;
        (async() => {
            var res = await fetch(url);
            var data = res.json();
            console.log(data);
        })();
        props.setShow(false);
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