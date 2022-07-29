import { useEffect, useState, memo } from "react";
import Table from "react-bootstrap/Table";

function MemberTable({ data: tableData, onSelectionChange }) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    if (tableData && tableData.length) {
      console.log('rendered again')
      setSelection(tableData[0].member);
      onSelectionChange(tableData[0].member);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSelectionChange]);

  const onRowClick = (member) => {
    setSelection(member);
    onSelectionChange(member);
  };

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Member</th>
          <th>Games Palyed</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((memberData) => (
          <tr
            key={memberData.member}
            onClick={() => {
              onRowClick(memberData.member);
            }}
            className={
              memberData.member === selection ? "active-table-row" : ""
            }
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
