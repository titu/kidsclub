/**
 * This component is rendered as a td element to show Placeholder loader in a table row
 */
import { Placeholder } from "react-bootstrap";

export default function TDPlaceholder() {
  return (
    <Placeholder as="td" animation="glow">
      <Placeholder className="w-75" />
    </Placeholder>
  );
}
