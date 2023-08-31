import puppeteer, { Browser, Page } from 'puppeteer';
import type { ProjectionsResponse } from './types/projection';
import { LeaguesResponse } from './types/league';

class PrizePicks {
  public browser: Browser | null;
  private baseURL: string;
  private page: Page | null

  constructor() {
    this.baseURL = 'https://prizepicks.com';
    this.browser = null;
    this.page = null;
  }

  public async fetchProjections() {
    await this.startSession();

    if (!this.page) {
      throw new Error('No page found');
    }

    return await this.page.evaluate(async () => {
      const apiResponse = await fetch('https://api.prizepicks.com/projections');
      const jsonData = await apiResponse.json() as ProjectionsResponse;
      return jsonData;
    });
  }

  public async fetchLeagues() {
    await this.startSession();

    if (!this.page) {
      throw new Error('No page found');
    }

    return await this.page.evaluate(async () => {
      const apiResponse = await fetch('https://api.prizepicks.com/leagues');
      const jsonData = await apiResponse.json() as LeaguesResponse;
      return jsonData;
    });
  }

  private async startSession() {
    this.browser = await puppeteer.launch({ headless: "new" });
    this.page = await this.browser.newPage();

    await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0');
    await this.page.goto(this.baseURL);
    await this.page.waitForSelector('.hide-mobile-landscape');
  }

  public async closeSession() {
    await this.browser?.close();
  }
}

export default PrizePicks;
