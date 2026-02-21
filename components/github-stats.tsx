import { assetUrl, Div, Image, THEME } from "./shared";

const GITHUB_USERNAME = "Podter";

function setTheme(searchParams: URLSearchParams, theme: "light" | "dark") {
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set("bg_color", THEME[theme].background.slice(1));
  newSearchParams.set("text_color", THEME[theme].content.slice(1));
  newSearchParams.set("icon_color", THEME[theme].content.slice(1));
  newSearchParams.set("title_color", THEME[theme].text.slice(1));
  newSearchParams.set("ring_color", THEME[theme].text.slice(1));
  newSearchParams.set("hide_border", "true");
  newSearchParams.set("border_radius", "0");
  return newSearchParams;
}

function setStatsOptions(searchParams: URLSearchParams) {
  searchParams.set("username", GITHUB_USERNAME);
  searchParams.set("show_icons", "true");
  searchParams.set("count_private", "true");
}

function setLanguagesOptions(searchParams: URLSearchParams) {
  searchParams.set("username", GITHUB_USERNAME);
  searchParams.set("layout", "compact");
  searchParams.set("langs_count", "8");
  searchParams.set("card_width", "320");
}

const statsBase = new URLSearchParams();
setStatsOptions(statsBase);

const languagesBase = new URLSearchParams();
setLanguagesOptions(languagesBase);

const statsLight = setTheme(statsBase, "light");
const statsDark = setTheme(statsBase, "dark");
const languagesLight = setTheme(languagesBase, "light");
const languagesDark = setTheme(languagesBase, "dark");

console.log(statsLight.toString());
console.log(statsDark.toString());
console.log(languagesLight.toString());
console.log(languagesDark.toString());

export function GitHubStats() {
  return (
    <Div align="center">
      <Image
        srcLight={assetUrl("stats-light.svg", "output")}
        srcDark={assetUrl("stats-dark.svg", "output")}
        alt="GitHub stats"
        height="200px"
        align="center"
      />
      <Image
        srcLight={assetUrl("top-langs-light.svg", "output")}
        srcDark={assetUrl("top-langs-dark.svg", "output")}
        alt="Top languages"
        height="200px"
        align="center"
      />
    </Div>
  );
}
