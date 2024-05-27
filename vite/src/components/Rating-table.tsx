import React from 'react';

const RatingTable = () => {
  const data = [
    { id: 1, values: ["", "", "", ""] },
    { id: 2, values: ["", "", "", ""] },
    { id: 3, values: ["", "", "", ""] },
    { id: 4, values: ["", "", "", ""] },
    { id: 5, values: ["", "", "", ""] }
  ];

  const explore = () => {
    //code
  }

  return (
    <div className="w-[45%] d-flex flex-column align-items-center">
      <table className="bg-inherit table-auto w-full">
        <thead className="thead-light h-[4.2rem]">
        <tr>
          <th scope="col m-auto" className="w-[15%]"></th>
          <th scope="col">NAME</th>
          <th scope="col">COUNTRY</th>
          <th scope="col">TEAM</th>
          <th scope="col">SCORE</th>
        </tr>
        </thead>
        <tbody>
        {data.map((row) => (
          <tr className="h-[9rem]" key={row.id}>
            <th scope="row">{row.id}</th>
            {row.values.map((value, index) => (
              <td key={index} className="w-[21%]">{value}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
      <button className="w-[302px] btn btn-primary shadow" onClick={explore}>Explore</button>
    </div>
  );
};

export default RatingTable;
