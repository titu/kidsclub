import { Chart } from "react-google-charts";

export default function MemberChart({ data }) {
  return (
    <Chart
      chartType="PieChart"
      data={[["member", "played"], ...data]}
      width="100%"
      height="300px"
      legendToggle
    />
  );
}
