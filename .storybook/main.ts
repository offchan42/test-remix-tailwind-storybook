import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        // use different vite config for storybook: https://github.com/storybookjs/storybook/discussions/25519#discussioncomment-8064641
        viteConfigPath: "vite.storybook.config.ts",
      }
    },
  },
  docs: {
    autodocs: "tag",
  },
  // this is to allow storybook to import files from the app
  // read more here: https://github.com/storybookjs/storybook/issues/18891#issuecomment-1228123054
  // viteFinal: async (config, { configType }) => {
  //   return mergeConfig(config, {
  //     plugins: [tsconfigPaths()],
  //   })
  // },
};
export default config;
