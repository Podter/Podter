import { assetUrl, Div, Image } from "./shared";

export function Header() {
  return (
    <Div align="center">
      <a href="https://podter.me" target="_blank">
        <Image
          srcLight={assetUrl("assets/podter-light.png", "main")}
          srcDark={assetUrl("assets/podter-dark.png", "main")}
          alt="podter._"
        />
      </a>
    </Div>
  );
}
