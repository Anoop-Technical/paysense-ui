$(document).ready(function() {
  $("select").change(function() {
    $("select").each(function() {
      if ($(this).val() !== "") {
        $(this).addClass("dark-text");
      } else {
        $(this).removeClass("dark-text");
      }
    });

  });
  $.validator.addMethod("firstName", function(value, element) {
    return this.optional(element) || /^[a-zA-Z][a-zA-Z\s]*$/.test(value);
  }, 'Please enter valid first name!');
  $.validator.addMethod("lastName", function(value, element) {
    return this.optional(element) || /^[a-zA-Z][a-zA-Z\s]*$/.test(value);
  }, 'Please enter valid last name!');
  $.validator.addMethod("pan", function(value, element) {
    return this.optional(element) || /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(value);
  }, 'Please enter valid PAN number!');
  $.validator.addMethod("mobile", function(value, element) {
    return this.optional(element) || /^[6789]\d{9}$/.test(value);
  }, 'Please enter valid mobile number!');
  $.validator.addMethod("email", function(value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
  }, 'Please enter valid email id!');
  $.validator.addMethod("monthlyIncome", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]*$/.test(value);
  }, 'Please enter valid monthly income!');
  $.validator.addMethod("postalCode", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]{5}$/.test(value);
  }, 'Please enter valid postal code!');



  $("#form1").validate({
    errorPlacement: function(error, element) {
      if (element.is(":checkbox")) {
        error.appendTo(element.parents('.btm-no-mr'));
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      firstName: {
        required: true,
        firstName: true
      },
      lastName: {
        required: true,
        lastName: true
      },
      pan: {
        required: true,
        pan: true
      },
      dob: {
        required: true
      },
      mobile: {
        required: true,
        mobile: true
      },
      email: {
        required: true,
        email: true
      },
      employmentType: {
        required: true
      },
      monthlyIncome: {
        required: true,
        monthlyIncome: true
      },

      postalCode: {
        required: true,
        postalCode: true
      },

      terms: {
        required: true
      }



    },



    messages: {
      firstName: {
        required: "Please enter first name!"
      },
      lastName: {
        required: "Please enter last name!"
      },
      pan: {
        required: "Please enter PAN number!"
      },
      dob: {
        required: "Please select date of birth!"
      },
      mobile: {
        required: "Please enter mobile number!"
      },
      email: {
        required: "Please enter email id!"
      },
      employmentType: {
        required: "Please select employment type!"
      },
      monthlyIncome: {
        required: "Please enter monthly income!"
      },

      postalCode: {
        required: "Please enter postal code!"
      },

      terms: {
        required: "Please accept to the terms & conditions!"
      }

    }
  });
});