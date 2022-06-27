function validate()
{
var name=document.forms["myform"]["name"].value;
var email=document.forms["myform"]["email"].value;
var phone=document.forms["myform"]["phone"].value;
var additional=document.forms["myform"]["additional"].value;

if(name == "")

            {

alert("enter the name");

            return false;

            }

if(!isNaN(name))

            {

            alert("name should be in character");

            return false;

            }

 // email validation

var at = email.indexOf("@");

var dot = email.lastIndexOf(".");

if(at<1||dot<at+2||dot+2 >= email.length)

            {

            alert("Not a valid email");

            return false;

            }     
 //phone no. validation

if(phone == "")

{

alert("enter phone no.");

return false;}

if(isNaN(phone))

{

alert("phone no. should be in digit.");

return false;

}

if( phone.length != 10)

{

alert("must be 10 digit no.");

return false;

}

// additional info validation

if(additional == "")

            {

            alert("Enter Additional info");

            return false;

            }

        }