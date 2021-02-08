import React from "react";
import { IGitRepo } from "../../store/store";

// import "./Repo.scss";

interface IProps {
  repo: IGitRepo;
}

export const Repo: React.FC<IProps> = ({ repo }) => {
  const { description, language, name } = repo;
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "14px",
        padding: "10px 40px",
      }}
    >
      <div>
        <b>{name}</b>
      </div>
      <div>
        Language: <b>{language}</b>
      </div>
      <div>
        Description: <b>{description}</b>
      </div>
    </div>
  );
};
