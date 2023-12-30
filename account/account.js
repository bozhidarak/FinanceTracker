document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var accountName = document.getElementById('accountName').value;
    var currency = document.getElementById('currency').value;
    var initialBalance = document.getElementById('initialBalance').value;

    // Here, you should handle the account creation logic.
    // Since this is a frontend project, we can simulate account creation by storing data in local storage.
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push({ accountName, currency, initialBalance });
    localStorage.setItem('accounts', JSON.stringify(accounts));

    alert('Account created successfully!');
    event.target.reset();
});
