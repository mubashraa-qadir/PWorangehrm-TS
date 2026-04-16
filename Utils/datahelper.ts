export type UserData = {
  firstName: string;
  middleName: string;
  lastName: string;
  Employeeid: string;
  nationality: string;
  maritalStatus: string;
  dob: string;
  licenseExpiry: string;
};
export function generateRandomName(): UserData {
  const time = Date.now();
   const nationalities = ['Pakistani', 'Indian', 'American', 'British'];
  const maritalStatuses = ['Single', 'Married', 'Other'];

  function getRandomItem(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomDate(startYear: number, endYear: number) {
    const start = new Date(startYear, 0, 1);
    const end = new Date(endYear, 11, 31);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  }
  return {
    firstName: "User" + time,
    middleName: "Usermiddle" + time,
    lastName: "Test" + time,
    Employeeid: "E-" + time,
    nationality: getRandomItem(nationalities),
    maritalStatus: getRandomItem(maritalStatuses),
    dob: getRandomDate(1970, 2000),
    licenseExpiry: getRandomDate(2026, 2035)
  };
}