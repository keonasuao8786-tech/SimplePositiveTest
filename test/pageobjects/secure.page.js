import { $ } from '@wdio/globals'
import Window from './browser.js';

class SecurePage extends Window {
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
