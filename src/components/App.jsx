import { useState } from "react";
import tableData from "../../tableData";
import MyChart from "./MyChart";
import Table from "./Table";

function App() {
  const [selectedRow, setSelectedRow] = useState(tableData[0]);

  return (
    <div className="app">
      <MyChart data={selectedRow.graphData} title={selectedRow.title} />
      <Table
        data={tableData}
        activeId={selectedRow.id}
        onRowSelect={(row) => setSelectedRow(row)}
      />
    </div>
  );
}

export default App;
