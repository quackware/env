export const VALID_ENVIRONMENTS = ["local", "dev", "stage", "prod", "test"] as const;
export const VARIABLE_ENVIRONMENT_PREFIX = "pr";

export type ValidEnvironment = typeof VALID_ENVIRONMENTS[number] | `pr${string}`;

export function isValidEnvironment(env?: string): env is ValidEnvironment {
  if (env == null) {
    return false;
  }
  if (env.startsWith(VARIABLE_ENVIRONMENT_PREFIX)) {
    return true;
  } else {
    // deno-lint-ignore no-explicit-any
    return VALID_ENVIRONMENTS.includes(env as any);
  }
}
