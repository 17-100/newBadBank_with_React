function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState(''); 
    const [data, setData] = React.useState('')
    const [balance, setBalance] = React.useState('');

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
        <h3>You got some serious amount of money on your bank. Nice!</h3>
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
    const [balance, setBalance] = React.useState('');
    /* const ctx = React.useContext(UserContext); */

    // Handler for Database
    // I get back the balance of the specific account however I don't know how to...
    // ... hold the return-value of fetch, so I can ping a new route and therefore...
    // ... update the database.
    function handle() {
        // Get back newBalance
        function getNewBalance() {
            return fetch(`/account/find/${mail}/`)
                    .then(response => response.json())
                    .then(data => Number(data[0].balance) + Number(deposit));
        } 
        
        async function invoke() {
            var newBalanceNumber = await getNewBalance();
            var newBalance = newBalanceNumber.toString();
            props.setShow(false);
            return fetch(`/account/update/${mail}/${newBalance}`)
            .then(data => console.log( `The new Balance of the account with address ${mail} amounts to ${newBalance}`));
        }

        invoke();
    }

    /* function handle() {
        console.log(mail, deposit)
        var user = ctx.users.find(x => x.email === mail);
        var userBalance = Number(user.balance)
        var newBalance = userBalance += Number(deposit);
        user.balance = newBalance;
        props.setShow(false);
    } */

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