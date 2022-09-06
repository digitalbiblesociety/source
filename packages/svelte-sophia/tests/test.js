import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
	await page.goto('http://localhost:4173/')
})

// Settings Testing
test('Settings Menu Opens', async ({page}) => {
	await page.locator('data-test-id=settings-menu').click()
	const titleText = await page.locator('data-test-id=settings-title').textContent()
	await page.screenshot({path: './tests/outputs/settings-menu-screenshot.png'})
	expect(titleText).toBe('Settings')
})

//test('Settings Menu, Bible Column Adds', async ({page}) => {
//	await page.locator('data-test-id=settings-menu').click()
//	const titleText = await page.locator('data-test-id=settings-title').textContent()
//	await page.screenshot({path: './tests/outputs/settings-menu-screenshot.png'})
//	expect(titleText).toBe('Settings')
//})
