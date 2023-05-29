if exists('g:loaded_denops_error_test')
  finish
endif
let g:loaded_denops_error_test = 1

command! InvokeError call denops#request('error-test', 'error', [])
command! InvokeUnhandledPromise call denops#request('error-test', 'unhandledPromise', [])

