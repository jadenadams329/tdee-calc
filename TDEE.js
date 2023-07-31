class Person {
  constructor(name, age, height, weight, gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.bmr = null
    this.tdee = null
    this.acitivityLevel = [
      { name: "s", factor: 1.2 },
      { name: "la", factor: 1.375 },
      { name: "ma", factor: 1.55 },
      { name: "va", factor: 1.725 },
      { name: "sa", factor: 1.9 }
    ];
  }

  calculateBmr(age, height, weight, gender) {
    if (gender === "male") {
      this.bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      return this.bmr
    }
    if (gender === "female") {
      this.bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;\
      return this.bmr
    }
  }

  calculateTdee(acitivityLevel) {
    let activityFactor = this.findActivityLevel(acitivityLevel)
    this.calculateBmr();
    this.tdee = Math.ceil(this.bmr * activityFactor)
    return this.tdee
  }

  findActivityLevel(str) {
    let aFactor = null
    this.acitivityLevel.forEach(level => {
        if(str === level.name){
            console.log(level.name + ': ' + level.factor)
            aFactor = level.factor
        }
    })
    return aFactor
  }
}

const jaden = new Person("Jaden", 29, 183, 109, "male");
// console.log(jaden.calculateBmr(29, 183, 109, "male"))
console.log(jaden.calculateTdee("ma"))
