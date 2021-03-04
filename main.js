var studentNames = [];
function submit() {
    var displayArray = [];
    for(i=1;i<=4;i++)
    {
        var elementName = document.getElementById("name_of_the_student_"+i).value;
        console.log(elementName);
        studentNames.push(elementName);
    }
    console.log(studentNames);
    var LenghtVar = studentNames.length;
    for(i=0;i<LenghtVar;i++){
        displayArray.push("<h4> Name - "+studentNames[i]+"</h4>");
        console.log(displayArray);
    }
    document.getElementById("display_name_with_commas").innerHTML=displayArray;
    var remove_commas = displayArray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    var LenghtVar = studentNames.length;
    var displayArray = [];
    studentNames.sort();
    for(i=0;i<LenghtVar;i++){
        displayArray.push("<h4> Name - "+studentNames[i]+"</h4>");
        console.log(displayArray);
    }  
    var remove_commas = displayArray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;}