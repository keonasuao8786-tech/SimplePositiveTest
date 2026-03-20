import { browser } from '@wdio/globals'

export default class Window {
    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
