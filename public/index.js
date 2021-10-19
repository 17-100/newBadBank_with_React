// Single Page Application (Spa)
function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'oezge', email:'sebisteri@outlook.com', password:'secret', balance:100}]}}>
            <div className="container" style={{padding: "20px"}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/Login/" component={Login} />
                <Route path="/alldata/" component={AllData} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
            </div>
            </UserContext.Provider>
        </HashRouter>
    )
}

ReactDOM.render(
    <Spa/>, 
    document.getElementById('root')
);