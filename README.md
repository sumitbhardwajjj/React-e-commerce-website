<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="2.css">
</head>
<body>
    <div class="container">
        <div class="cal">
    <form class="calculator">
        <div class="display">
            <input type="text" name="display">
        </div>
    <div>
        <input type="button" value="AC" onclick="display.value = '' " class="OP">
        <input type="button" value="DEL"onclick="display.value = display.value.toString().slice(0,-1)" class="OP">
        <input type="button" value="%" onclick="display.value += '%'" class="OP">
        <input type="button" value="/" onclick="display.value += '/'" class="OP">
    </div>
    <div>
        <input type="button" value="7" onclick="display.value += '7'">
        <input type="button" value="8" onclick="display.value += '8'">
        <input type="button" value="9" onclick="display.value += '9'">
        <input type="button" value="*" onclick="display.value += '*'">
    </div>
    <div>
        <input type="button" value="4" onclick="display.value += '4'">
        <input type="button" value="5" onclick="display.value += '5'">
        <input type="button" value="6" onclick="display.value += '6'">
        <input type="button" value="-" onclick="display.value += '-'">
    </div>
    <div>
        <input type="button" value="1" onclick="display.value += '1'">
        <input type="button" value="2" onclick="display.value += '2'">
        <input type="button" value="3" onclick="display.value += '3'">
        <input type="button" value="+" onclick="display.value += '+'">
    </div>
    <div>
        <input type="button" value="0" onclick="display.value += '0'">
        <input type="button" value="." onclick="display.value += '.'">
        <input type="button" value="=" class="equal" onclick="display.value=eval(display.value)">
    </div>
    </form>
    </div>
    </div>
</body>
</html>
