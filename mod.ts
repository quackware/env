import { isValidEnvironment, ValidEnvironment } from "./envs.ts";

export const ENV_PREFIX = "QUACKWARE";

/**
 * Returns the valid environment variable `QUACKWARE_ENV` or throws. If `withDefault` is true then the environment
 * will default to `test` if `CI` is set as an environment variable, otherwise it will default to `dev`.
 *
 * @throws {Error}
 */
export function getQuackWareEnv(withDefault: boolean = true): ValidEnvironment {
  let env = Deno.env.get("QUACKWARE_ENV");
  if (env === undefined && withDefault) {
    const CI = Deno.env.get("CI");
    env = CI === "true" || CI === "1" ? "test" : "dev";
  }
  if (!isValidEnvironment(env)) {
    throw new Error(`Invalid QUACKWARE_ENV ${env}`);
  }
  return env;
}
