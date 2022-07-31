import { useEffect, useState, memo } from "react";
import Table from "react-bootstrap/Table";
import TDPlaceholder from "./TDPlaceholder";

function MemberTable({ data: tableData, onSelectionChange, isLoading }) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    if (tableData && tableData.length) {
      setSelection(tableData[0].member);
      onSelectionChange(tableData[0].member);
    }
  }, [onSelectionChange, tableData]);

  const onRowClick = (member) => {
    setSelection(member);
    onSelectionChange(member);
  };

  return (
    <Table hover className="border">
      <thead>
        <tr>
          <th>Member</th>
          <th>Games Palyed</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <>
            <tr>
              <TDPlaceholder />
              <TDPlaceholder />
            </tr>
            <tr>
              <TDPlaceholder />
              <TDPlaceholder />
            </tr>
          </>
        )}
        {!isLoading &&
          tableData.map((memberData) => (
            <tr
              key={memberData.id}
              onClick={() => {
                onRowClick(memberData.member);
              }}
              className={`table-row ${
                memberData.member === selection ? "active-table-row" : ""
              }`}
            >
              <td>{memberData.member}</td>
              <td>{memberData.totalPlayed}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default memo(MemberTable);
