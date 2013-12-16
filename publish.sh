# publish dist to gh-pages
# http://yeoman.io/deployment.html
git add dist && git commit -m "Auto publish on gh-pages"
git subtree push --prefix dist origin gh-pages

#cd C:\wamp\www\hello-angular
#git add *
#git commit -a -m "auto publish in gh-pages commit + push"
#git push origin gh-pages