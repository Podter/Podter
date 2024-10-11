import { Div, Image } from "./shared";

export function Header() {
  return (
    <Div align="center">
      <a href="https://podter.me" target="_blank">
        <Image
          srcLight="https://raw.githubusercontent.com/Podter/Podter/main/assets/podter-light.png"
          srcDark="https://raw.githubusercontent.com/Podter/Podter/main/assets/podter-dark.png"
          alt="podter._"
        />
      </a>
    </Div>
  );
}
