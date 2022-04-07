const calcAge = (name, bd) => {
  let birthDate = new Date(bd);
  if (birthDate.getFullYear() < 2020) {
    let timeDiff = Date.now() - birthDate.getTime();
    let ageInDateForm = new Date(timeDiff);
    let ageInYears = ageInDateForm.getFullYear() - 1970;
    let ageInMonths = ageInDateForm.getMonth() + 1;
    let ageInDays = ageInDateForm.getUTCDate();
    console.log(
      `Hello ${name}. You are ${ageInYears} years, ${ageInMonths} Months & ${ageInDays} Days old.`
    );
  } else {
    console.log("Year can't be 2020 or higher!");
  }
};


module.exports = {
  calcAge: calcAge,
};
