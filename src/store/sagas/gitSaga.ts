import { call, put, takeLatest } from "redux-saga/effects";
import { getSearchRepo } from "../../API/repoReqiests";
import { gitSearchActions } from "../gitRepo/gitRepoActions";

function* onGetGitRepo(action: any) {
  try {
    const repo = yield call(getSearchRepo, action.search);
    yield put(gitSearchActions.getRepoSuccess(repo, action.search));
  } catch (e) {
    yield put(gitSearchActions.getRepoFailed());
  }
}

export default function* gitSaga() {
  yield takeLatest(gitSearchActions.getRepoLoading().type, onGetGitRepo);
}
