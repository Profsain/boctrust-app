// calculator functions
const interestRate = (amount, days, rate) => {
    const month = days / 30;
    const rateValue = rate / 100;
    const interest = amount * rateValue * month;
    return interest;
};
  
export default interestRate;
