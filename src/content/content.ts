import { browser } from "webextension-polyfill-ts";

console.log("it is a me");
browser.runtime.onMessage.addListener(async request => {
  console.log("Message from somewhere");
  if (request.method === "hasPasswordField") {
    return Boolean(document.querySelector("input[type=password]"));
  }
  if (request.method === "fillPasswordField") {
    const passwordField = <HTMLInputElement>(
      document.querySelector("input[type=password]")
    );

    if (!passwordField) {
      return;
    }
    passwordField.value = request.password;
  }
});
