## Branflakes interpreter
Usage:
```javascript
bf(code[,max loop repetition[, custom input function]]);
```
To define a custom input function
```javascript
function(memory,pointer){
	// ...
	return "Only the first char of the returned string will be taken.";
}
```

If the input function is missing it will throw a not implemented error