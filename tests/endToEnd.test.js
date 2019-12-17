import puppeteer from 'puppeteer'
describe('Kartify Page', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/products/1?')
    })

    it('should display "Kartify" text on page', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('Kartify');
    })

    
})