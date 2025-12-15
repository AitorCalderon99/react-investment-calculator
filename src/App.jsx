import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";
import {useState} from "react";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10
  })
  
  const inputsAreValid = inputs.duration >= 1;
  
  function handleChange(inputIdentifier, newValue) {
    setInputs((prevState) => {
      return {...prevState, [inputIdentifier]: +newValue};
    })
  }
  
  return (<>
    <Header/>
    <UserInput userInputs={inputs} onChangeInput={handleChange}/>
    {inputsAreValid ? <Result userInputs={inputs}/> :
      <p className="center"> Please, enter input valid data. Duration must be greater than 0.</p>}
  </>)
}

export default App
