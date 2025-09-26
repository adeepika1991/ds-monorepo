import { ColorBg } from "@repo/tokens";

export default function Home() {
  return (
    <div style={{ color: ColorBg || "#000" }}>
      <h1>Monorepo test</h1>
      <p>Testing package imports</p>
    </div>
  );
}
