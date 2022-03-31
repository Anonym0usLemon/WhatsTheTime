/*
CIS213 Unit 5 Guided Practice 2
Dominic DiModugno
February 23rd, 2022
*/


var now = new Date();
var day = new Array("Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat");
var month = new Array ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
var dd = now.getDate();
var dy = now.getDay();
dy = day[dy];
var mn = now.getMonth();
mn = month[mn];
yy = now.getFullYear();
var hh = now.getHours();

var ampm = "AM";
var greeting = "Good morning!";

if (hh >= 12) {
  ampm = "pm"
  greeting = "Good evening"
}
if (hh > 12) {hh = hh - 12};
if (hh == 0) {hh = 12}
if (hh < 10) {hh = hh};
var mins = now.getMinutes();
if (mins < 10) {mins = "0"+ mins}
//  var secs = now.getSeconds();
//  if (secs < 10) {secs = "0" + secs}

var dispDate = " It is " + hh + ":" + mins + " " + ampm + " " + "on " + dy + ", " + mn + " " + dd + ", " + yy //formats date to example: Saturday, February 20th, 2022: 01:30pm
document.write(greeting + dispDate);
