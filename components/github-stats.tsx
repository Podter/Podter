import { Div, Image, THEME } from "./shared";

const API_BASE = "https://github-readme-stats.vercel.app";
const GITHUB_USERNAME = "Podter";

function setTheme(url: URL, theme: "light" | "dark") {
  url.searchParams.set("bg_color", THEME[theme].background.slice(1));
  url.searchParams.set("text_color", THEME[theme].content.slice(1));
  url.searchParams.set("icon_color", THEME[theme].content.slice(1));
  url.searchParams.set("title_color", THEME[theme].text.slice(1));
  url.searchParams.set("ring_color", THEME[theme].text.slice(1));
  url.searchParams.set("hide_border", "true");
  url.searchParams.set("border_radius", "0");
}

function setStatsOptions(url: URL) {
  url.searchParams.set("username", GITHUB_USERNAME);
  url.searchParams.set("show_icons", "true");
  url.searchParams.set("count_private", "true");
}

function setLanguagesOptions(url: URL) {
  url.searchParams.set("username", GITHUB_USERNAME);
  url.searchParams.set("layout", "compact");
  url.searchParams.set("langs_count", "8");
  url.searchParams.set("card_width", "320");
}

export function GitHubStats() {
  const statsBase = new URL("/api", API_BASE);
  const languagesBase = new URL("/api/top-langs", API_BASE);

  const statsLight = new URL(statsBase);
  setTheme(statsLight, "light");
  setStatsOptions(statsLight);

  const statsDark = new URL(statsBase);
  setTheme(statsDark, "dark");
  setStatsOptions(statsDark);

  const languagesLight = new URL(languagesBase);
  setTheme(languagesLight, "light");
  setLanguagesOptions(languagesLight);

  const languagesDark = new URL(languagesBase);
  setTheme(languagesDark, "dark");
  setLanguagesOptions(languagesDark);

  return (
    <Div align="center">
      <Image
        srcLight={statsLight.toString()}
        srcDark={statsDark.toString()}
        alt="GitHub stats"
        height="200px"
        align="center"
      />
      <Image
        srcLight={languagesLight.toString()}
        srcDark={languagesDark.toString()}
        alt="Top languages"
        height="200px"
        align="center"
      />
    </Div>
  );
}
