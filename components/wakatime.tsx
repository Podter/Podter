import { Div } from "./shared";

export function WakaTime() {
  return (
    <Div
      align="left"
      dangerouslySetInnerHTML={{
        __html: "\n<!--START_SECTION:waka-->\n<!--END_SECTION:waka-->\n",
      }}
    />
  );
}
