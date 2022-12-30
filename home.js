function Home(){
  React.useEffect(() => {
    highlightNavLink("nav-home");
  });

  return (
    <Card
      bgcolor="danger"
      header="Bank of China"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
