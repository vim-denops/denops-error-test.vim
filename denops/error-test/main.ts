import { Denops } from "https://deno.land/x/denops_std@v5.0.0/mod.ts";

export function main(denops: Denops) {
  denops.dispatcher = {
    error() {
      throw new Error("This is error from denops-error-test.vim");
    },
    // deno-lint-ignore require-await
    async unhandledPromise() {
      // deno-lint-ignore require-await
      (async () => {
        throw new Error("This is error from denops-error-test.vim");
      })();
    },
  };
}
