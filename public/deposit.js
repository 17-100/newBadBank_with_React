function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(''); 

    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            txtcolor=""
            status={status}
            body={show ? 
                    <ChooseAccount setShow={setShow}/>
                    : 
                    <ShowDeposit setShow={setShow}/>  
            }
            text="put some money on the bank olum"
        />
    )
}

function ShowDeposit(props) {
    return (<>
        <h5>Success</h5>
        <button type="submit" 
                className="btn btn-light" 
                onClick={() => props.setShow(true)}
        >Another Deposit
        </button>
    </>)
}

function ChooseAccount(props) {
    const [mail, setMail] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext)

    function handle() {
        console.log(mail, deposit)
        var user = ctx.users.find(x => x.email === mail);
        var userBalance = Number(user.balance)
        var newBalance = userBalance += Number(deposit);
        user.balance = newBalance;
        props.setShow(false);
    }

    return(<>
        Email<br/>
        <input  type="input"
                className="form-control"
                placeholder="which account to deposit to"
                value={mail}
                onChange={e => setMail(e.currentTarget.value)}
        />
        <br/>
        Amount<br/>
        <input  type="input"
                className="form-control"
                placeholder="which amount to deposit"
                value={deposit}
                onChange={e => setDeposit(e.currentTarget.value)}
        />
        <br/>
        <button type="submit"
                className="btn btn-light"
                onClick={handle}
        >Deposit
        </button>
    </>)
}