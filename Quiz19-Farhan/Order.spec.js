import { test, expect } from '@playwright/test';
import { loginValid } from './Login.spec';
import { SearchValid } from './SearchProduk.spec';
async function OrderValid(page){

  await page.getByRole('link', { name: 'Domi Matras Kasur Mattress Latex SensICE - Sensasi Dingin Kasur Busa Latex' }).click();
  await page.getByRole('link', { name: 'Beli Sekarang' }).click();
  await page.locator('a').filter({ hasText: 'Lanjutkan' }).click();
  await page.getByRole('button', { name: 'Lihat Keranjang' }).click();
  await page.getByRole('heading', { name: 'Keranjang' }).click();
  await page.getByRole('link', { name: 'Lanjut ke Checkout' }).click();
  await page.getByRole('link', { name: 'Proses Sekarang' }).click();
  await page.getByRole('button', { name: 'Bayar' }).click();
  await new Promise(r => setTimeout(r, 5000));

  await page.locator('a').filter({ hasText: 'Danamon OnlineInternet Banking & m-Banking' }).click();
  await page.getByRole('button', { name: 'Pay now' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await expect(page.getByText('Payment Success')).toBeVisible();

  await page.getByRole('button', { name: 'Back to merchant website' }).click();

  await page.getByRole('link', { name: 'Lihat Daftar Pesanan' }).click();
  await expect(page.getByRole('link', { name: 'Sudah Bayar' })).toBeVisible();
};
test('test', async ({ page }) => {

    await loginValid(page);
    await SearchValid(page);
    await OrderValid(page);
    await page.close();
});


// module.exports = {OrderValid};