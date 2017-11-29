let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Workspace/react.dev/CryptoTracker
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +0 README.md
badd +14 App.js
badd +1 .watchmanconfig
badd +10 .gitignore
badd +67 .flowconfig
badd +8 .babelrc
badd +0 .expo/settings.json
badd +5 .expo/packager-info.json
badd +16 package.json
badd +0 src/components/Header.js
badd +0 src/components/index.js
argglobal
silent! argdel *
edit README.md
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
9,13fold
16,16fold
23,24fold
20,24fold
26,28fold
let s:l = 125 - ((1 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
125
normal! 025|
lcd ~/Workspace/react.dev/CryptoTracker
tabedit ~/Workspace/react.dev/CryptoTracker/App.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 013|
lcd ~/Workspace/react.dev/CryptoTracker
tabedit ~/Workspace/react.dev/CryptoTracker/src/components/Header.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winminwidth=1 winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 97 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 15 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 023|
lcd ~/Workspace/react.dev/CryptoTracker/src/components
wincmd w
argglobal
if bufexists('~/Workspace/react.dev/CryptoTracker/src/components/index.js') | buffer ~/Workspace/react.dev/CryptoTracker/src/components/index.js | else | edit ~/Workspace/react.dev/CryptoTracker/src/components/index.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 018|
lcd ~/Workspace/react.dev/CryptoTracker/src/components
wincmd w
exe 'vert 1resize ' . ((&columns * 97 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 106 + 102) / 204)
tabnext 2
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=10 winminheight=1 winminwidth=10 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
