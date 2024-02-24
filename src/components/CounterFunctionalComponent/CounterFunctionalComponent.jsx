function App() {

  const url = 'https://api.gemini.com/v1/book/btcusd'
  
  const [orders, setOrders] = useState([])
  
  const fetchData = () => {
    fetch(url).then(response => {
      return response.json();
  }).then(data => {
      console.log(data)
      setOrders(data)
  }).catch(error => {
      console.log(error)
  })
  }
    
  useEffect(() => {
    fetchData()
  }, [])
    return (
      <div className="App">
        <h1>{orders.asks}</h1>
      </div>
  );
  }
  
  export default App;