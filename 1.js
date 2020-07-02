 function validation () {  
		var username = document.getElementById('username').value;
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var usercheck = /^[A-Za-z0-9]{3,30}$/;
		var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
		var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
		if(usercheck.test(username)){
			document.getElementById('usererror').innerHTML = " ";
		}else {
			document.getElementById('usererror').innerHTML = "** Nhập lại tên tài khoản ";
			return false;
		}
		if(emailcheck.test(email)){
			document.getElementById('emailerror').innerHTML = " ";
		}else {
			document.getElementById('emailerror').innerHTML = "** Nhập lại email ";
			return false;
		}
		if(passwordcheck.test(password)){
			document.getElementById('passerror').innerHTML = " ";
		}else {
			document.getElementById('passerror').innerHTML = "** Nhập lại mật khẩu ";
			return false;
		}
	}