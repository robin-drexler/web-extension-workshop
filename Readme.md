# web extension workshop

## Setup

[Install Firefox](https://www.mozilla.org/en-CA/firefox/new/)

Clone this repository

```shell
git clone git@github.com:robin-drexler/web-extension-workshop.git
cd web-extension-workshop
```

Install dependencies

```shell
yarn
```

Run watch scripts in one terminal instance (or tab)

```shell
yarn watch
```

Wait for the initial build to finish.
In a second terminal instance (or tab), run firefox

```shell
yarn dev:firefox
```

A Firefox instance should open and you should see a `Google Chrome` icon the toolbar (don't judge me.).
Click on the icon. If a popup opens with a form, you are good to go! :)
If not, please contact me.

(The `Fill on page` and `Copy to clipboard` buttons are not supposed to work yet).
