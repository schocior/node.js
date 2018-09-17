module.exports = function(app) {
    var user = require('../controllers/userController');

    app.route('/user')
        .get(user.list_all_users)
        .post(user.create_a_user);

    app.route('/user/:userId')
        .delete(user.delete_a_user);
};