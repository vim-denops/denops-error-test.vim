import { Denops } from "https://deno.land/x/denops_std@v3.0.0/mod.ts";

export function main(denops: Denops) {
  denops.dispatcher = {
    // deno-lint-ignore require-await
    async test() {
      // deno-lint-ignore require-await
      (async () => {
        throw 42;
      })();
    },
    test2() {
      throw 42;
    },
  };
}
