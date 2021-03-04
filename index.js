function Toggle_Resume(){
	var resume = document.getElementById("Resume");
	var resume_stat = resume.style.display;

	if(resume_stat == "none"){
		resume.style.display = "block";
	}
	else{
		resume.style.display = "none";
	}
}

// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}