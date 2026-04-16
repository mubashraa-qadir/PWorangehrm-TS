import { Locator, Page, expect } from "@playwright/test";
import { UserData } from "../Utils/datahelper";
 
 export class Login {
    /* Locators for Sign In page*/
   private username:  Locator;
   private passwordField:  Locator;
   private signInButton:  Locator;
   private page!: Page;


     /* Locators for My infopage*/
  private Myinfo: Locator;
  private firstname: Locator;
  private middlename: Locator;
  private lastname: Locator;
  private Employeeid: Locator;
  private DriverLicenseNumber: Locator;
  private LiscenseExpiryDate: Locator;
  private Nationality: Locator;
  private MaritalStatus: Locator;
  private DateOfBirth: Locator;
  private Gender: Locator;
  private savebutton1: Locator;

   constructor(page:Page) {
     this.username = page.locator("xpath=//input[@name='username']");
     this.passwordField = page.locator("xpath=//input[@name='password']");
     this.signInButton = page.locator("xpath=//button[@type='submit']");
     this.Myinfo = page.locator("xpath=//*[@href='/web/index.php/pim/viewMyDetails']");
     this.page = page; 
     this.firstname = page.locator("xpath=//input[@name='firstName']");
     this.middlename = page.locator("xpath=//input[@name='middleName']");
     this.lastname = page.locator("xpath=//input[@name='lastName']");
     this.Employeeid = page.locator("xpath=(//input[contains(@class,'oxd-input')])[5]");
     this.DriverLicenseNumber = page.locator("xpath=(//input[contains(@class,'oxd-input')])[7]");
     this.LiscenseExpiryDate = page.locator("xpath=(//input[contains(@class,'oxd-input')])[8]");
     this.Nationality = page.locator("xpath=(//div[contains(@class,'oxd-select-text')])[3]");
     this.MaritalStatus = page.locator("xpath=(//div[contains(@class,'oxd-select-text')])[6]");
     this.DateOfBirth = page.locator("xpath=(//input[contains(@class,'oxd-input')])[9]");
     this.Gender = page.locator("xpath=(//div[contains(@class,'oxd-radio')])[2]");
     this.savebutton1 = page.locator("xpath=(//button[@type='submit'])[1]");
           }
  async signIn(username: string, password: string) {
    await this.username.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
 }
async MyInfopage(){
  await this.Myinfo.click();
}
  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }
async UpdateMyInfo(userdata: UserData) {
  await this.firstname.fill(userdata.firstName);
  await this.middlename.fill(userdata.middleName);
  await this.lastname.fill(userdata.lastName);
  await this.Employeeid.fill(userdata.Employeeid);
   await this.Nationality.click();
  await this.page.locator("//div[@role='option']").first().waitFor();
  await this.page.locator(`//div[@role='option']//span[text()='${userdata.nationality}']`).click();
  await this.MaritalStatus.click();
  await this.DateOfBirth.fill("1990-01-01");
  await this.savebutton1.click();
}
//async Getmarkasfavbutton(){
  //return this.MarkAsFavbutton;

//}

};