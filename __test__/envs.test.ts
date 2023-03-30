import { isValidEnvironment } from "../envs.ts";
import { assertEquals } from "./deps.ts";

Deno.test("envs", async (t) => {
  await t.step("isValidEnvironment", () => {
    assertEquals(isValidEnvironment("foo"), false);
    assertEquals(isValidEnvironment("test"), true);
  });
});
