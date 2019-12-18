import puppeteer from 'puppeteer'

const timeout = 5000;

describe('Kartify Page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
        await page.goto('http://localhost:3000/products/1?')
    }, timeout)

    it('should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Kartify');
    })
    afterAll(async () => {
        await browser.close();
    })
    
})