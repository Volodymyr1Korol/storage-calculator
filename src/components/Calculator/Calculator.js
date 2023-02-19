import React, { useState } from 'react';
import './Calculator.styled.css';

function Calculator() {
  const [storage, setStorage] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [provider, setProvider] = useState('');

  return (
    <div className="calculator">
      <h1>Storage Calculator</h1>

      <div className="inputs">
        <label>
          Storage (GB):
          <input type="number" value={storage} onChange={e => setStorage(e.target.value)} />
        </label>
        <label>
          Transfer (GB):
          <input type="number" value={transfer} onChange={e => setTransfer(e.target.value)} />
        </label>
        <label>
          Provider:
          <select value={provider} onChange={e => setProvider(e.target.value)}>
            <option value="">Select a provider</option>
            <option value="backblaze">Backblaze</option>
            <option value="bunny">Bunny.net</option>
            <option value="scaleway">Scaleway</option>
            <option value="vultr">Vultr</option>
          </select>
        </label>
      </div>

      <table className="prices">
        <thead>
          <tr>
            <th></th>
            <th>Storage</th>
            <th>Transfer</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr className="backblaze">
            <td>Backblaze</td>
            <td>$0.005 per GB</td>
            <td>$0.01 per GB</td>
            <td>${(0.005 * storage + 0.01 * transfer).toFixed(2)}</td>
          </tr>
          <tr className="bunny">
            <td>Bunny.net</td>
            <td>
              <select>
                <option value="0.01">HDD: $0.01 per GB</option>
                <option value="0.02">SSD: $0.02 per GB</option>
              </select>
            </td>
            <td>$0.01 per GB</td>
            <td>${(provider === 'bunny' ? (storage * document.querySelector('.bunny select').value + transfer * 0.01) : 0).toFixed(2)}</td>
          </tr>
          <tr className="scaleway">
            <td>Scaleway</td>
            <td>$0.005 per GB</td>
            <td>$0.01 per GB</td>
            <td>${(0.005 * storage + 0.01 * transfer).toFixed(2)}</td>
          </tr>
          <tr className="vultr">
            <td>Vultr</td>
            <td>$0.10 per GB</td>
            <td>$0.01 per GB</td>
            <td>${(0.1 * storage + 0.01 * transfer).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
