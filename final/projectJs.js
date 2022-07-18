// Matthew Rinaldi, Web115, 11/30/2020, finalProject.html

// function myWindow runs when Create Resume button is clicked
function myWindow()
{
    // if emailValidation() is false displays alert messafe notifing user of an invlaid email address else runs function
    if (emailValidation() == false)
    {
        alert("Please enter a valid email address");
        return;
    }
    else {
    // Gets Name from finalProject.html form
    visitorFirstName = document.getElementById("myInput").value;
    // Gets City from finalProject.html form
    visitorCity = document.getElementById("myCity").value;
    // Gets State from finalProject.html form
    visitorState = document.getElementById("myState").value;
    // Gets Zip from finalProject.html form
    visitorZip = document.getElementById("myZip").value;
    // Gets Phone from finalProject.html form
    visitorPhone = document.getElementById("myPhone").value;
    // Gets Email from finalProject.html form
    visitorEmail = document.getElementById("myEmail").value;
    // Gets Social Media from finalProject.html form
    visitorSocial = document.getElementById("mySocial").value;
    // Gets Portfolio link from finalProject.html form
    visitorPortfolio = document.getElementById("myPortfolio").value;
    // Gets Coding Experience from finalProject.html form
    visitorCoding = document.getElementById("myCoding").value;
    // Gets Work Experience from finalProject.html form
    visitorWork = document.getElementById("myWork").value;
    // Gets Writing Experince from finalProject.html form
    visitorWrititng= document.getElementById("myWriting").value;
    // Gets JavaScript Experience from finalProject.html form
    visitorJavascript = document.getElementById("myJavascript").value;
    // Gets PHP Experience from finalProject.html form
    visitorPHP= document.getElementById("myPHP").value;
    // Gets Education from finalProject.html form
    visitorEducation= document.getElementById("myEducation").value;
    // Gets Start from finalProject.html form
    visitorStart1= document.getElementById("myStart1").value;
    // Gets End from finalProject.html form
    visitorEnd1 = document.getElementById("myEnd1").value;
    // Gets Details from finalProject.html form
    visitorDetails1 = document.getElementById("myDetails1").value;
    // Gets Start 2 from finalProject.html form
    visitorStart2= document.getElementById("myStart2").value;
    // Gets End 2 from finalProject.html form
    visitorEnd2 = document.getElementById("myEnd2").value;
    // Gets Details 2 from finalProject.html form
    visitorDetails2 = document.getElementById("myDetails2").value;
    // Gets Start 3 from finalProject.html form
    visitorStart3= document.getElementById("myStart3").value;
    // Gets End 3 from finalProject.html form
    visitorEnd3 = document.getElementById("myEnd3").value;
    // Gets Details 3 from finalProject.html form
    visitorDetails3 = document.getElementById("myDetails3").value;
    // Gets Refrences from finalProject.html form
    vistorRefrences = document.getElementById("myRefrences").value;

    // adds Name to myText
    myText = ("<h1>"+ visitorFirstName + "</h1>");
    // adds City, State, Zip, Phone, Email, Social Media and Portfolio to sub header
    myText += ("<div>" + (visitorCity + "\n" + "l")  + "\n" +(visitorState + "\n" + "l") + "\n" +(visitorZip + "\n" + "l") + "\n" + (visitorPhone + "\n" + "l") + "\n" + visitorEmail + "<br>" + (visitorSocial + "\n" + "l") +"\n" + visitorPortfolio +"</div>");
    // Adds heading Skill Set
    myText += ("<br>" + "<h2>" + "Skill Set" + "</h2>");
    // Adds unordered list
    myText += ("<ul>");
    // Adds coding experience
    myText += ("<li>" + visitorCoding);
    // Adds Work Experience
    myText += ("<li>"+ visitorWork);
    // Adds Writing Experience
    myText += ("<li>"+  visitorWrititng);
    // Ends unordered list
    myText += ("</ul>");
    // Adds heading Technical Skills
    myText += ("<br><br>" + "<h2>" + "Technical Skills" + "</h2>");
    // Adds unordered list
    myText += ("<ul>");
    // Adds JavaSript Experience
    myText += ("<li>" + visitorJavascript);
    // Adds PHP experience
    myText += ("<li>"+ visitorPHP);
    // Ends unordered list
    myText += ("</ul>");
    // Adds heading Education
    myText += ("<br>" + "<h2>" + "Education" + "</h2>");
    // Adds unordered list
     myText += ("<ul>");
    // Adds Education
    myText += ("<li>" + visitorEducation);
    // Ends unordered list
     myText += ("</ul>");
    // Adds heading Employment
    myText += ("<br><br>" + "<h2>" + "Employment" + "</h2>");
    // Adds Job Start:
    myText += ("Job Start:" + "\n");
    // Job Start
    myText += (visitorStart1);
    // Adds unordered list
     myText += ("<ul>");
     // Details
     myText += ("<div id=theRight>" + "<li>" + visitorDetails1 + "<br><br>" + "</div>");
      // Ends unordered list
    myText += ("</ul>");
    // Job End:
    myText += ("Job End:" + "\n");
    // End
    myText += (visitorEnd1 + "<br>");
   // Adds Job Start:
   myText += ("<br>" + "Job Start:" + "\n");
   // Job Start
   myText += (visitorStart2);
  // Adds unordered list
  myText += ("<ul>");
  // Details
  myText += ("<div id=theRight>" + "<li>" + visitorDetails2 + "<br><br>" + "</div>");
   // Ends unordered list
 myText += ("</ul>");
   // Job End:
   myText += ("Job End:" + "\n");
    // End
    myText += (visitorEnd1 + "<br>");
  // Adds Job Start:
  myText += ("<br>" + "Job Start:" + "\n");
  // Job Start
  myText += (visitorStart3);
   // Adds unordered list
   myText += ("<ul>");
   // Details
   myText += ("<div id=theRight>" + "<li>" + visitorDetails3 + "<br><br>" + "</div>");
    // Ends unordered list
  myText += ("</ul>");
  // Job End:
  myText += ("Job End:" + "\n");
  // End
  myText += (visitorEnd3 + "<br>");
   
    // Adds heading Refrences
    myText += ("<br><br>" + "<h2>" + "Refrences" + "</h2>");
    // Adds refrences
    // Adds unordered list
    myText += ("<ul>");
    myText += ("<li>" + vistorRefrences); 
    // Ends unordered list
    myText += ("</ul>");

    // opens seperate HTML document
    var win = window.open('','printwindow');
    // creates HTML label
    win.document.write('<html>');
    // Creates header and links stylesheet
    win.document.write('<head><title>Resume</title></head><link rel="stylesheet" type="text/css" href="finalProject.css">');
    // creates body element
    win.document.write('<body>');
    // adds var myText to document
    win.document.write(myText);
    // adds closing body and html tags
    win.document.write('</body></html>');
    }
}

// function emailValidation validates email address using RegExp
function emailValidation(){
    // Gets input from text box
    var myText = document.getElementById("myEmail").value;
    // Regular expression 
    var myRegExp = /@./;
    // sets valid = true;
    valid = true;
    
    // If RegExp does not match myText sets valid = false
    if(!myRegExp.test(myText)) {
       valid = false;
    }
    return valid;
}