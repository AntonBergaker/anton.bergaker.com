Remove-Item -path out -Recurse
Copy-Item .\anton.bergaker.com out -Recurse -Exclude .vscode/*
pug out
ls out\*.pug -Recurse | foreach {rm $_}