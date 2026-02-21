import React, { useState } from "react";
import tableData from "../../tableData";
import TableRow from "./TableRow";
import MyChart from "./MyChart";

export default function Table() {
  const [openId, setOpenId] = useState(null);

  function handleRowClick(id) {
    setOpenId(openId === id ? null : id);
    console.log(id);
  }

  return (
    <div className="table-wrapper">
      <div className="table">
        <TableRow
          rowData={{
            title: "Показатель",
            currentDay: "Текущий день",
            yesterday: "Вчера",
            thisDayLastWeek: "Этот день недели",
            textAlign: true,
          }}
        />
        {tableData.map((row) => (
          <React.Fragment key={row.id}>
            <TableRow
              rowData={row}
              onSelect={() => handleRowClick(row.id)}
              isActive={openId === row.id}
            />
            {openId === row.id && (
              <div className="chart-container">
                <MyChart rawNumbers={row.graphData} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
