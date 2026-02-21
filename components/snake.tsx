import { assetUrl, Div, Image } from "./shared";

export function Snake() {
  return (
    <Div align="center">
      <Image
        srcLight={assetUrl("snake-light.svg", "output")}
        srcDark={assetUrl("snake-dark.svg", "output")}
        alt="GitHub contribution grid snake animation"
      />
    </Div>
  );
}
