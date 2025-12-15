import {calculateInvestmentResults, formatter} from "../../util/investment.js";

export default function Result({userInputs}) {
  const resultData = calculateInvestmentResults(userInputs)
  
  return (<table id="result">
    <thead>
    <tr>
      <th>Year</th>
      <th>Investment value</th>
      <th>Interest (Year)</th>
      <th>Total interest</th>
      <th>Invested capital</th>
    </tr>
    </thead>
    <tbody>
    {resultData.map(row => {
      const initialInvestment = userInputs.initialInvestment;
      const totalInterestValue = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
      const totalAmountInvested = row.valueEndOfYear - totalInterestValue;
      
      return (<tr key={row.year}>
        <td>{row.year}</td>
        <td>{formatter.format(row.valueEndOfYear)}</td>
        <td>{formatter.format(row.interest)}</td>
        <td>{formatter.format(totalInterestValue)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>)
    })}
    </tbody>
  </table>)
}
