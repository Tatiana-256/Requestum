import React, { useState } from "react";
import { gitSearchActions } from "../../store/gitRepo/gitRepoActions";
import "./SearchForm.scss";
import { useDispatch } from "react-redux";

interface IProps {
  history: Array<string>;
}

export const SearchForm: React.FC<IProps> = ({ history }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(false);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setEditMode(true);
  };
  const searchRepo = () => {
    if (value !== "") {
      dispatch(gitSearchActions.getRepoLoading(value));
      setValue("");
      setEditMode(false);
    }
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      searchRepo();
    }
  };

  const inputStyle = value === "" && editMode ? "input-error" : "input-ok";
  const buttonStyle = value === "" && editMode;

  return (
    <div className="search-form">
      <input
        defaultValue={value}
        onChange={inputChange}
        onKeyPress={onKeyPress}
        className={inputStyle}
      />
      <button onClick={searchRepo} disabled={buttonStyle}>
        search
      </button>
      <div className="search">Search history</div>
      {history.map((item) => (
        <div key={Math.random().toString()}>{item}</div>
      ))}
    </div>
  );
};
