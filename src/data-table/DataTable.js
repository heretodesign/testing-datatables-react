import React from 'react';
const DataTable = props => {
   return (
      <table>
         <thead>
            <tr>
               {props.cols.map(col =>
                  <th key={col.name}>{col.header}</th>
               )}
            </tr>
         </thead>
      </table>
  );
}
export default DataTable;