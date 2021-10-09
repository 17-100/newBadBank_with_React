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

    function handle() {
        fetch(`/account/${mail}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBalance(JSON.stringify(data[0].balance))
            });
        /* setBalance(data.balance) */
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