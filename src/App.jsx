import Alert from "./components/Alert.jsx";
function App(){
  return (
    <div className="App">
      <div className="App">
        <Alert text="Це повідомлення успіху!" type="success" />
        <Alert text="Увага! Щось пішло не так." type="danger" />
      </div>
    </div>
  )
}

export default App;
