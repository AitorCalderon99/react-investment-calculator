export default function UserInput({userInputs, onChangeInput}) {
  return (<section id="user-input">
    <div className="input-group">
      <p>
        <label htmlFor="initial-investment">Initial investment</label>
        <input type="number" id="initial-investment"
               value={userInputs?.initialInvestment}
               onChange={(event) => onChangeInput("initialInvestment", event.target.value)}
               required/>
      </p>
      <p>
        <label htmlFor="anual-investment">Annual investment</label>
        <input type="number" id="anual-investment"
               value={userInputs?.expectedReturn}
               onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
               required/>
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected return</label>
        <input type="number" id="expected-return"
               value={userInputs?.annualInvestment}
               onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
               required/>
      </p>
      <p>
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration"
               min="1"
               value={userInputs?.duration}
               onChange={(event) => onChangeInput("duration", event.target.value)}
               required/>
      </p>
    </div>
  </section>)
  
}
