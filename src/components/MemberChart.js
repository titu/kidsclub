import { Chart } from "react-google-charts";
import { Placeholder } from "react-bootstrap";

export default function MemberChart({ data, isLoading = false }) {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center text-center">
      {isLoading && (
        <Placeholder as="div" animation="glow" className="w-100">
          <Placeholder className="w-50" />
        </Placeholder>
      )}
      {data && (
        <Chart
          chartType="PieChart"
          data={[["member", "played"], ...data]}
          width="100%"
          height="300px"
          legendToggle
        />
      )}
    </div>
  );
}
