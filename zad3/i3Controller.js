

(function () {

    function getById(id) {
        return document.getElementById(id);
    }

    var login = document.getElementById('loginBut');
    login.addEventListener('click', function (event) {
        event = event || window.event;

        var inputs = document.querySelectorAll("#loginForm > input");
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();

        inputs[0].addEventListener('focus', function () {
            if (document.getElementById('merror'))
                document.getElementById('merror').parentNode.removeChild(document.getElementById('merror'));
        })

        if (userManager.loginUser(username, password)) {
            window.location = './izp3.html';
        } else {
            var error = document.createElement('span');
            error.id = "merror";
            error.textContent = "Wrong username or password";
            inputs[0].parentNode.appendChild(error);
        }
        event.preventDefault();
    }, false);


    var createAcc = getById('createAcc');
    createAcc.addEventListener('click', function (event) {
        event = event || window.event;
        getById('registerForm').style.display = 'block';
        event.preventDefault();
    }, false);

    getById('registerForm').addEventListener('submit', function (event) {
        var inputs = document.querySelectorAll("#registerForm > form > input");
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();


        if (userManager.isPasswordValid(password) && !userManager.isUserNameExists(username)) {
            userManager.addUser(new User(username, password));
            getById('registerForm').style.display = 'none';
        }

        event.preventDefault();
    }, false);

})();
