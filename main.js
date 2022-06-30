var state = false;
var hide1 = document.getElementById("fa");
var hide2 = document.getElementById("fa1");
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("password2").setAttribute("type", "password");
        hide1.style.display = "block";
        hide2.style.display = "none";
        state = false;
    } 
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("password2").setAttribute("type", "text");
        hide1.style.display = "none";
        hide2.style.display = "block";
        state = true;
    } 
}

const password=document.getElementById("password");
const meterInside=document.getElementById("meterInside");
const reg0=new RegExp('.{5,}');
const reg1=new RegExp('.{8,}');
const reg2=new RegExp('[a-z]+');
const reg3=new RegExp('[A-Z]+');
const reg4=new RegExp('[0-9]+');
const reg5=new RegExp('[^a-z0-9]+', 'i');
const regs=[reg0, reg1, reg2, reg3, reg4, reg5];
function checkPassword()
{
	passwordStrength=0;
	for(let i=0;i<regs.length;i++)
	{
		if(regs[i].test(password.value)) passwordStrength++;
	}
	switch(passwordStrength)
	{
		case 1: meterInside.style.backgroundColor="red";
		break;
		case 2: meterInside.style.backgroundColor="orange";
		break;
		case 3: meterInside.style.backgroundColor="yellow";
		break;
		case 4: meterInside.style.backgroundColor="dodgerblue";
		break;
		case 5: meterInside.style.backgroundColor="green";
		break;
		case 6: meterInside.style.backgroundColor="forestgreen";
        document.getElementById("password2").disabled=false;
		break;
	}
	passwordStrength*=100/regs.length;
	meterInside.style.width=passwordStrength+"%";
}
password.addEventListener("input", checkPassword);

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "rgba("+0+","+255+","+0+",0.5)";
        document.getElementById("user").removeAttribute("disabled");
    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Fill your Email Address.";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
}

function validation_user() {
    var form = document.getElementById("form2");
    var user = document.getElementById("user").value;
    var text = document.getElementById("text2");
    var correct_way = /^[A-Za-z]+$/;
    var x = "";
    if (user != "") {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Fill your user";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
    if (user.match(correct_way)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "User is correct.";
        text.style.color = "rgba("+0+","+255+","+0+",0.5)";
        document.getElementById("password").removeAttribute("disabled");
    }
    if (user.length<3) {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "User length must be longer than 3 letters";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
    if (user.length>=12) {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "User length cannot be longer than 12 letters";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
    if (user!=user.match(correct_way)) {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Only alphabets are allowed!";
        text.style.color = "rgba("+255+","+0+","+0+",0.5)";
    }
}

function isEmpty() {
	var user = document.getElementById("user").value;
	var mail = document.getElementById("password").value;
	var pass1 = document.getElementById("password").value;
	var pass2 = document.getElementById("password2").value;
	if ((pass2 == pass1) && (user!="") && (mail!="")) {
		document.getElementById("submit").removeAttribute("disabled");
	}
	else if (pass2 != pass1)
	{
		document.getElementById("submit").true;
	}
}

function sendtext() {
    document.getElementById("sendtext").innerHTML="Udane Logowanie! <br> Prace wykonali: <br> Byczkowski Mateusz (61526) <br>Bartosz Chojnacki (56105)";

}
