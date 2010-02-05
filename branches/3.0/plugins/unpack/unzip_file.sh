#!/bin/sh
#
# $1 - unzip
# $2 - archive
# $3 - output directory with tail slash
# $4 - log file name
# $5 - status file name

"$1" -o "$2" -d "$3" >> "$4" 2>> "$4"
echo $? > "$5"
chmod a+r "$4"
chmod a+r "$5"

