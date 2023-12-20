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
    primary: "paolana-light",
    blur: {
      top: "paolana-light",
      bottom: "paolana-dark",
    },
  },
};

export default theme;
