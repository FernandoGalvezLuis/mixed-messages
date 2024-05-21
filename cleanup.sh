#!/bin/bash

# Switch to the main branch
git checkout main

# Fetch the latest changes from the remote repository
git fetch

# Get a list of local branches except for the main branch
branches=$(git branch | grep -v "main")

# Iterate over each branch and delete it
for branch in $branches; do
    git branch -D $branch
    echo "Deleted local branch: $branch"
done
