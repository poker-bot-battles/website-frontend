import { Theme, Themes } from "blockly";

export default (element: HTMLElement): Theme => {
  const style = window.getComputedStyle(element);

  return Theme.defineTheme("default", {
    name: "default",
    base: Themes.Classic,
    componentStyles: {
      workspaceBackgroundColour: style.getPropertyValue("--color-base-100"),
      toolboxBackgroundColour: style.getPropertyValue("--color-base-200"),
      toolboxForegroundColour: style.getPropertyValue("--color-base-content"),
      flyoutBackgroundColour: style.getPropertyValue("--color-base-200"),
      flyoutForegroundColour: style.getPropertyValue("--color-base-content"),
      scrollbarOpacity: Number.MIN_VALUE,
    },
  });
};
