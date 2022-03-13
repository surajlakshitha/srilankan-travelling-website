window.addEventListener('load', ()=>{
    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    const subject = sessionStorage.getItem('SUBJECT');
    const description = sessionStorage.getItem('DESCRIPTION');

    document.getElementById("name-result").innerHTML = name;
    document.getElementById("email-result").innerHTML = email;
    document.getElementById("subject-result").innerHTML = subject;
    document.getElementById("description-result").innerHTML = description;
})



function sendEmails(){
    var heading = sessionStorage.getItem('SUBJECT');
    var description = sessionStorage.getItem('DESCRIPTION');
    window.open('mailto:thejana.2019723@iit.ac.lk?subject='+heading+'&body='+description);
}