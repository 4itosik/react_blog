import nightmare from 'nightmare';

import { TestBaseUrl } from 'helpers/consts/TestBaseUrl';

describe('When visit the homepage', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('welcomes the user', async () => {
    let page = nightmare().goto(TestBaseUrl);
    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Blog');
  });

  it('Go to about page', async () => {
    let page = nightmare().goto(TestBaseUrl).click('a[href$="/about"]');
    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Hello, in React Block!');
  });

  it('Go to about contact', async () => {
    let page = nightmare().goto(TestBaseUrl).click('a[href$="/contact"]');
    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Обратная связь');
  });

  it('Like first post', async () => {
    let page = nightmare().goto(TestBaseUrl)
    const initCount = Number(await page.evaluate(
      () => document.querySelector('.row .col-md-8 .panel .col-md-9 .like-count').textContent
    ).end());

    console.log(initCount)
  });

  it('Like first post', async () => { // Подскажи, плиз, как поправить этот тест?
    let page = nightmare().goto(TestBaseUrl);
    const initLikeCount = Number(await page.evaluate(
      () => document.querySelector('.row .col-md-8 .panel .col-md-9 .like-count').textContent
    ).end());

    page.click('.row .col-md-8 .panel .col-md-9 button').wait(1000)

    const newLikeCount = Number(await page.evaluate(
      () => document.querySelector('.row .col-md-8 .panel .col-md-9 .like-count').textContent
    ).end());

    expect(newLikeCount).toEqual(initLikeCount + 1);
  });
});
