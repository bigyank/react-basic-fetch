import React from "react";
import "./Table.css";

const Table = ({ column, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((head) => (
            <th>{head.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((info) => (
          <tr key={info.id}>
            {column.map((body) => (
              <td>{info[body.attribute]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
