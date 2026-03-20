import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce!')
    })
    it('should be locked out of logging in', async () => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user', 'secret_sauce')
    })
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('problem_user', 'secret_sauce')
    })
})