import React from "react";
export default function Orders() {
  const orders = [
    { id: 101, date: '2025-09-01', status: 'Delivered', total: 129.99 },
    { id: 102, date: '2025-08-28', status: 'Processing', total: 59.99 },
    { id: 103, date: '2025-08-15', status: 'Cancelled', total: 89.99 },
  ];
  return (
    <div className="w-full flex flex-col items-center min-h-screen p-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">My Orders</h1>
      <div className="overflow-x-auto w-full max-w-2xl">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-100 text-blue-700">
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="py-2 px-4 font-mono">#{order.id}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold 
                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : ''}
                    ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : ''}
                    ${order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : ''}
                  `}>
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-4 font-semibold">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}