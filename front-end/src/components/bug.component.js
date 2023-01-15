import React, { Component } from "react";
import * as actions from "../actions/actions";

export default class Bug extends Component {
    constructor(props) {
        super(props);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);
        this.onChangeAsignee = this.onChangeAsignee.bind(this);
        this.onChangeSeverity = this.onChangeSeverity.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCommitLink = this.onChangeCommitLink.bind(this);
        this.saveBug = this.saveBug.bind(this);
        this.newBug = this.newBug.bind(this);

        this.state = {
            id: null,
            project: "",
            summary: "",
            asignee: "",
            severity: "",
            priority: "",
            description: "",
            commitLink: "",

            submitted: false
        };
    }

    onChangeProject(e) {
        this.setState({
            project: e.target.value
        });
    }

    onChangeSummary(e) {
        this.setState({
            summary: e.target.value
        });
    }

    onChangeAsignee(e) {
        this.setState({
            asignee: e.target.value
        });
    }

    onChangeSeverity(e) {
        this.setState({
            severity: e.target.value
        });
    }
    
    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }
    
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    
    onChangeCommitLink(e) {
        this.setState({
            commitLink: e.target.value
        });
    }

    saveBug() {
        var data = {
            project: this.state.project,
            summary: this.state.summary,
            asignee: this.state.asignee,
            severity: this.state.severity,
            priority: this.state.priority,
            description: this.state.description,
            commitLink: this.state.commitLink
        };

        actions.addBug(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    project: response.data.project,
                    summary: response.data.summary,
                    asignee: response.data.asignee,
                    severity: response.data.severity,
                    priority: response.data.priority,
                    description: response.data.description,
                    commitLink: response.data.commitLink,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.warn(e);
            });
    }

    newBug() {
        this.setState({
            id: null,
            project: "",
            summary: "",
            asignee: "",
            severity: "",
            priority: "",
            description: "",
            commitLink: "",

            submitted: false
        });
    }

    render() {
        return (
        <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBug}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Project</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.project}
                onChange={this.onChangeProject}
                name="project"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Summary</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.summary}
                onChange={this.onChangeSummary}
                name="description"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
        );
    }
}