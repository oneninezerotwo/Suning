
export default {

  namespace: 'home_store',

  state: {
    g_block: true,
    InsHeadTitle: "苏宁金融",
    hashval: "",
    channelnum: 0,
    insData: []
  },

  reducers: {
    save(state, action) {
      return { ...state, g_block: action.g_block }
    },
    sethashval(state, action) {
      return { ...state, hashval: action.hashval }
    },
    setchannelnum(state, action) {
      //设置保险的产品列表的高亮
      return { ...state, channelnum: action.channelnum }
    },
    setchannelData(state, action) {
      //在InsListChannel根据点击的某个去调用数据
      return { ...state, insData: action.insData }
    }
  },

};