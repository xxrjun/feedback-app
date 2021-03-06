function RatingSelect({ selected, setSelected }) {
  const handleChange = (e) => {
    console.log(+e.currentTarget.value);
    setSelected(+e.currentTarget.value); // using '+' to cast value type from string to num
  };

  // simplified with iteration
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        // ?
        <li key={`rating - ${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
