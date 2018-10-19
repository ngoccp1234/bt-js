var btnsubmit = document.forms ["register-form"] ["btn-submit"]
btnsubmit.onclick = function () {
    var txtusername = document.forms ["register-form"] ["username"];
    var msgusername = txtusername.nextElementSibling;
    if (txtusername == null || txtusername.value.length == 0) {
        msgusername.innerHTML = "*vui lòng nhập tên tài khoản của bạn.";
        msgusername.classList.add("danger-text");
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length < 5) {
        msgusername.innerHTML = "*tên tài khoản của bạn quá ngắn.";
        msgusername.classList.remove("success-text");
        msgusername.classList.add("danger-text");
        msgusername.classList.remove("hidden-text");
    }
    else if (txtusername.value.length > 20) {
        msgusername.innerHTML = "*tên tài khoản của bạn quá dài.";
        msgusername.classList.remove("success-text");
        msgusername.classList.add("danger-text");
        msgusername.classList.remove("hidden-text");
    }
    else {
        msgusername.innerHTML = "tên hợp lệ.";
        msgusername.classList.remove("danger-text");
        msgusername.classList.add("success-text");
        msgusername.classList.remove("hidden-text");
    }
    var txtpassword = document.forms["register-form"] ["password"];
    var msgpassword = txtpassword.nextElementSibling;
    if (txtpassword == null || txtpassword.value.length == 0) {
        msgpassword.innerHTML = "*không được bỏ trống mật khẩu";
        msgpassword.classList.remove("success-text");
        msgpassword.classList.add("danger-text");
        msgpassword.classList.remove("hidden-text");
    }
    else {
        msgpassword.innerHTML = "password hợp lệ.";
        msgpassword.classList.remove("danger-text");
        msgpassword.classList.add("success-text");
        msgpassword.classList.remove("hidden-text");
    }
    var txtfullname = document.forms["register-form"] ["fullname"];
    var msgfullname = txtfullname.nextElementSibling;
    if (txtfullname == null || txtfullname.value.length == 0) {
        msgfullname.innerHTML = "*vui lòng nhập tên của bạn";
        msgfullname.classList.remove("success-text");
        msgfullname.classList.add("danger-text");
        msgfullname.classList.remove("hidden-text");
    }
    else if (txtfullname.value.length < 5) {
        msgfullname.innerHTML = "*tên của bạn quá ngắn.";
        msgfullname.classList.remove("success-text");
        msgfullname.classList.add("danger-text");
        msgfullname.classList.remove("hidden-text");
    }
    else if (txtfullname.value.length > 30) {
        msgfullname.innerHTML = "*tên của bạn quá dài.";
        msgfullname.classList.remove("success-text");
        msgfullname.classList.add("danger-text");
        msgfullname.classList.remove("hidden-text");
    }
    else {
        msgfullname.innerHTML = "tên hợp lệ.";
        msgfullname.classList.add("success-text");
        msgfullname.classList.remove("hidden-text");
    }
    var txtemail = document.forms["register-form"] ["email"];
    var msgemail = txtemail.nextElementSibling;
    var a = txtemail.value.includes("@");
    if (txtemail == null || txtemail.value.length === 0) {
        msgemail.innerHTML = "*vui lòng nhập email";
        msgemail.classList.remove("success-text");
        msgemail.classList.add("danger-text");
        msgemail.classList.remove("hidden-text");
    } else if (a === false) {
        msgemail.innerHTML = "*sai email";
        msgemail.classList.remove("success-text");
        msgemail.classList.add("danger-text");
        msgemail.classList.remove("hidden-text");
    } else {
        msgemail.innerHTML = "email hợp lệ.";
        msgemail.classList.remove("danger-text");
        msgemail.classList.add("success-text");
        msgemail.classList.remove("hidden-text");
    }
}