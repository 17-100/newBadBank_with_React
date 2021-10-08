function Balance() {
    const [status, setStatus] = React.useState(''); 

    return (
        <Card
            bgcolor="info"
            header="Balance"
            txtcolor=""
            status={status}
            body={<ShowBalance/> }
            text="show some money len"
        />
    )
}

function ShowBalance(props) {
    const [mail, setMail] = React.useState('');
    const [balance, setBalance] = React.useState('');
    const ctx = React.useContext(UserContext)

    function handle() {
        console.log(mail, balance)
        var user = ctx.users.find(x => x.email === mail);
        setBalance(user.balance)
    }

    return(<>
        Email<br/>
        <input  type="input"
                className="form-control"
                placeholder="choose account to show balance"
                value={mail}
                onChange={e => setMail(e.currentTarget.value)}
        />
        <br/>
        <button type="submit"
                className="btn btn-light"
                onClick={handle}
        >Show Balance
        </button>
        <br/>
        <h1>{balance}</h1>
    </>)
}