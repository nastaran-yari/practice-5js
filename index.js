const array = [];


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

const opdToArr = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const karekter = ["n", "s", "t", "r"];
  const randomKrt =
    karekter[Math.floor(Math.random() * 4)] +
    karekter[Math.floor(Math.random() * 4)] +
    karekter[Math.floor(Math.random() * 4)] +
    karekter[Math.floor(Math.random() * 4)];
  const randomDate = (169124533).toString() + randomIntFromInterval(1000 , 4000);
  return {
    randomNum,
    randomKrt,
    randomDate : new Date(+randomDate)
  }
};

opdToArr()
const opdTofun = () => {
    array.push(opdToArr)
}
