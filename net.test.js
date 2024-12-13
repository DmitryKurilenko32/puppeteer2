const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(20000);
});

afterEach(() => {
  page.close();
});

describe("let's go to the cinema tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://qamid.tmweb.ru/client/index.php");
  });

  test("success booking", async () => {
    const expected = "Вы выбрали билеты:";
    await clickElement(page,"a:nth-child(7)");
    await clickElement(page,".movie-seances__time[href='#'][data-seance-id='217']");
    await clickElement(page, "div:nth-child(6) span:nth-child(6)");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".ticket__check-title");
    expect(expected).equals(actual);
     
  });

test("ticket price", async () => {
  const expected = "100";
  await clickElement(page, "a:nth-child(7)");
  await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='223']");
  await clickElement(page, "div[class='buying-scheme__wrapper'] div:nth-child(1) span:nth-child(7)");
  await clickElement(page, ".acceptin-button");
  const actual = await getText(page, ".ticket__details.ticket__cost");
  expect(actual).equals(expected);
});
test("", async () => {
  await clickElement(page, "a:nth-child(6)");
  await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='217']");
  await clickElement(page, ".buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
  const isDisabled = await page.$eval(".acceptin-button", (button) => {
    return button.disabled;
  });
  expect(true).equals(isDisabled);
  });
});
