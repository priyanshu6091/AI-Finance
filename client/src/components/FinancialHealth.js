import React, { useState } from 'react';
import axios from 'axios';

const FinancialHealth = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [assets, setAssets] = useState('');
  const [liabilities, setLiabilities] = useState('');
  const [financialHealth, setFinancialHealth] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5001/predict', { income, expenses, assets, liabilities });
    setFinancialHealth(data.financial_health);
  };

  return (
    <div>
      <h1>Financial Health Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Income" value={income} onChange={(e) => setIncome(e.target.value)} />
        <input type="number" placeholder="Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
        <input type="number" placeholder="Assets" value={assets} onChange={(e) => setAssets(e.target.value)} />
        <input type="number" placeholder="Liabilities" value={liabilities} onChange={(e) => setLiabilities(e.target.value)} />
        <button type="submit">Predict</button>
      </form>
      {financialHealth && <p>Your Financial Health Score: {financialHealth}</p>}
    </div>
  );
};

export default FinancialHealth;
