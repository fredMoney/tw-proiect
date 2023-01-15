import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actions from "../actions/actions";

export default class BugsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchSummary = this.onChangeSearchSummary.bind(this);
        this.retrieveBugs = this.retrieveBugs.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveBug = this.setActiveBug.bind(this);
        this.searchSummary = this.searchSummary.bind(this);

        this.state = {
            bugs: [],
            currentBug: null,
            currentIndex: -1,
            searchSummary: ""
        };
    }

    componentDidMount() {
        this.retrieveBugs();
    }

    onChangeSearchSummary(e) {
        const searchSummary = e.target.value;
    
        this.setState({
          searchSummary: searchSummary
        });
    }

    retrieveBugs() {
        actions.getBugs()
    }

    refreshList() {
        this.retrieveBugs();
        this.setState({
            currentBug: null,
            currentIndex: -1
        });
    }

    setActiveBug(bug, index) {
        this.setState({
            currentBug: bug,
            currentIndex: index
        });
    }

    searchSummary() {
        actions.getBugBySummary(this.state.searchSummary)
    }

    render() {
        const { searchSummary, bugs, currentBug, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search by summary"
                        value={searchSummary}
                        onChange={this.onChangeSearchSummary}
                        />
                        <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={this.searchSummary}
                        >
                            Search
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <h4>Bugs List</h4>

                <ul className="list-group">
                    {bugs &&
                    bugs.map((bug, index) => (
                        <li
                        className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                        }
                        onClick={() => this.setActiveBug(bug, index)}
                        key={index}
                        >
                        {bug.summary}
                        </li>
                    ))}
                </ul>

                </div>
                <div className="col-md-6">
                {currentBug ? (
                    <div>
                    <h4>Bug</h4>
                    <div>
                        <label>
                        <strong>Project:</strong>
                        </label>{" "}
                        {currentBug.project}
                    </div>
                    <div>
                        <label>
                        <strong>Summary:</strong>
                        </label>{" "}
                        {currentBug.summary}
                    </div>
                    <div>
                        <label>
                        <strong>Asignee</strong>
                        </label>{" "}
                        {currentBug.asignee}
                    </div>

                    <Link
                        to={"/bugs/" + currentBug.id}
                        className="badge badge-warning"
                    >
                        Edit
                    </Link>
                    </div>
                ) : (
                    <div>
                    <br />
                    <p>Please click on a bug</p>
                    </div>
                )}
            </div>
        </div>
        );
    }
}