import { createStore } from 'vuex';
import region from './modules/region';
import departement from './modules/departement';
import commune from './modules/commune';

export default createStore({
  modules: {
    region,
    departement,
    commune,
  },
});
