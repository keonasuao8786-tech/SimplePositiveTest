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

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loopLogin () {
        for () {
            login ()
        }
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
