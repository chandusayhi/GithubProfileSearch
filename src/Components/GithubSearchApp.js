import React, {useState} from "react";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import {useDispatch, useSelector} from "react-redux";
import * as githubAction from '../redux/githubSearch/githubSearch.action';
import * as githubReducer from '../redux/githubSearch/githubSearch.reducer';

let GithubSearchApp = () => {
    let dispatch = useDispatch();
    let [githubUser , setGithubUser] = useState('');
    let [githubProfile , setGithubProfile] = useState({});
    let [githubRepos , setGithubRepos] = useState([]);
    let [errorMessage , setErrorMessage] = useState('');

    let submitSearch = (event) => {
        event.preventDefault();
        dispatch(githubAction.githubProfileInfo(githubUser));
        dispatch(githubAction.githubRepoInfo(githubUser))
    };
    let githubProfileRepoInfo = useSelector((state) => {
        return state[githubReducer.githubFeatureKey];
    });
    let {loading, gitHubProfile, githubRepo, error} = githubProfileRepoInfo;

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(gitHubProfile)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Github Profile Search</p>
                        <p className="lead">GitHub is an increasingly popular programming resource used for code sharing. It's a social networking site for programmers that many companies and organizations use to facilitate project management and collaboration. According to statistics collected in October 2020, it is the most prominent source code host, with over 60 million new repositories created in 2020 and boasting over 56 million total developers.
                            Before we take an in-depth look at what GitHub is, let’s check out a use case and gain an appreciation for its relevance.</p>
                      </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                                <input
                                    value={githubUser}
                                    onChange={e => setGithubUser(e.target.value)}
                                    size="30" type="text" className="form-control" placeholder="Github Username"/>
                            </div>
                            <input type="submit" className="btn btn-secondary btn-sm" value="Search"/>
                        </form>
                    </div>
                </div>
            </div>
                {/* Github Profile Details */}
                <React.Fragment>
                        {
                            Object.keys(gitHubProfile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfile/>
                                </React.Fragment> : null
                        }
                </React.Fragment>
                {/* Github Repos Details*/}
                <div className="row">
                    <div className="col">
                        {
                            githubRepo.length > 0 ?
                                <React.Fragment>
                                    <GithubRepos/>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
        </React.Fragment>
    );
};
export default GithubSearchApp;
