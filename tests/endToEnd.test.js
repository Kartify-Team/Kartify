import puppeteer from 'puppeteer'

const timeout = 5000;

describe('Kartify Page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        // browser = await puppeteer.launch({
        //     executablePath: './chrome-win32/chrome.exe'
        // });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/products/1?')
    }, timeout)

    it('should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Kartify');
    })

    it('should be able to ', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Kartify');
    })
    afterAll(async () => {
        await browser.close();
    })

})