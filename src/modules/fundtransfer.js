import axios from "axios";

const state = {
    
    fund:[],
    branches: [],
    cardTypes: [],
    fundDetails:{
        data:{
        cardtype: 'Green',
     creditCardNo: '000'
}
    },
    next:{
        data:{
            
            cardtype: null,
            accountNumber : null,
            creditCardNo : null,
            customerBranch : null,
            title:null,
            chequeNo:null,
            chequeDate:null,
            payInSlipNo:null,
            payInSlipDate:null,
            amount:null,
            charges:null,
            narration1:null,
            narration2:null
         
        }
    }
};
const getters = {
allFunds: state => state.fund,
allbranches: state => state.branches,
allcards: state => state.cardTypes,
fDetails: state => state.fundDetails,
getNext: state => state.next
};
const actions = {
async getcardTypes({commit}){
      const response = await axios.get("http://localhost:3000/cardTypes");
     commit('setcards', response.data)
},

    async getBranches({commit}){
  const response = await axios.get("http://localhost:3000/branches");
  commit('setbranches', response.data)
    },
    
    async getFunds({commit}){
        const response = await axios.get("http://localhost:3000/fundDetails");
      // console.log("in getFunds", response.data)
        commit("setFunds",response.data);

    },
    async addfundDetails({commit}, data){
       //  const response = await axios.post("http://localhost:3000/fundDetails",{data})
         console.log(data, "in addfund")
         commit('addfundsDetails',{data})
    },
    async addNext({commit}, data){
        //  const response = await axios.post("http://localhost:3000/fundDetails",{data})
          console.log(data, "in addNext")
          commit('addNext',{data})
     },
};
const mutations ={
    setFunds: (state,d) =>(state.fundDetails = d),
    setbranches: (state,branches) => (state.branches = branches),
    setcards : (state,cardTypes) => (state.cardTypes = cardTypes),
    addfundsDetails: (state, details) => (state.fundDetails = details),
    addNext: (state,data) => (state.next = data)
};

export default{
 
    state,
    getters,
    actions,
    mutations,
     
};
