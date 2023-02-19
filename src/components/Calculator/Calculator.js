import React, { useState } from 'react';

function Calculator() {
  const [storage, setStorage] = useState(0);
  const [transfer, setTransfer] = useState(0);
  const [provider, setProvider] = useState('');

  return (
    <div className="calculator bg-gray-100 py-8">
      <h1 className="text-3xl text-center mb-8">Storage Calculator</h1>

      <div className="inputs px-8">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="storage">
            Storage (GB):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storage"
            type="number"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="transfer">
            Transfer (GB):
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transfer"
            type="number"
            value={transfer}
            onChange={(e) => setTransfer(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="provider">
            Provider:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="">Select a provider</option>
            <option value="backblaze">Backblaze</option>
            <option value="bunny">Bunny.net</option>
            <option value="scaleway">Scaleway</option>
            <option value="vultr">Vultr</option>
          </select>
        </div>
      </div>

      <table className="prices mx-auto my-8">
        <thead>
          <tr>
            <th></th>
            <th className="text-center font-bold">Storage</th>
            <th className="text-center font-bold">Transfer</th>
            <th className="text-center font-bold">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr className="backblaze">
            <td>Backblaze</td>
            <td className="text-center">$0.005 per GB</td>
            <td className="text-center">$0.01 per GB</td>
            <td className="text-center">
              ${((0.005 * storage + 0.01 * transfer) || 0).toFixed(2)}
            </td>
          </tr>
          <tr className="bunny">
            <td>Bunny.net</td>
            <td className="text-center">
              <select
                className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="0.01">HDD: $0.01 per GB</option>
                <option value="0.02">SSD: $0.02 per GB</option>
              </select>
            </td>
            <td className="text-center">$0.01 per GB</td>
            <td className="text-center">
              ${((provider === 'bunny' && (storage * 0.01 + transfer * 0.01)) || 0).toFixed(2)}
            </td>
          </tr>
          <tr className="scaleway">
            <td>Scaleway</td>
            <td className="text-center">$0.02 per GB</td>
            <td className="text-center">$0.01 per GB</td>
            <td className="text-center">
              ${((0.02 * storage + 0.01 * transfer) || 0).toFixed(2)}
            </td>
          </tr>
          <tr className="vultr">
            <td>Vultr</td>
            <td className="text-center">$0.10 per GB</td>
            <td className="text-center">$0.05 per GB</td>
            <td className="text-center">
              ${((0.1 * storage + 0.05 * transfer) || 0).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calculator;