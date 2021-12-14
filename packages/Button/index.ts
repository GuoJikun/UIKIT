import { App, Plugin } from "vue";
import Button from "./src/index";

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component("yak-button", Button);
  },
};

export { Button };
