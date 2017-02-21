/***********************
 *  SEND EMAIL          *
 * *******************/ 
 
 //email regex
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function sendemail(){
    var emailin = document.getElementById('emailinput');
    var email = emailin.value;

    if (validateEmail(email)) {
      var messageListRef = firebase.database().ref().child('email_list');
      messageListRef.push({ 'email': email });
      emailin.value = "";
      window.alert("Merci!");
      document.activeElement.blur();
    } else {
      window.alert("Veuillez entrer une adresse valide");
    }
  }

  //user presses enter key event
  function runScript(event) {
    if (event.which == 13 || event.keyCode == 13) {
      sendemail();
      return false;
    }
    return true;
  }


/***********************
 *  SEND FORMS          *
 * *******************/ 
$(function() {
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            var messageListRef = firebase.database().ref().child('email_list');
            messageListRef.push({ 'email': email });

            var messageListRef2 = firebase.database().ref().child('messages');
            messageListRef2.push({ 'name': name });
            messageListRef2.push({ 'email': email });
            messageListRef2.push({ 'phone': phone });
            messageListRef2.push({ 'message': message });

        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
