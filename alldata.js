function AllData() {
    const ctx = React.useContext(UserContext)
    return (
        <>
        <h1>AllData Component</h1>
        {JSON.stringify(ctx)}
        </>
      
    )
}