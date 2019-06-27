
export default {

  namespace: 'home_store',

  state: {
    g_block: true,
    eye_isok: true,
    eye_isokOne: true,
    financialData: {},
    financialIsok: false,
    financialMyEyeisok: true,
    loing_isok: true,
    InsHeadTitle: "苏宁金融",
    hashval: "",
    channelnum: 0,
    insData: []
  },

  reducers: {
    save(state, action) {
      return { ...state, g_block: action.g_block }
    },
    eye(state, action) {
      return { ...state, eye_isok: action.eye_isok, eye_isokOne: action.eye_isokOne }
    },
    financialMyEye(state, action) {
      return { ...state, financialMyEyeisok: action.financialMyEyeisok }
    },
    financial(state, action) {
      return { ...state, financialData: action.financialData, financialIsok: action.financialIsok }
    },
    loingShow(state, action) {
      return { ...state, loing_isok: action.loing_isok }
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