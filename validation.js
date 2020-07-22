function validatedate(inputText){
            var dateformat = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
            if(inputText.value.match(dateformat)){
                    var opera1 = inputText.value.split('/');
                    var opera2 = inputText.value.split('-');
                    lopera1 = opera1.length;
                    lopera2 = opera2.length;
                    if (lopera1>1){
                        var pdate = inputText.value.split('/');
                    }
                    else if (lopera2>1){
                        var pdate = inputText.value.split('-');
                    }
                    var dd = parseInt(pdate[0]);
                    var mm  = parseInt(pdate[1]);
                    var yy = parseInt(pdate[2]);
                    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
                    if (mm==1 || mm>2){
                        if (dd>ListofDays[mm-1]){
                            alert('Invalid date format!');
                            return false;
                        }
                        else{
                            return true;
                        }
                    }
                    if (mm==2){
                        var lyear = false;
                        if ( (!(yy % 4) && yy % 100) || !(yy % 400)) {
                            lyear = true;
                        }
                        if ((lyear==false) && (dd>=29)){
                            alert('Invalid date format!');
                            return false;
                        }
                        if ((lyear==true) && (dd>29)){
                            alert('Invalid date format!');
                            return false;
                        }
                    }
            }
            else{
                alert("Invalid date format!");
                return false;
            }
        }
        function validateName(inputText){
            var name = inputText.value;
            if (name == "") {
                alert("Name must be filled out");
                return false;
            }
            return true;
        }
        function validateEmail(inputText){
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email=inputText.value;
            if(email.match(mailformat) && email !=""){
                return true;
            }
            else{
                alert("Enter Valid email id");
                return false;
            }
        }
        function validatePassword(pasw1,pasw2){
            if(pasw1.value==pasw2.value){
                return true;
            }
            else{
                alert("Enter correct password");
                return false;
            }
        }
        function validatenumber(inputText){
            var num=/^([7-9]{1})([0-9]{9})$/;
            if(inputText.value.match(num) && inputText.value!=""){
                return true;
            }
            else{
                alert("Enter valid number");
                return false;
            }
        }
        function validateForm() {
            if(validateName(document.forms["myForm"]["username"]) && validateEmail(document.forms["myForm"]["email"]) && validatePassword(document.forms["myForm"]["psw"]) && validatedate(document.forms["myForm"]["dob"]) && validatenumber(document.forms["myForm"]["phno"])){
                return true;
        }
        else{
            alert("Enter correctly");
            return false;
        }
      }