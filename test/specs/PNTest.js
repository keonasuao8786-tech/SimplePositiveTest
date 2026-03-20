import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Login Application - Positive Tests', () => {
     it('should be logged in with valid credentials', async () => {
            await LoginPage.open()
    
            await LoginPage.login('standard_user', 'secret_sauce')
        })
     it('should be locked out of logging in', async () => {
            await LoginPage.open()
            await LoginPage.login('locked_out_user', 'secret_sauce')
        })
     it('should be logged in with valid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('problem_user', 'secret_sauce')
        })
     it('should be logged in with valid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('performance_glitch_user', 'secret_sauce')
        })
     it('should be logged in with valid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('error_user', 'secret_sauce')
        })
     it('should be logged in with valid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('visual_user', 'secret_sauce')
        })
})

describe('Login Application - Negative Tests', () => {
     it('should not be logged in because of invalid credentials', async () => {
            await LoginPage.open()
    
            await LoginPage.login('standarduser', 'secret_sauce')
        })
     it('should be locked out of logging in due to an incorrect password', async () => {
            await LoginPage.open()
            await LoginPage.login('locked_out_user', 'socret_sauce')
        })
     it('should not be logged in because of invalid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('problemuser', 'secret_sauce')
        })
     it('should not be logged in because of invalid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('performanceglitchuser', 'secret_sauce')
        })
     it('should not be logged in because of invalid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('erroruser', 'secret_sauce')
        })
     it('should not be logged in because of invalid credentials', async () => {
            await LoginPage.open()
            await LoginPage.login('visualuser', 'secret_sauce')
        })
})