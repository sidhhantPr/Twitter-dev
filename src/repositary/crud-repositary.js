class CrudRepositary {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const results = await this.model.create(data);
      return results;
    } catch (error) {
      console.log("error in creating data crud repo", error);
    }
  }
  async destroy(id) {
    try {
      await this.model.findByIdAndDelete(id);
    } catch (error) {
      console.log("error in in deleteing data from crud repo");
    }
  }
  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("error in in getting data from crud repo");
    }
  }
  async getAll() {
    try {
      const result = await this.model.find({});
      return result;
    } catch (error) {
      console.log("error in in getting ALL data from crud repo");
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("error in in updating data from crud repo");
    }
  }
}
export default CrudRepositary;
