import React from "react";
import PersonRow from "./PersonRow";
import axios from "axios";
import { connect } from "react-redux";
import { createPersons } from "../actions/personActions";

class PersonList extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:5000/persons/").then(res => {
      this.props.createPersons(res.data);
    });
  }

  deletePerson = id => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:5000/persons/${id}`)
        .then(res => console.log(res.data));

      this.props.createPersons(this.props.persons.filter(el => el._id !== id));
    }
  };

  render() {
    return (
      <div className="mt-5">
        <h2>Persons List</h2>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Date Created</th>
              <th scope="col">City</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.props.persons
              ? this.props.persons.map((person, index) => {
                  return (
                    <PersonRow
                      index={index}
                      key={person._id}
                      person={person}
                      deletePerson={this.deletePerson}
                    />
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPersons: persons => dispatch(createPersons(persons))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
