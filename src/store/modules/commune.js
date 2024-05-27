import axios from 'axios';

const state = {
  communes: [],
};

const getters = {
  allCommunes: (state) => state.communes,
};

const actions = {
  async fetchCommunes({ commit }, departementCode) {
    const response = await axios.get(`https://flask-app-hf4n2lmciq-ew.a.run.app/form/commune?code=${departementCode}`);
    commit('setCommunes', response.data);
  },
};

const mutations = {
  setCommunes: (state, communes) => (state.communes = communes),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
