#!/bin/bash

# generate bookmarklet from source JavaScript

usage() {
	local -r BASENAME="$(basename "$0")"
	cat <<-EOF
		Usage:
		  ${BASENAME} [FILE]
		    Takes a FILE named *.js and produces a bookmarklet named ./min/*.bk.js
	EOF
}

if [[ -z "$1" || "$1" == '-h' || "$1" == '--help' ]]; then
	usage
	exit
fi

readonly minified_js="$(npx terser --ecma 2015 --compress expression=true,negate_iife=false --mangle --format wrap_iife=true -- $1)"
readonly output_dir='./min'
# ${1%.js} strips the suffix .js from $1
# functionally the same as $(basename --suffix='.js' $1)
# but without invoking a subshell
readonly output_file="${output_dir}/${1%.js}.bk.js"

# print to file and stdout
printf '%s%s\n' 'javascript:' "${minified_js}" | tee "${output_file}"
