import axios from 'axios';

const state = {
  regions: [],
};

const getters = {
  allRegions: (state) => state.regions,
};

const actions = {
  async fetchRegions({ commit }) {
    const response = await axios.get('https://flask-app-hf4n2lmciq-ew.a.run.app/form/region');
    commit('setRegions', response.data);
  },
};

const mutations = {
  setRegions: (state, regions) => (state.regions = regions),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
