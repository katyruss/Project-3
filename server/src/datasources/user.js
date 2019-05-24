const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
    constructor({ store }) {
      super();
      this.store = store;
    }
   
    initialize(config) {
      this.context = config.context;
    }
   
   async saved({ resultID }) {
      const authId = this.context.user.id;
      if (!authId) return;
   
      let results = [];
   
      for (const resultID of resultID) {
        const res = await this.saved({ resultID });
        if (res) results.push(res);
      }
   
      return results;
    }
   
    async unSaved({ resultID }) {
      const userId = this.context.user.id;
      return !!this.store.saved.destroy({ where: { userId, resultID } });
    }
   
    async getresultIDByUser() {
      const userId = this.context.user.id;
      const found = await this.store.saved.findAll({
        where: { userId },
      });
      return found && found.length
        ? found.map(l => l.dataValues.resultID).filter(l => !!l)
        : [];
    }
   
    async isBookedOnLaunch({ launchId }) {
      if (!this.context || !this.context.user) return false;
      const userId = this.context.user.id;
      const found = await this.store.trips.findAll({
        where: { userId, launchId },
      });
      return found && found.length > 0;
    }
   }
   
   module.exports = UserAPI;
