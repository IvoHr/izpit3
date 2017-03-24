
function User(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
}

var userManager = (function () {

    var users = JSON.parse(window.localStorage.getItem('users')) || [];

    return {
        addUser: function (user) {
            users.push(user);
            window.localStorage.setItem('users', JSON.stringify(users));
        },

        loginUser: function (username, password) {
            return users.some(function (u) {
                return (u.username === username) &&
                    (u.password === password);
            });
        },

        isUserNameExists: function (username) {
            users = JSON.parse(window.localStorage.getItem('users')) || [];
            return users.some(function (u) {
                return (u.username === username);
            });
        },

        isPasswordValid: function (password) {
            return password.length > 4;
        }
    }
})();
