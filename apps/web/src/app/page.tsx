import { acmeLight, acmeDark } from "@repo/tokens/themes";

export default function Home() {
  console.log("acmeLight tokens:", acmeDark);

  return (
    <div>
      <h1>Monorepo test</h1>
      <p>Testing package imports</p>
      <div
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: acmeDark.ColorBackground as string,
          color: acmeDark.ColorText as string,
          border: `2px solid ${acmeDark.ColorPrimary}`,
        }}
      >
        <h2>Theme: acmeDark</h2>
        <p>Primary Color: {acmeDark.ColorPrimary}</p>
        <p>Secondary Color: {acmeDark.ColorSecondary}</p>
        <p>Background: {acmeDark.ColorBackground}</p>
        <p>Text: {acmeDark.ColorText}</p>
      </div>
    </div>
  );
}
