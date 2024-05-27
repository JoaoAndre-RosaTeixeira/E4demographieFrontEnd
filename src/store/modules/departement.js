import axios from 'axios';

const state = {
  departements: [],
};

const getters = {
  allDepartements: (state) => state.departements,
};

const actions = {
  async fetchDepartements({ commit }, regionCode) {
    const response = await axios.get(`https://flask-app-hf4n2lmciq-ew.a.run.app/form/departement?code=${regionCode}`);
    commit('setDepartements', response.data);
  },
};

const mutations = {
  setDepartements: (state, departements) => (state.departements = departements),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
