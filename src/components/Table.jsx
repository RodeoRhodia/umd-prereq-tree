//----------------------------------------------------------------------//
// Credits to CS Student Strategies and Haritha Computers & Technology,
// for helping me develop this Component
//
// How To Create A Table Component In React
// https://www.youtube.com/watch?v=7L3C_y7L120
//
// Reactjs Default Radio Button Checked Value Display jsx Component
// https://www.youtube.com/watch?v=1yKYDzFLyg0
//----------------------------------------------------------------------//

import React, { Fragment } from 'react';
import './Table.css';

const Table = ({ list, colNames, typeOfId }) => {
  return (
    <div>
      {list.length > 0 && (
        <table cellSpacing="0" className="content-table">
          <thead>
            <tr>
              <th></th>
              {colNames.map((headerItem) => (
                <th>
                  {headerItem}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <Fragment>
              {Object.values(list).map((obj, index) => (
                <Fragment>
                  <tr>
                    <td>
                      <input 
                        type='radio' 
                        name={typeOfId} 
                        onChange={(event) => console.log(obj[typeOfId])}/>
                    </td>
                    {Object.values(obj).map((value) => (
                      <td>{value}</td>  
                    ))}
                  </tr>
                </Fragment>
              ))}
            </Fragment>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;