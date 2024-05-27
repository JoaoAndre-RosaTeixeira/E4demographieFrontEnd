import axios from 'axios';

const state = {
  prediction: null,
};

const getters = {
  prediction: (state) => state.prediction,
};

const actions = {
  async fetchPrediction({ commit }, { entity_type, code, year }) {
    const response = await axios.get(`https://flask-app-hf4n2lmciq-ew.a.run.app/predict/${entity_type}?code=${code}&year=${year}`);
    commit('setPrediction', response.data);
    return response.data;
  },
  async trainModel(_, { entity_type, code }) {
    await axios.get(`https://flask-app-hf4n2lmciq-ew.a.run.app/train/${entity_type}?code=${code}`);
  },
};

const mutations = {
  setPrediction(state, prediction) {
    state.prediction = prediction;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
