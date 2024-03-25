export const Counter = ({ quantity, setQuantity }) => {
  const handleCounter = (e) => {
    if (e.target.value === "") {
      setQuantity(1);
    } else {
      setQuantity(parseInt(e.target.value));
    }
  };
  return (
    <div className="flex items-center">
      <button
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
        className="border py-3 px-4 text-xl font-semibold"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleCounter}
        className="border text-xl font-medium py-3 px-4 w-16 outline-none"
      />
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="border py-3 px-4 text-xl font-semibold"
      >
        +
      </button>
    </div>
  );
};
