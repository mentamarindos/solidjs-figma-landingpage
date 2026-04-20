// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

console.log("Mounting StartClient...");
mount(() => <StartClient />, document.getElementById("app")!);
