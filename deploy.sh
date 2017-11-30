#!/bin/bash

echo ecs.surge.sh > CNAME
mv CNAME build/CNAME
cd build
surge