import type { TailwindColor } from "../types";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet",
    },
  },
};

export default theme;
