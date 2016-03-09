var priv_var = 'hello';

export default {
  getVar: () => {
      return priv_var;
  },
  setVar: () => {
      priv_var = "world";
  }
};
