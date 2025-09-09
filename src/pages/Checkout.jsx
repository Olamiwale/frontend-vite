const Checkout = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input className="w-full border rounded px-3 py-2" type="text" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input className="w-full border rounded px-3 py-2" type="email" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <input className="w-full border rounded px-3 py-2" type="text" required />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
