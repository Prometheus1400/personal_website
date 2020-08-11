function Toggle_Resume(){
	var resume = document.getElementById("Resume");
	var resume_stat = resume.style.display;
	console.log(resume_stat);

	if(resume_stat == "none"){
		resume.style.display = "block";
		console.log('t');
	}
	else{
		resume.style.display = "none";
	}
}

function download(file, text) { 
              
	//creating an invisible element 
	var element = document.createElement('a'); 
	element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text)); 
	element.setAttribute('download', file); 

	// Above code is equivalent to 
	// <a href="path of file" download="file name"> 

	document.body.appendChild(element); 

	//onClick property 
	element.click(); 

	document.body.removeChild(element); 
	} 

	// Start file download. 
	document.getElementById("btn") 
	.addEventListener("click", function() { 
	// Generate download of hello.txt  
	// file with some content 
	var text = document.getElementById("text").value; 
	var filename = "GFG.txt"; 

	download(filename, text); 
	}, false);