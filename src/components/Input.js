export const Input = ({ holder, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      className="form-control mb-2"
      placeholder={holder}
      onChange={handleChange}
    />
  );
};
