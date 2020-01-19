const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
    const browser = await puppeteer.launch({ 
        args: ['--no-sandbox'],
        headless: false 
    });
    const page = await browser.newPage();
    await page.goto("https://read.amazon.com/notebook");

    // await page.type('#ap_email', 'aitsidihammou.achraf@gmail.com')
    // await page.type('#ap_password', '21140houda')
    // await page.keyboard.press('Enter')
    await page.waitForNavigation({ waitUntil: 'load' })

    // get list of books
    const books = await page.evaluate(() => {
        const data = document.querySelectorAll(".a-row.kp-notebook-library-each-book")
        const books = Array.prototype.map.call(data, book => {
            return {
                book_id: book['id'],
                title: book.querySelector('h2').innerText,
                author: book.querySelector('p').innerText,
                cover: book.querySelector('img')['src'],
                amazon_link: `https://www.amazon.fr/dp/${book['id']}`,
                last_access: book.querySelector('input')['value'],
                highlight_count: 0,
                highlights: [],
            }
        });
        return books;
    });

    // get highlights for each book
    for (var book of books) {
        // browse new book
        await page.click('#'+book.book_id)
        await page.waitForSelector('#kp-notebook-highlights-count')
        // get highlight count
        const highlightCount = await page.evaluate(() => {
            return document.querySelector('span#kp-notebook-highlights-count').innerHTML
        });
        // get highlights
        const highlights = await page.evaluate(() => {
            const data = document.querySelectorAll("span#highlight")
            const highlights = Array.prototype.map.call(data, highlight => {
                return highlight.innerText.trim();
            });
            return highlights;
        });
        // book.amazonLink = amazonLink;
        book.highlightCount = parseInt(highlightCount);
        book.highlights = highlights;
    };
    
    res.json(books);
    await browser.close();
}


// books = [
//     { id,
//     amazonLink,
//     title,
//     cover,
//     author,
//     highlightCount,
//     highlights,
// ]