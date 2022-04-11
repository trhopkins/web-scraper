const puppeteer = require('puppeteer')

async function getVisual() {
	try {
		const URL = 'https://www.youtube.com'
		const browser = await puppeteer.launch()
		const page = await browser.newPage()

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36')
		await page.setViewport({
            width: 1080,
            height: 1920,
            deviceScaleFactor: 1
        })
        await page.goto(URL, {waitUntil: 'networkidle2'})
		await page.pdf({ path: 'index.pdf', landscape: true })

		await browser.close()
	} catch (error) {
		console.error(error)
	}
}

getVisual()