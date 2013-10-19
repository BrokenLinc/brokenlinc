cd host
git add .
git add -u .
set /p message="Commit message: " %=%
git commit -m "%message%"
git push heroku master
