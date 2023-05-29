import { Denops } from "https://deno.land/x/denops_std@v5.0.0/mod.ts";

export function main(denops: Denops) {
  denops.dispatcher = {
    error() {
      throw new Error("This is error from denops-error-test.vim");
    },
    nested() {
      nestLevel1();
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

function nestLevel1(): void {
  nestLevel2();
}

function nestLevel2(): void {
  nestLevel3();
}

function nestLevel3(): void {
  throw new Error("This is error from denops-error-test.vim");
}
