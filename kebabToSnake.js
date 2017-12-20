//Changes kebab string "Hello-World-Blah-Blah-Blah" to snake string "Hello_World_Blah_Blah_Blah"


function kebabToSnake(words){
	var returnStr = words.replace(/-/g, "_");
	return returnStr;
}
