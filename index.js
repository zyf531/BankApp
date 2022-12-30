
function Spa() {
  const initialize = [
    {name:'JacksonZhang', email:'jackson531@mit.edu', password:'12345678', balance:100},
    {name:'zhangmingzhu', email:'zhangmingzhu@mit.edu', password:'12345678', balance:100},
    {name:'chenlei', email:'chenlei@mit.edu', password:'12345678', balance:150},
    {name:'wangwenjie', email:'wangwenjie@mit.edu', password:'12345678', balance:200},
    {name:'menglingxue', email:'menglingxue@mit.edu', password:'12345678', balance:300}
  ]
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{loginid:'', users:initialize}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
