import { test, expect } from '@playwright/test';
import { loginValid } from './Login.spec';
async function SearchValid(page){
  await page.getByRole('link', { name: 'Jualan apa sekarang ?' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/search');
  await expect(page.getByPlaceholder('Cari Produk di Evermos…')).toBeEditable();

  await page.getByPlaceholder('Cari Produk di Evermos…').fill('Kasur');
  await page.getByPlaceholder('Cari Produk di Evermos…').press('Enter');

  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=Kasur&orderBy=0&navSource=search_result');
  await expect(page.getByPlaceholder('Cari Produk di Evermos…')).toHaveValue('Kasur');
  await expect(page.locator('.productItems__row')).toBeVisible();
};
test('test search produk', async ({ page }) => {

    await loginValid(page);
    await SearchValid(page);
    await page.close();

});

module.exports = {SearchValid};