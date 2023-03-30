import { getQuackWareEnv } from "../get.ts";
import { assertEquals } from "./deps.ts";

Deno.test("get", async (t) => {
  await t.step("getQuackWareEnv uses default values", () => {
    Deno.env.set("CI", "false");
    assertEquals(getQuackWareEnv(), "dev");
    Deno.env.set("CI", "true");
    assertEquals(getQuackWareEnv(), "test");
  });

  await t.step("getQuackWareEnv reads from env variable", () => {
    Deno.env.set("QUACKWARE_ENV", "prod");
    assertEquals(getQuackWareEnv(), "prod");
  });
});
