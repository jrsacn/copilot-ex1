#! /bin/bash
alias ls='ls -AF'
alias ll='ls -lAF'
alias md='mkdir'
alias rd='rmdir'
alias vi='vi -c ":set nu"'

alias g='git'

alias gadd='git add'

alias gbra='git branch'
alias gbrac='git branch --column'

alias gcom='git commit'
alias gcomm='git commit -m'

alias gdif='git diff -w --abbrev'
alias gdiff='git diff -w --abbrev --stat'
alias gdifs='git diff -w --abbrev --staged'
alias gdiffs='git diff -w --abbrev --staged --stat'

alias glog='git log --abbrev-commit --pretty=oneline'

alias gres='git restore'

alias gsta='git status -bs --no-renames'

