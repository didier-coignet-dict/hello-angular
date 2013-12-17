# publish dist to gh-pages
# http://yeoman.io/deployment.html
git add dist && git commit -m "Auto publish on gh-pages"
git subtree push --prefix dist origin gh-pages

#TODO https://github.com/X1011/git-directory-deploy