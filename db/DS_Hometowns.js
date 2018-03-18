class DS_Hometowns {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.initMockTowns();
  }
  initMockTowns() {
    this.storage.push({
      id: this.idNum,
      name: "Hilo",
      desc: "Ho brah dakine so rainy lose my slippahs all da time."
    })
    this.idNum++;
    this.storage.push({
      id: this.idNum,
      name: "Wichita",
      desc: "Mose cereal killarz in da Crunchy."
    })
    this.idNum++;
    this.storage.push({
      id: this.idNum,
      name: "Noodle Land",
      desc: "HOME Of DA SpAGHETTI WESTERZNRAZ ALCLAPS"
    })
    this.idNum++;
  }
  getAllTowns() {
    return this.storage.slice()
  }
  getTownById(id) {
    let result;
    console.log('id', id)
    this.storage.forEach( (town) => {
      if (town.id === id) {
        result = town
      }
    })
    console.log('result', result)
    return result
  }
  createHomeTown(name, desc) {
    this.storage.push({id: this.idNum, name, desc})
    this.idNum++;
  }
  deleteHomeTownById(id) {
    this.storage.slice().forEach( (town, idx) => {
      if (town.id === id) {
        this.storage.splice(idx, 1)
      }
    })
  }
}

module.exports = new DS_Hometowns()
