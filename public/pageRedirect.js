 // Access the parent window's clickCount variable
 
 function optionFixing(id,value)
 {
    var optionFixSubject = document.getElementById(id);
    optionFixSubject.value = value
 }
 let flag = window.opener.flag;
        
 // Set background color and heading based on the counter value
 if (flag === 1) {
  // document.body.style.backgroundColor = 'red';
   document.getElementById('tutionSubject').innerText = 'Your Maths Tutor is on the way...';
   optionFixing('optionFixSubject','1');
  
 }
 else if(flag == 2)
 {
    document.getElementById('tutionSubject').innerText = 'Your English Tutor is on the way...';
    optionFixing('optionFixSubject','2');
 }
 else if(flag == 3)
 {
    document.getElementById('tutionSubject').innerText = 'Your Computer Tutor is on the way...';
    optionFixing('optionFixSubject','3');
 }
 else if(flag == 4)
 {
    document.getElementById('tutionSubject').innerText = 'Your Physics Tutor is on the way...';
    optionFixing('optionFixSubject','4');
 }
 else if(flag == 5)
 {
    document.getElementById('tutionSubject').innerText = 'Your Commerce Tutor is on the way...';
    optionFixing('optionFixSubject','5');
 }
 else if(flag == 6)
 {
    document.getElementById('tutionSubject').innerText = 'Your Business Tutor is on the way...';
    optionFixing('optionFixSubject','6');
 }
 else if(flag == 7)
 {
    document.getElementById('tutionSubject').innerText = 'Your Biology Tutor is on the way...';
    optionFixing('optionFixSubject','7');
 }
 else if(flag == 8)
 {
    document.getElementById('tutionSubject').innerText = 'Your Chemitry Tutor is on the way...';
    optionFixing('optionFixSubject','8');
 }
 else if(flag == 9)
 {
    document.getElementById('tutionSubject').innerText = 'Your History Tutor is on the way...';
    optionFixing('optionFixSubject','9');
 }
 else if(flag == 10)
 {
    document.getElementById('tutionSubject').innerText = 'Your Economics Tutor is on the way...';
    optionFixing('optionFixSubject','10');
 }
 else if(flag == 11)
 {
    document.getElementById('tutionSubject').innerText = 'Your Geography Tutor is on the way...';
    optionFixing('optionFixSubject','11');
 }
 else if(flag == 12)
 {
    document.getElementById('tutionSubject').innerText = 'Your Accounts Tutor is on the way...';
    optionFixing('optionFixSubject','12')
 }
/*let twinkle = window.opener.twinkle;
if(twinkle==1)
{
    optionFixing('optionFixClass','1')
}
else if(twinkle==2)
{
    optionFixing('optionFixClass','2')
}*/
