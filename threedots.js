const ages = [12,23,13,14];
const ages1 = [34,32,31];
// const allAges = ages.concat(ages1);
const allAges2 =[...ages, 5, ...ages1]
console.log(allAges2)

 //old system
const business = 450;
const sochib = 350;
const minister = 250;
const result = Math.max(business, sochib, minister);
console.log(result);

//threedots 

const takapoisa = [550, 650, 450, 350,];
const result1 =Math.max(...takapoisa);
console.log(result1)