import s from "./SearchList.module.css";
const SearchList = ({ value, handleFilterContact }) => {
  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={(e) => handleFilterContact(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchList;
