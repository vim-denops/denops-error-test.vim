if exists('g:loaded_denops_unhandled_promise')
  finish
endif
let g:loaded_denops_unhandled_promise = 1

command! InvokeUnhandledPromise call denops#request('unhandled-promise', 'test', [])
command! InvokeError call denops#request('unhandled-promise', 'test2', [])

