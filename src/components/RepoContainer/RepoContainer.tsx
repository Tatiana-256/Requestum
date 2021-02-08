import React from "react";
import { Repo } from "../Repo/Repo";
import "./RepoContainer.scss";

interface IProps {
  gitRepo: Array<{
    name: string;
    language: string;
    description: string;
  }>;
}

export const RepoContainer: React.FC<IProps> = ({ gitRepo }) => (
  <div className="repo-container">
    {gitRepo.map((item) => (
      <Repo repo={item} key={Math.random().toString()} />
    ))}
  </div>
);
