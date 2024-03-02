function validateAndSubmit() {
    const cardNumber = document.getElementById('cardNumber').value;
    const date = document.getElementById('date').value;
    const cvv = document.getElementById('cvv').value;
    const Code = document.getElementById('Code').value;

    //check for empty fields
    if (cardNumber === '' || date === '' || cvv === '' || Code === '') {
        alert('Fields are empty');
        return;
    }
    //check for appropriate card number
    const Validcard = /^(?:\d{15}|\d{16})$/.test(cardNumber);
    if (!Validcard) {
        alert('Enter appropriate card number');
        return;
    }
    const Validdate = /^(0[1-9]|1[0-2])\/\d{4}$/;
    //check for appropriate date
    if (!Validdate.test(date)) {
        alert('Enter appropriate date dd/mm/yy');
        return;
    }
    
    alert('Payment is done!');
}
