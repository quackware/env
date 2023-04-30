import { isValidEnvironment } from "../envs.ts";
import { assertEquals } from "./deps.ts";

Deno.test("envs", async (t) => {
  await t.step("isValidEnvironment", () => {
    assertEquals(isValidEnvironment("foo"), false);
    assertEquals(isValidEnvironment("test"), true);
  });

  await t.step("VARIABLE_ENVIRONMENT_PREFIX", () => {
    assertEquals(isValidEnvironment("pa"), false);
    assertEquals(isValidEnvironment("pr"), true);
    assertEquals(isValidEnvironment("pr-123"), true);
  });
});
