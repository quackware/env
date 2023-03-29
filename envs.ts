export const VALID_ENVIRONMENTS = ["local", "dev", "stage", "prod", "test"] as const;

export type ValidEnvironment = typeof VALID_ENVIRONMENTS[number];

export function isValidEnvironment(env?: string): env is ValidEnvironment {
  return env != null && VALID_ENVIRONMENTS.includes(env as ValidEnvironment);
}
