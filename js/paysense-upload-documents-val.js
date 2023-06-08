//$.noConflict();
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

  $("#form3").validate({
    errorPlacement: function(error, element) {
      if (element.is(":file")) {
        error.appendTo(element.parents('.radio-box'));
      } else {
        error.insertAfter(element);
      }
    },
    rules: {
      idProofDocType: {
        required: true
      },
      idProofDoc: {
        required: true
      },
      permanentAddressDocType: {
        required: true
      },
      permanentAddressProofDoc: {
        required: true
      },
      currentaddressProofDoc: {
        required: true
      },
      employmentProofDoc: {
        required: true
      },
      cancelledChequeDoc: {
        required: true
      },
      photo: {
        required: true
      },
    },



    messages: {
      idProofDocType: {
        required: "Please select!"
      },
      idProofDoc: {
        required: "Please select!"
      },
      permanentAddressDocType: {
        required: "Please select!"
      },
      permanentAddressProofDoc: {
        required: "Please select!"
      },
      currentaddressProofDoc: {
        required: "Please select!"
      },
      employmentProofDoc: {
        required: "Please select!"
      },
      cancelledChequeDoc: {
        required: "Please select cancelled cheque!"
      },
      photo: {
        required: "Please select your photo!"
      },
    }
  });
});

// Starts process to display the fields to upload documents.
function display_sub_cat_fields_1(sub_cat) {
  var sub_cat_name = sub_cat.value;
  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_1').html(response);
      }
    });
  }
}

function display_sub_cat_fields_2(sub_cat) {
  var sub_cat_name = sub_cat.value;

  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_2').html(response);
      }
    });
  }
}

function display_sub_cat_fields_3(sub_cat) {
  var sub_cat_name = sub_cat.value;

  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_3').html(response);
      }
    });
  }
}

function display_sub_cat_fields_4(sub_cat) {
  var sub_cat_name = sub_cat.value;

  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_4').html(response);
      }
    });
  }
}

function display_sub_cat_fields_5(sub_cat) {
  var sub_cat_name = sub_cat.value;

  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_5').html(response);
      }
    });
  }
}

function display_sub_cat_fields_6(sub_cat) {
  var sub_cat_name = sub_cat.value;

  if(sub_cat_name) {
    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: {action: 'sub_cat_fields', sub_cat_name: sub_cat_name},
      dataType: "html",
      success: function(response) {
        console.log(response);
        $('#sub_cat_fields_6').html(response);
      }
    });
  }
}
// Ends process to display the fields to upload documents.


// Starts process to upload the documents.
function pan_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var pan = $('#pan').prop('files')[0];
  var pan_value = $('#pan_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(pan !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('pan', pan);
    form_data.append('pan_value', pan_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#pan_msg').html(response);
        // Hide message after 5 seconds.
        $('#pan_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function user_photo_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  console.log(field_name);
  // Get file data.
  var user_photo = $('#user_photo').prop('files')[0];
  var user_photo_value = $('#user_photo_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(user_photo !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('user_photo', user_photo);
    form_data.append('user_photo_value', user_photo_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#user_photo_msg').html(response);
        // Hide message after 5 seconds.
        $('#user_photo_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function cancelled_cheque_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var cancelled_cheque = $('#cancelled_cheque').prop('files')[0];
  var cancelled_cheque_value = $('#cancelled_cheque_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(cancelled_cheque !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('cancelled_cheque', cancelled_cheque);
    form_data.append('cancelled_cheque_value', cancelled_cheque_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#cancelled_cheque_msg').html(response);
        // Hide message after 5 seconds.
        $('#cancelled_cheque_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function statement_or_netbanking_xml_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var statement_or_netbanking_xml = $('#statement_or_netbanking_xml').prop('files')[0];
  var statement_or_netbanking_xml_value = $('#statement_or_netbanking_xml_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(statement_or_netbanking_xml !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('statement_or_netbanking_xml', statement_or_netbanking_xml);
    form_data.append('statement_or_netbanking_xml_value', statement_or_netbanking_xml_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#statement_or_netbanking_xml_msg').html(response);
        // Hide message after 5 seconds.
        $('#statement_or_netbanking_xml_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function bank_statements_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var bank_statements = $('#bank_statements').prop('files')[0];
  var bank_statements_value = $('#bank_statements_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(bank_statements !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('bank_statements', bank_statements);
    form_data.append('bank_statements_value', bank_statements_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#bank_statements_msg').html(response);
        // Hide message after 5 seconds.
        $('#bank_statements_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function aadhaar_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var aadhaar = $('#aadhaar').prop('files')[0];
  var aadhaar_value = $('#aadhaar_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(aadhaar !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('aadhaar', aadhaar);
    form_data.append('aadhaar_value', aadhaar_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#aadhaar_msg').html(response);
        // Hide message after 5 seconds.
        $('#aadhaar_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function voter_id_front_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var voter_id_front = $('#voter_id_front').prop('files')[0];
  var voter_id_front_value = $('#voter_id_front_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(voter_id_front !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('voter_id_front', voter_id_front);
    form_data.append('voter_id_front_value', voter_id_front_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#voter_id_front_msg').html(response);
        // Hide message after 5 seconds.
        $('#voter_id_front_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function voter_id_back_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var voter_id_back = $('#voter_id_back').prop('files')[0];
  var voter_id_back_value = $('#voter_id_back_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(voter_id_back !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('voter_id_back', voter_id_back);
    form_data.append('voter_id_back_value', voter_id_back_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#voter_id_back_msg').html(response);
        // Hide message after 5 seconds.
        $('#voter_id_back_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function driving_license_front_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var driving_license_front = $('#driving_license_front').prop('files')[0];
  var driving_license_front_value = $('#driving_license_front_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(driving_license_front !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('driving_license_front', driving_license_front);
    form_data.append('driving_license_front_value', driving_license_front_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#driving_license_front_msg').html(response);
        // Hide message after 5 seconds.
        $('#driving_license_front_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function driving_license_back_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var driving_license_back = $('#driving_license_back').prop('files')[0];
  var driving_license_back_value = $('#driving_license_back_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(driving_license_back !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('driving_license_back', driving_license_back);
    form_data.append('driving_license_back_value', driving_license_back_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#driving_license_back_msg').html(response);
        // Hide message after 5 seconds.
        $('#driving_license_back_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function passport_front_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var passport_front = $('#passport_front').prop('files')[0];
  var passport_front_value = $('#passport_front_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(passport_front !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('passport_front', passport_front);
    form_data.append('passport_front_value', passport_front_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#passport_front_msg').html(response);
        // Hide message after 5 seconds.
        $('#passport_front_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function passport_back_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var passport_back = $('#passport_back').prop('files')[0];
  var passport_back_value = $('#passport_back_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(passport_back !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('passport_back', passport_back);
    form_data.append('passport_back_value', passport_back_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#passport_back_msg').html(response);
        // Hide message after 5 seconds.
        $('#passport_back_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function utility_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var utility_bill = $('#utility_bill').prop('files')[0];
  var utility_bill_value = $('#utility_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(utility_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('utility_bill', utility_bill);
    form_data.append('utility_bill_value', utility_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#utility_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#utility_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function water_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var water_bill = $('#water_bill').prop('files')[0];
  var water_bill_value = $('#water_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(water_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('water_bill', water_bill);
    form_data.append('water_bill_value', water_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#water_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#water_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function mobile_post_paid_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var mobile_post_paid_bill = $('#mobile_post_paid_bill').prop('files')[0];
  var mobile_post_paid_bill_value = $('#mobile_post_paid_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(mobile_post_paid_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('mobile_post_paid_bill', mobile_post_paid_bill);
    form_data.append('mobile_post_paid_bill_value', mobile_post_paid_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#mobile_post_paid_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#mobile_post_paid_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function landline_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var landline_bill = $('#landline_bill').prop('files')[0];
  var landline_bill_value = $('#landline_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(landline_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('landline_bill', landline_bill);
    form_data.append('landline_bill_value', landline_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#landline_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#landline_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function bank_passbook_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var bank_passbook = $('#bank_passbook').prop('files')[0];
  var bank_passbook_value = $('#bank_passbook_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(bank_passbook !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('bank_passbook', bank_passbook);
    form_data.append('bank_passbook_value', bank_passbook_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#bank_passbook_msg').html(response);
        // Hide message after 5 seconds.
        $('#bank_passbook_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function latest_transaction_in_passbook_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var latest_transaction_in_passbook = $('#latest_transaction_in_passbook').prop('files')[0];
  var latest_transaction_in_passbook_value = $('#latest_transaction_in_passbook_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(latest_transaction_in_passbook !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('latest_transaction_in_passbook', latest_transaction_in_passbook);
    form_data.append('latest_transaction_in_passbook_value', latest_transaction_in_passbook_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#latest_transaction_in_passbook_msg').html(response);
        // Hide message after 5 seconds.
        $('#latest_transaction_in_passbook_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function electricity_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var electricity_bill = $('#electricity_bill').prop('files')[0];
  var electricity_bill_value = $('#electricity_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(electricity_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('electricity_bill', electricity_bill);
    form_data.append('electricity_bill_value', electricity_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#electricity_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#electricity_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function owner_electricity_bill_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var owner_electricity_bill = $('#owner_electricity_bill').prop('files')[0];
  var owner_electricity_bill_value = $('#owner_electricity_bill_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(owner_electricity_bill !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('owner_electricity_bill', owner_electricity_bill);
    form_data.append('owner_electricity_bill_value', owner_electricity_bill_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#owner_electricity_bill_msg').html(response);
        // Hide message after 5 seconds.
        $('#owner_electricity_bill_msg').delay(5000).fadeOut(500);
      }
    });
  }
}

function rental_agreement_fnc(data) {
  // Get id name.
  var id_name = $(data).attr('id');
  // Get the current field name.
  var field_name = id_name.substr(0, id_name.lastIndexOf('_upload'));
  // Get file data.
  var rental_agreement = $('#rental_agreement').prop('files')[0];
  var rental_agreement_value = $('#rental_agreement_value').val();
  var reqLoanPersonalID = $('#reqLoanPersonalID').val();
  // If file selected.
  if(rental_agreement !== undefined) {
    var form_data = new FormData();                  
    form_data.append('action', 'upload_document');
    form_data.append('rental_agreement', rental_agreement);
    form_data.append('rental_agreement_value', rental_agreement_value);
    form_data.append('reqLoanPersonalID', reqLoanPersonalID);
    form_data.append('field_name', field_name);

    $.ajax({
      url: "includes/ajax_request/ajax_request.php",
      method: "post",
      data: form_data,
      dataType: "html",
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#rental_agreement_msg').html(response);
        // Hide message after 5 seconds.
        $('#rental_agreement_msg').delay(5000).fadeOut(500);
      }
    });
  }
}




// Ends process to upload the documents.