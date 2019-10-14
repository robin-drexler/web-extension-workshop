import React, { useState, useEffect } from "react";
import { browser } from "webextension-polyfill-ts";

import "@shopify/polaris/styles.css";
import {
  AppProvider,
  Button,
  Card,
  RangeSlider,
  TextField,
  FormLayout,
  ButtonGroup
} from "@shopify/polaris";

import { generatePassword } from "./generatePassword";

/**
 * - Enable the `fill on page` button when the current tab's page contains a password field
 *   - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
 * - When the `fill on page` button is clicked, set the first password field's value to the password
 * - Implement the `Copy to clipboard` so that it copies the current password to the clipboard
 *   Try not to use `document.execCommand`, but the newer promise based clipboard apis
 * - ensure the popup closes itself whenever any button is pressed
 */
export default () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState(generatePassword(passwordLength));

  return (
    <AppProvider i18n={null}>
      <Card sectioned title="Password generator">
        <FormLayout>
          <RangeSlider
            label="Password length"
            value={passwordLength}
            onChange={value => {
              setPasswordLength(Number(value));
              setPassword(generatePassword(Number(value)));
            }}
            output
            min={1}
            max={100}
          />
          <TextField
            label="Password"
            onChange={() => {}}
            value={password}
          ></TextField>
          <ButtonGroup>
            <Button disabled>Fill on page</Button>
            <Button primary>Copy to clipboard</Button>
          </ButtonGroup>
        </FormLayout>
      </Card>
    </AppProvider>
  );
};
