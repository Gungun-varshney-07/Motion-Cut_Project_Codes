function displayMessage(){
    if(document.getElementById('payment-opt2').checked){
        var resultMessage = '<span>Please enter your UPI ID</span><br>'
        resultMessage += '<input type="text" id="upi-id" placeholder="Enter UPI Id" required> <br>'
        resultMessage += '<span>The UPI Id is in the format of name/phone number@bankname</span>'
        result.innerHTML = resultMessage;
    }
}

const delivery_add = document.getElementById('delivery-add');
const orderBtn = document.getElementById('orderBtn');

delivery_add.addEventListener('input', function() {
    const textValue = delivery_add.value.trim();
    if (textValue === '') {
        isDeliveryAddValid = true;
    }
    else {
        isDeliveryAddValid = false;
    }
});

const payment_opt = document.getElementsByName('payment-option')

function validatePayment(){
    let isPaymentOptValid = false;
    for (const radioButton of payment_opt){
        if (radioButton.checked) {
            isPaymentOptValid = true;
            break;
        }
    }
    if(isPaymentOptValid && isDeliveryAddValid){
        orderBtn.disabled = true;
    }
    else{
        orderBtn.disabled = false;
    }
}

for (const radioButton of payment_opt) {
    radioButton.addEventListener('change', validatePayment);
}

function thanksPage(e){
    window.location.href = 'index.html';
    alert('Thank You for placing your order!\nPlease visit again');
}
