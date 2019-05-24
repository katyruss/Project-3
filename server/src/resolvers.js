module.exports = {
    Query: {
      breweries: async (_, { pageSize =20 , after }, { dataSources }) => {
        const allBreweries = await dataSources.BreweryAPI.getAllBreweries();
    
    return {
          allBreweries,
      };

    },
    brewery: (_, { id }, { dataSources }) =>
        dataSources.breweryAPI.getBreweryByID({ breweryID: id }),
    me: async (_, __, { dataSources }) =>
    dataSources.userAPI.findOrCreateUser(),
    },

    Mutation: {
        saved: async (_, { resultID }), { dataSources }) => {
            const results = await dataSources.userAPI.saved({ resultID });
            const breweries = await dataSources.breweryAPI.getBreweryByID({
                resultID,
            });
            return {
                success: results && results.length === resultID.length,
                message: 
                    results.length === resultID.length
                    ? 'results saved successfully'
                    : 'results could not be saved',
                    breweries,
                };
        }
        unSaved: async (_, { resultID }, { dataSources })=> {
        const result = dataSources.userAPI.unSaved({ resultID });
        if (!result)
        return {
         success: false,
         message: 'failed to save',
       };

       const brewery = await dataSources.breweryAPI.getBreweryById({ breweryId });
       return {
       success: true,
       message: 'result saved',
       launches: [launch],
     };

     User: {
        trips: async (_, __, { dataSources }) => {
          // get ids of launches by user
          const launchIds = await dataSources.userAPI.getLaunchIdsByUser();
     
          if (!launchIds.length) return [];
     
          // look up those launches by their ids
          return (
            dataSources.launchAPI.getLaunchesByIds({
              launchIds,
            }) || []
          );




