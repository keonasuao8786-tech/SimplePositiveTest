import { $ } from '@wdio/globals'
import Window from './browser.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Window {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
