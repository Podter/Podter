import { Div, Image } from "./shared";

export function Header() {
  return (
    <Div align="center">
      <a href="https://podter.me" target="_blank">
        <Image
          srcLight="https://raw.githubusercontent.com/Podter/podter.me/main/public/og.png"
          srcDark="https://raw.githubusercontent.com/Podter/podter.me/main/public/og.png"
          alt="podter._"
        />
      </a>
    </Div>
  );
}
