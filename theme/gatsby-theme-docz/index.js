import React from "react";
import { theme, useConfig, ComponentsProvider } from "docz";
import { ThemeProvider } from "theme-ui";
import baseComponents from "gatsby-theme-docz/src/components";

const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config}>
      <ComponentsProvider components={baseComponents}>
        {children}
      </ComponentsProvider>
    </ThemeProvider>
  );
};

const themeConfig = {
  colors: {
    primary: "tomato",
    secondary: "khaki",
    gray: "lightslategray"
  }
};

export default theme(themeConfig)(Theme);
