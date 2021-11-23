function checkResults(){
	var numSubjects;
	var subjectMark;
	var sumMarks=0;
	var average;
	var grade;
	numSubjects=parseFloat(prompt("Enter number of subjects"));
	if(numSubjects>0){
		for(i=1;i<=numSubjects;i++){
			subjectMark=parseFloat(prompt("Enter "+i+" subject result"));
			sumMarks+=subjectMark;
		}
		average=sumMarks/numSubjects;
		if(average<40){
			grade="F";
		}
		else if(average>=40 && average<50){
			grade="E";
		}
		else if(average>=50 && average<60){
			grade="D";
		}
		else if(average>=60 && average<70){
			grade="C";
		}
		else if(average>=70 && average<80){
			grade="B";
		}
		else if(average>=80){
			grade="A";
		}
		document.getElementById("placeholder").innerHTML="Your result is "+average.toFixed(2)+"%, your grade is "+grade;
		document.getElementById("btn").innerHTML="Try again";
	}
}