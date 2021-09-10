#!/bin/bash
grep -o -i "Harry" harry.txt | wc -l
sed -i 's/Harry/Sasha/g' harry.txt
