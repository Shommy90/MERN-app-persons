import React from "react";
import { NavLink } from "react-router-dom";

const PersonRow = ({ person, deletePerson, index }) => {
  let date = new Date(person.createdDate);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{person.name}</td>
      <td>{person.surname}</td>
      <td>
        <small>{date.toDateString()}</small>
      </td>
      <td>{person.city}</td>
      <td>{person.address}</td>
      <td>{person.phone}</td>
      <td>
        <NavLink to={`/edit/${person._id}`} style={{ fontSize: "14px" }}>
          edit
        </NavLink>{" "}
        |{" "}
        <small
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => deletePerson(person._id)}
        >
          delete
        </small>
      </td>
    </tr>
  );
};

export default PersonRow;
