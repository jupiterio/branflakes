var bf = function branflakes(code,maxloops,input){
	var pointer=0,
		memory=[0],
		result="",
		start=[],
		end=[],
		counter=0,
		maxloops=maxloops||100;
	for(var i=0;i<code.length;i++){
		var cmd=code[i];
		switch(cmd){
			case ">":
				pointer++;
				break;
			case "<":
				pointer--;
				break;
			case "+":
				memory[pointer]=memory[pointer]==void(0)?1:memory[pointer]+1;
				break;
			case "-":
				memory[pointer]=memory[pointer]==void(0)?-1:memory[pointer]-1;
				break;
			case ".":
				result+=String.fromCharCode(memory[pointer]||0);
				break;
			case ",":
				(input||function input(){throw "Not implemented"})(memory,pointer);
				break;
			case "[":
				var found = [1];
				for(var k=i+1;k<code.length;k++){
					if(code[k]=="[")found[0]++;
					if(code[k]=="]")found[0]--;
					if(found[0]==0){found[1]=k;break;}
				}
				if(found[0]>0)throw "Missing "+found[0]+" ]s";
				if(memory[pointer]==0)i=found[1];
				break;
			case "]":
				var found = [1];
				for(var k=i-1;k>-1;k--){
					if(code[k]=="]")found[0]++;
					if(code[k]=="[")found[0]--;
					if(found[0]==0){found[1]=k;break;}
				}
				if(found[0]>0)throw "Missing "+found[0]+" [s";
				if(counter>maxloops)throw "Exceeded max loop repetition";
				if(memory[pointer]!=0){i=found[1];counter++;break;}
				counter=0;
				break;
		}
	}
	return result;
}