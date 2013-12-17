#!/bin/bash
# Script pour deployer gh_pages


# Sauvegarde du travail non commité
git stash save -u

git pull --progress origin

git checkout gh-pages
git merge --strategy=subtree master

git push origin

git checkout master

git stash pop