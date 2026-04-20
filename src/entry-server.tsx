// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { ssr } from "solid-js/web";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => {
      const html = ssr`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="icon" href="/favicon.ico"/>${assets}</head><body><div id="app">${children}</div>${scripts}</body></html>`;
      return html;
    }}
  />
));
