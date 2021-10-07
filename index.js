// Single Page Application (Spa)
function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{name:'oezge', email:'sebisteri@outlook.com', password:'secret', balance:100}}>
            <div className="container" style={{padding: "20px"}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/alldata/" component={AllData} />
            </div>
            </UserContext.Provider>
        </HashRouter>
    )
}

ReactDOM.render(
    <Spa/>, 
    document.getElementById('root')
);