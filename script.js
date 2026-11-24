function getFormvalue() {
	let form=document.form["form1"];
	let firstname=form["fname"].value;
	let lastname=form["lname"].value;

	firstname=firstname.trim();
	lastname=lastname.trim();

	let fullname=firstname+" "+lastname;
	alert(fullname);
	
    //Write your code here

}
