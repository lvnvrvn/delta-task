import {} from "react";

export default function TableRow({ rowData }) {
  const cellClass = rowData.textAlign ? "cell__center" : "";
  const percentageDifference = Number(
    ((rowData.currentDay / rowData.yesterday - 1) * 100).toFixed(0),
  );
  let cellYesterdayBgColor =
    percentageDifference > 0
      ? "bg__green"
      : percentageDifference < 0
        ? "bg__red"
        : "";
  let cellDayLastWeekBgColor;

  if (rowData.textAlign) {
    cellDayLastWeekBgColor = "";
  } else {
    cellDayLastWeekBgColor =
      rowData.currentDay > rowData.thisDayLastWeek
        ? "bg__green"
        : rowData.currentDay < rowData.thisDayLastWeek
          ? "bg__red"
          : "";
  }

  return (
    <div className="table__row">
      <div className={`table__indicator table__cell ${cellClass}`}>
        {rowData.title}
      </div>
      <div className={`table__today table__cell ${cellClass}`}>
        {rowData.currentDay}
      </div>
      <div
        className={`table__yesterday table__cell ${cellClass} ${cellYesterdayBgColor}`}
      >
        {rowData.yesterday}
        {rowData.textAlign ? (
          ""
        ) : (
          <span
            className={`percentage__difference${percentageDifference >= 0 ? " text__green" : " text__red"}`}
          >{`${percentageDifference}%`}</span>
        )}
      </div>
      <div
        className={`table__weekday table__cell ${cellClass} ${cellDayLastWeekBgColor}`}
      >
        {rowData.thisDayLastWeek}
      </div>
    </div>
  );
}
