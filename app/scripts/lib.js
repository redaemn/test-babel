var privVar = 'hello';

export default {
  getVar: () => {
      return privVar;
  },
  setVar: () => {
      privVar = 'world';
  }
};
