

function calculateTax(income, expenses) {

  if (typeof income !== "number" || income <= 0 || typeof expenses !== "number" || expenses <= 0) {
    return "Invalid Input"
  }
  let profit = income - expenses;
  let tax = profit * 0.2;
  return tax;
}

function sendNotication(email) {

  const [username, domainName] = email.split('@');
  if (typeof email !== 'string' || email.split('@').length !== 2) {
    return "invaild Email";
  }
  else if (!username || !domainName || !domainName.includes('.')) {
    return "invalid Email"
  }
  return `${username} sent you an email from ${domainName}`

}


function checkDigitsInName(name) {

  if (typeof name !== "string") {
    return "Invalid Input"
  }
  for (let char of name) {
    if (char >= '0' && char <= '9') {
      return true;
    }
  }
  return false;

}



function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return "Invalid Input"
  }
  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
    return "Invalid Input"
  }

  let finalScore = testScore + schoolGrade;

  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}





function waitingTime(waitingTimes, serialNumber) {

  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return "invalid Input"
  }

  let totoalInterviewTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totoalInterviewTime += waitingTimes[i];
  }

  const averageTime = Math.round(totoalInterviewTime / waitingTimes.length);
  const remainingPeople = serialNumber - waitingTimes.length - 1;

  let waitingTime = 0;
  if (remainingPeople > 0) {
    waitingTime = remainingPeople * averageTime;
  }
  return waitingTime;

}

