// server

import { toString } from "../base";

export function isNode() {
  // eslint-disable-next-line node/prefer-global/process
  return (
    typeof process !== "undefined" && toString(process) === "[object process]"
  );
}

export function isBun() {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  return typeof Bun !== "undefined";
}

export function isElectron() {
  return (
    typeof navigator !== "undefined" && navigator.userAgent.includes("Electron")
  );
}
