#!/bin/sh
ENTRYPOINT=$1

if [ "$ENTRYPOINT" = "background" ]  || [ "$ENTRYPOINT" = "content" ]; then
    TYPE="ts"
else
    TYPE="html"
fi

$(yarn bin)/parcel build --public-url /dist/$ENTRYPOINT/ --out-dir extension/dist/$ENTRYPOINT src/$ENTRYPOINT/$ENTRYPOINT.$TYPE
