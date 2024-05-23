import React from 'react';

const RatingTable = () => {
  return (
    <div className="w-45">
      <table className="bg-inherit table-auto text-white">
        <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Иван</td>
          <td>Иванов</td>
          <td>ivan@example.com</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Петр</td>
          <td>Петров</td>
          <td>petr@example.com</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Сергей</td>
          <td>Сергеев</td>
          <td>sergey@example.com</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RatingTable;
