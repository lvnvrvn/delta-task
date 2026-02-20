import tableData from "../../tableData";
import TableRow from "./TableRow";

export default function Table() {
  return (
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
      {/* {tableData.map((obj, index) => (
        <TableRow key={index} rowData={obj} onClick={() => onRowSelect(row)} />
      ))} */}
      {tableData.map((obj, index) => (
        <TableRow key={index} rowData={obj} onClick={() => onRowSelect(row)} />
      ))}
    </div>
  );
}

{
  tableData.map((row) => (
    <React.Fragment key={row.id}>
      {/* 1. Сама строка (то, что мы видим всегда) */}
      <TableRow
        row={row}
        isActive={selectedId === row.id}
        onClick={() => handleRowClick(row.id)}
      />

      {/* 2. Контейнер для графика (выезжает только у активной строки) */}
      <div
        className={`${s.chartWrapper} ${selectedId === row.id ? s.open : ""}`}
      >
        {selectedId === row.id && (
          <MyChart data={row.graphData} title={row.title} />
        )}
      </div>
    </React.Fragment>
  ));
}
