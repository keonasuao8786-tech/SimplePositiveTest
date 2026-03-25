import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login Application - Positive Tests', () => {
     it('should be logged in with valid credentials if it allows it', async () => {
       await LoginPage.open()

        for (let i = 0; i < LoginPage.allUsernames.length; i++) {
            await LoginPage.login(LoginPage.allUsernames[i], 'secret_sauce')
            
            if (LoginPage.allUsernames[i] === 'locked_out_user') {
                await expect(LoginPage.errorMessage).toExist()
            }
            else {
                await expect(LoginPage.hamburgerMenu).toBeDisplayed()
                await LoginPage.logout()
                await expect(LoginPage.inputUsername).toExist()
            }
        }           
        })
     })
describe('Login Application - Negative Tests', () => {
     it('should be logged in with valid credentials if it allows it', async () => {
       await LoginPage.open()

        for (let i = 0; i < LoginPage.allUsernames.length; i++) {
            await LoginPage.login(LoginPage.allUsernames[i], 'scret_sauce')
            await expect(LoginPage.errorMessage).toExist()
        }           
        })
     })