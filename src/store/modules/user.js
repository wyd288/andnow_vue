const state = {
  userName: '',
  pkUser: 0
};
const getters = {
  getUserName() {
    return state.userName;
  },
  getPkUser() {
    return state.pkUser;
  }
};
const mutations = {
  show(state) {
    //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true;
  },

  setUserInfo(state, newUser) {
    state.userName = newUser.name;
    state.pkUser = newUser.pkUser;
  }
};
const actions = {
  setNewUserInfo(context, newUser) {
    context.commit('setUserInfo', newUser);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
