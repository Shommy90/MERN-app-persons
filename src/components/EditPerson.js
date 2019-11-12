import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createPerson } from "../actions/personActions";

class EditPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      city: "",
      address: "",
      phone: "",
      error: "",
      success: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/persons/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.name,
          surname: res.data.surname,
          city: res.data.city,
          address: res.data.address,
          phone: res.data.phone
        });
      });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const updatedUser = {
      name: this.state.name,
      surname: this.state.surname,
      city: this.state.city,
      address: this.state.address,
      phone: this.state.phone
    };

    axios
      .post(
        `http://localhost:5000/persons/${this.props.match.params.id}`,
        updatedUser
      )
      .then(res => {
        this.props.createPerson({
          name: this.state.name,
          surname: this.state.surname,
          city: this.state.city,
          address: this.state.address,
          phone: this.state.phone
        });
        this.setState({ success: res.data, error: "" });
      })
      .catch(err => {
        this.setState({ error: err.response.data, success: "" });
      });
  };

  render() {
    return (
      <div className="my-5">
        <h3>Edit Person</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.surname}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="surname"
              placeholder="Enter Surame"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="city"
              placeholder="Enter City"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.address}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.phone}
              onChange={this.handleChange}
              type="number"
              className="form-control"
              name="phone"
              placeholder="Enter Phone Number"
            />
          </div>
          {this.state.error === "" ? (
            ""
          ) : (
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}

          {this.state.success === "" ? (
            ""
          ) : (
            <div className="alert alert-success" role="alert">
              {this.state.success}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.person
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPerson: person => dispatch(createPerson(person))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);
