import React from "react";
import { RepoContainer } from "./RepoContainer/RepoContainer";
import { SearchForm } from "./Search/SearchForm";
import "./MainPage.scss";
import { useSelector } from "react-redux";
import { AppStateType } from "../store/store";
import { Loading } from "./Loading/Loading";

export const MainPage = () => {
  const { gitRepo, history, status } = useSelector(
    (state: AppStateType) => state.gitRepo
  );

  return (
    <div className="main-container">
      <SearchForm history={history} />
      {status === "loading" ? <Loading /> : <RepoContainer gitRepo={gitRepo} />}
    </div>
  );
};
