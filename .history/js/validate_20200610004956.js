	
function register(){
	
	let x = new Array();
	x[0] = document.getElementById('fname').value;
	x[1] = document.getElementById('lname').value;
	x[2] = document.getElementById('sname').value;
	x[3] = document.getElementById('email').value;
    x[4] = document.getElementById('phonenumber').value;
    x[5] = document.getElementById('password').value;
    x[6] = document.getElementById('cpassword').value;
    

	let h = new Array();
	h[0] = "<span style='color:red'>Please type your name!</span>";
	h[1] = "<span style='color:red'>Please type your last name!</span>";
	h[2] = "<span style='color:red'>Please type your surname!</span>";
	h[3] = "<span style='color:red'>Please type your email!</span>";
    h[4] = "<span style='color:red'>Please confirm your phone number!</span>";
    h[5] = "<span style='color:red'>Please type your password!</span>";
    h[6] = "<span style='color:red'>Please confirm your password!</span>";


	let divs = new Array("mname", "mlname", "msname", "memail","mphonenumber","mpassword", "mcpassword"); 
	
		
		for(i in x){
		
			let error = h[i];
			let div = divs[i];
			
			if(x[i]==""){
				document.getElementById(div).innerHTML = error;
			}else{
				document.getElementById(div).innerHTML = "OK!";
			}
				
		}
		
	}
	
	
function pass(){

	let first = document.getElementById('password').value;
	let second = document.getElementById('cpassword').value;

	if(second==first){
		document.getElementById('mcpassword').innerHTML = "OK!";
	}else{
		document.getElementById('mcpassword').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
	}
	
}     

	

