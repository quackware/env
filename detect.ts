/** Whether we are running in a CI environment as defined by the `CI` environment variable. */
export function isCi() {
  return !!Deno.env.get("CI");
}

/**
 * Detect if the `Deno` namespace is in the global scope.
 */
export const isDeno = "Deno" in globalThis;

/** Detect if we are in a Deno Deploy environment. */
export const isDenoDeploy = !!Deno.env.get("DENO_DEPLOYMENT_ID");

/**
 * Detect if `DEBUG` environment variable is set
 */
export const isDebug = !!Deno.env.get("DEBUG");

/** Detect if we are running as a subprocess of VSCode. */
export const isInVscode = !!Deno.env.get("VSCODE_GIT_IPC_HANDLE");
