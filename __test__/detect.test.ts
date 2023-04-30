import { isCi, isDebug, isDeno, isInVscode } from "../detect.ts";
import { assertEquals } from "./deps.ts";

Deno.test("detect", async (t) => {
  await t.step("isDeno", () => {
    assertEquals(isDeno, true);
  });

  await t.step("isDebug", () => {
    assertEquals(isDebug, false);
  });

  await t.step("isInVscode", () => {
    if (isCi()) {
      assertEquals(isInVscode, false);
    } else {
      assertEquals(isInVscode, true);
    }
  });
});
