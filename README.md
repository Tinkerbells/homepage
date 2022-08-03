## To change icons colors 
```
cd ./icons && for i in *; do convert $i -fuzz 99% -fill "#new_color" -opaque "#old_color" $i;done
```
