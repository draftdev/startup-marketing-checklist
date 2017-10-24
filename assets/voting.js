
$(document).ready(function() {
  // Set the user's email if they've given it.
  if (Cookies.get('spc_user_email')) {
    $('#email').val(Cookies.get('spc_user_email'));
  }

  // Remove vote links for voted items
  if (Cookies.get('spc_user_products')) {
    removeVotedProducts();
  }
});

// Fixes cross-domain Options request
$(document).on("beforeAjaxSend.ic", function (evt, settings) {
  delete settings.headers['X-IC-Request'];
  delete settings.headers['X-HTTP-Method-Override'];
});

// Set the product
$('a.vote-link').click(function() {
  var product = replaceAll(replaceAll($(this).attr('id'), '#', ''), '_', ' ');
  $('#product').val(product);
  return true;
});

// Close vote cast modal, save user and vote data
function voteCastComplete() {
  var email = $('#email').val();
  Cookies.set('spc_user_email', email, { expires: 30, path: '/' });

  var product = $('#product').val();
  var products = Cookies.getJSON('spc_user_products');
  if (products && products.length) {
    products.push(product);
  } else {
    products = [product];
  }
  Cookies.set('spc_user_products', products, { expires: 30, path: '/' });

  $.modal.close();
  $('#thanks-modal').modal();

  removeVotedProducts();
}

function removeVotedProducts() {
  Cookies.getJSON('spc_user_products').map(function(product) {

    // Up the vote count
    var voteCountElement = $('#' + replaceAll(product, ' ', '_') + ' .count');
    var oldVotes = Number(voteCountElement.text());
    voteCountElement.text(oldVotes + 1);

    // Remove link
    $('#' + replaceAll(product, ' ', '_')).replaceWith(function() {
      return $("<span class='disabled-vote'>" + $(this).html() + "</span>");
    });
  });
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
