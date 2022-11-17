import { test, expect } from '@playwright/test';
async function loginValid(page) {
  await page.goto('https://staging.evermosa2z.com/login');
  
  await expect(page.getByText('Masukkan nomor telepon dan kata sandi yang sudah kamu daftarkan di Evermos')).toBeVisible();
  //Login
  const phone = page.getByPlaceholder('Nomor Telepon Anda');
  await expect(phone).toBeEditable();
  await page.getByPlaceholder('Nomor Telepon Anda').click();
  await page.getByPlaceholder('Nomor Telepon Anda').fill('62696969000');
  await expect(page.getByPlaceholder('Nomor Telepon Anda')).toHaveValue('62696969000');

  const password = page.getByPlaceholder('Kata Sandi Anda');
  await expect(password).toBeEditable();
  await page.getByPlaceholder('Kata Sandi Anda').click();
  await page.getByPlaceholder('Kata Sandi Anda').fill('123123123');
  await expect(page.getByPlaceholder('Kata Sandi Anda')).toHaveValue('123123123');

  const login_button = page.getByRole('button', {name: 'Masuk'});
  await expect(login_button).toBeEnabled();
  await page.getByRole('button', {name:'Masuk'}).click();

  await new Promise(r => setTimeout(r, 5000));
  await expect(page).toHaveURL('https://staging.evermosa2z.com/catalog') ;

};
test('test Login Valid', async ({ page }) => {
  await loginValid(page);
  await page.close();
});
//export function loginValid
module.exports = {loginValid};