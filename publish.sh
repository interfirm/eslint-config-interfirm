#!/usr/bin/env bash

npm login <<EOF
interfirm
$NPM_PASSWORD
$NPM_EMAIL
EOF

[ $? == 0 ] && npm publish
