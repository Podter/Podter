import type { ComponentProps } from "preact";

export const THEME = {
  light: {
    background: "#f5f5f5",
    text: "#0a0a0a",
    content: "#404040",
  },
  dark: {
    background: "#171717",
    text: "#fafafa",
    content: "#d4d4d4",
  },
};

export function Div(props: ComponentProps<"div"> & { align?: string }) {
  return <div {...props} />;
}

interface ImageProps {
  srcLight: string;
  srcDark: string;
  alt: string;
  height?: string;
  align?: string;
}

export function Image({ srcLight, srcDark, ...props }: ImageProps) {
  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset={srcDark} />
      <source media="(prefers-color-scheme: light)" srcset={srcLight} />
      <img {...props} src={srcLight} />
    </picture>
  );
}
