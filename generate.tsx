import render from "preact-render-to-string";
import { Header } from "./components/header";
import { Socials } from "./components/socials";
import { GitHubStats } from "./components/github-stats";
import { Snake } from "./components/snake";
import { WakaTime } from "./components/wakatime";

const markdown = `${render(<Header />)}

${render(<Socials />)}

#

${render(<GitHubStats />)}

${render(<Snake />)}

${render(<WakaTime />)}
`;

Bun.write("README.md", markdown);
