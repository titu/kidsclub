import { Placeholder } from "react-bootstrap";

export default function Header({ selectedMember, isLoading }) {
  return (
    <div>
      <h2>Data Analysis for Kids Club</h2>

      {
        <span>
          Games played by{" "}
          {isLoading && (
            <Placeholder as="span" animation="glow">
              <Placeholder className="w-25" />
            </Placeholder>
          )}
          {selectedMember}
        </span>
      }
    </div>
  );
}
