import { Page } from '@playwright/test';

export class CampgroundPage {
    constructor(private page: Page) { }

    async navigateToNewForm() {
        await this.page.goto('https://hidden-basin-58850.herokuapp.com/campgrounds/new');
    }

    async createCampground(title: string, location: string, price: string, description: string, imagePath: string) {
        await this.page.getByLabel('Title').fill(title);
        await this.page.getByLabel('Location').fill(location);
        await this.page.getByLabel('Price').fill(price);
        await this.page.getByLabel('Description').fill(description);
        await this.page.setInputFiles('input[type="file"]', imagePath);
        await this.page.getByRole('button', { name: 'Add Campground' }).click();
    }

    async editCampground(newTitle: string) {
        await this.page.getByRole('link', { name: 'Edit' }).click();
        await this.page.getByLabel('Title').fill(newTitle);
        await this.page.getByRole('button', { name: 'Update Campground' }).click();
    }
}



