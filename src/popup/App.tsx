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
import { sendMessageToActiveTab } from "./sendMessageToActiveTab";

export default () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [hasPagePasswordField, setHasPagePasswordField] = useState(false);
  const [password, setPassword] = useState(generatePassword(passwordLength));

  useEffect(() => {
    async function checkHasPagePasswordField() {
      const [tab] = await browser.tabs.query({
        currentWindow: true,
        active: true
      });

      const hasPasswordField = await sendMessageToActiveTab({
        method: "hasPasswordField"
      });

      setHasPagePasswordField(hasPasswordField);
    }

    checkHasPagePasswordField();
  });

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
            <Button
              disabled={!hasPagePasswordField}
              onClick={async () => {
                await sendMessageToActiveTab({
                  method: "fillPasswordField",
                  password
                });
                window.close();
              }}
            >
              Fill on page
            </Button>
            <Button
              primary
              onClick={() => {
                navigator.clipboard.writeText(password);
                window.close();
              }}
            >
              Copy to clipboard
            </Button>
          </ButtonGroup>
        </FormLayout>
      </Card>
    </AppProvider>
  );
};
