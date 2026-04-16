import {expect, test} from "@playwright/test";
import { Login } from "../Pages/Login.ts";
import { generateRandomName } from '../Utils/datahelper.ts';


 
 test("Testing Login Page", async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const login = new Login(page);  
   await login.signIn("Admin", "admin123");
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
   await login.MyInfopage();
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
   await login.scrollToBottom();
   const userdata = generateRandomName();
  await login.UpdateMyInfo(userdata);    


 });
