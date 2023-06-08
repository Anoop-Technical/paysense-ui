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
  $("input[name=sameAsPresentAddress]").click(function() {
    if ($("input[name=sameAsPresentAddress]").prop("checked")) {
      $(".sameAsPresentAddress").hide();
    } else {
      $(".sameAsPresentAddress").show();
    }

  });

  $("select[name=city]").change(function() {
    if ($("select[name=city]").val() == "Others") {
      $("#presentOtherCity").show();
    } else {
      $("#presentOtherCity").hide();
    }
  });

  $("select[name=permanentCity]").change(function() {
    if ($("select[name=permanentCity]").val() == "Others") {
      $("#permanentOtherCity").show();
    } else {
      $("#permanentOtherCity").hide();
    }
  });

  $.validator.addMethod("fatherName", function(value, element) {
    return this.optional(element) || /^[a-zA-Z. ]*$/.test(value);
  }, 'Please enter valid father name!');
  $.validator.addMethod("motherName", function(value, element) {
    return this.optional(element) || /^[a-zA-Z. ]*$/.test(value);
  }, 'Please enter valid mother name!');
  $.validator.addMethod("pincode", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]{5}$/.test(value);
  }, 'Please enter valid pincode!');
  $.validator.addMethod("permanentPincode", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]{5}$/.test(value);
  }, 'Please enter valid pincode!');
  $.validator.addMethod("verifiedMonthlyIncome", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]*$/.test(value);
  }, 'Please enter valid verified monthly income!');


  $("#form2").validate({
    errorPlacement: function(error, element) {
      if (element.is(":checkbox")) {
        error.appendTo(element.parents('.btm-no-mr'));
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      fatherName: {
        required: true,
        fatherName: true
      },
      motherName: {
        required: true,
        motherName: true
      },
      presentResidentialAddress: {
        required: true
      },
      city: {
        required: true
      },
      presentResidentialOtherCity: {
        required: true
      },
      state: {
        required: true
      },
      pincode: {
        required: true,
        pincode: true
      },
      permanentResidentialAddress: {
        required: true
      },
      permanentCity: {
        required: true
      },
      permanentResidentialOtherCity: {
        required: true
      },

      permanentState: {
        required: true
      },

      permanentPincode: {
        required: true,
        permanentPincode: true
      },

      bankName: {
        required: true
      },

      accountNumber: {
        required: true
      },

      employerName: {
        required: true
      },
      modeOfPayemnt: {
        required: true
      },
      verifiedMonthlyIncome: {
        required: true,
        verifiedMonthlyIncome: true
      },

    },

    messages: {
      fatherName: {
        required: "Please enter father name!"
      },
      motherName: {
        required: "Please enter mother name!"
      },
      presentResidentialAddress: {
        required: "Please enter present residential address!"
      },
      city: {
        required: "Please select city!"
      },
      presentResidentialOtherCity: {
        required: "Please enter other city!"
      },
      state: {
        required: "Please select state!"
      },
      pincode: {
        required: "Please enter pincode!"
      },
      permanentResidentialAddress: {
        required: "Please enter permanent residential address!"
      },
      permanentCity: {
        required: "Please select city!"
      },
      permanentResidentialOtherCity: {
        required: "Please enter other city!"
      },
      permanentState: {
        required: "Please select state!"
      },
      permanentPincode: {
        required: "Please enter pincode!"
      },
      bankName: {
        required: "Please enter bank name!"
      },
      accountNumber: {
        required: "Please enter account number!"
      },
      employerName: {
        required: "Please enter employer name!"
      },
      modeOfPayemnt: {
        required: "Please select mode of payemnt!"
      },
      verifiedMonthlyIncome: {
        required: "Please enter verified monthly income!"
      }

    }
  });
});