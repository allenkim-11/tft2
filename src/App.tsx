import { Icon } from "./components/icon";

export default function App() {
  return (
    <div style={{ padding: 24, display: "flex", gap: 16 }}>
      <Icon name="search" />
      <Icon name="link" />
      <Icon name="save" />
      <Icon name="kda" />
      <Icon name="champion" />
      <Icon name="opggsquare" />
    </div>
  );
}