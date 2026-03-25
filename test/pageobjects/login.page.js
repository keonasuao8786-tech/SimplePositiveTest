import Window from './browser.js';

class LoginPage extends Window {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get hamburgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get logoutButton () {
        return $('#logout_sidebar_link');
    }

    get errorMessage () {
        return $('button.error-button')
    }
    allUsernames = ['standard_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user', 'locked_out_user'];

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logout () {
        await this.hamburgerMenu.click();
        await this.logoutButton.click();
    }


    open () {
        return super.open('login');
    }
}

export default new LoginPage();
