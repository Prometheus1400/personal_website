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