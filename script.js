/* script.js - external JavaScript file for group project
   Andrew Nielsen - Nielsena5@csp.edu, Amin Ali  alia20@csp.edu, Awil Nur
   Written: 12-9-16
   Revisions: 12-12-16
   
*/

function showResult()
{
// Set up variables
var finame = "";
var laname = "";
var birthYear = "";
var placeholder;

/**** Collect the data using the DOM *****/
finame = document.getElementById("txtFiname").value;
laname = document.getElementById("txtLaname").value;
birthYear = document.getElementById("txtYear").value;

/**** Calculate age *****/
// Convert input to int
birthYear = parseInt(birthYear);
/**** Display the results *****/
// Find the placeholder on the page
placeholder = document.getElementById("message");
// Fill the placeholder with updated String information
placeholder.innerHTML = "Hello " + finame + " " + laname + ". You are entered for a chance to win a free round of golf";
} // end of showResult( )
