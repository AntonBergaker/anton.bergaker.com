echo "Removing old files"
Remove-Item -path out -Recurse
New-Item -Name "out" -ItemType "directory"

echo "Copying files"
Copy-Item -Path anton.bergaker.com\* -Destination out -Recurse -Force

echo "Compiling pug"
pug out
ls out\*.pug -Recurse | foreach {rm $_}

echo "Copying external files"
Copy-Item -Path externally_made_stuff\* -Destination out -Recurse -Force

echo "Crushing png images"
Get-ChildItem -path "out/*" -recurse -Include *.png | foreach ($_) {
	echo $_.fullname 
	pngquant --ext=.png --force --skip-if-larger $_.fullname
}
