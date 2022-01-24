<template>

  <el-form ref="form" :model="form" label-width="130px">
    
    
    <div class="sectioncontent">
      <fieldset class="feildset">

          <div class="sectioncontent">
      <fieldset class="feildset">
  <legend style="margin-left: -15vw">
    <p style="font:Arial black; font-style: Bold">Credit Card payment through Cheque </p>
  </legend>
        <el-row style="margin-top: 5px">
          
              
                  <el-col :span="10">
                     <el-form-item label="Card Type">
                          <el-select
                v-model="form.cardtype"
                placeholder="Select"
                style="width:38vw; margin-left: 5vw"
                size="small"
            
               >
                <el-option
                  v-for="item in allcards"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
                     </el-form-item>
                 </el-col>
        </el-row>
 
 <el-row>
        
  <el-col :span="8"
            ><el-form-item label="Credit No">
                <el-input  v-model="CrNo1" maxlength="6" style="width:10vw; margin-left: 5vw" size="small"></el-input> 
               
                
                </el-form-item>
                   </el-col>
<el-col :span="8"
            ><el-form-item >
                <el-input v-model="CrNo2" style="width:23vw;" size="small"></el-input> 
               
                
                </el-form-item>
                   </el-col>


 </el-row>
      </fieldset>
 </div>

<div class="sectioncontent">
      <fieldset class="feildset">
       <legend style="margin-left: -25vw">
           Transfer
       </legend>
<el-row >
          
              
                  <el-col :span="10">
                     <el-form-item label="Customer Branch">
                          <el-select
                v-model="form.customerBranch"
                placeholder="Select"
                style="width:38vw; margin-left: 5vw"
                size="small"
                
               >
                <el-option
                  v-for="item in allbranches"
                  :key="item.id"
                  :label="item.BranchName"
                  :value="item.BranchName"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
                     </el-form-item>
                 </el-col>
        </el-row>
 
 <el-row >
        
  <el-col :span="8"
            ><el-form-item label="Account Number">
                <el-input  v-model="form.accountNumber" style="width:38vw; margin-left: 5vw" size="small"></el-input> 
               
                
                </el-form-item>
                   </el-col>


 </el-row>

      </fieldset>
</div>


<div class="sectioncontent">
      <fieldset class="feildset">
       <router-link to="/details">
       <el-button class="okBtn" size="small" @click="addData()">OK</el-button>
       </router-link>
    
        <el-button class="backBtn" size="small">Exit</el-button>

      </fieldset>
</div>




      </fieldset>
    </div>
  </el-form>
</template>
<script>


import {mapGetters, mapActions} from 'vuex'

  
export default {
name : "fundTransfer", 
components: {},

data() {
   screenID :'s34'      
      return {

   CrNo1: null,
   CrNo2: null,
   form: {
    
       cardtype: null,
       accountNumber : null,
       creditCardNo : null,
       customerBranch : null
      
      },
      
      cardtypes: [
          
      ]
    
     

      }

      },
      

      computed: mapGetters(["allBFunds","allbranches","allcards"])
,
methods:{
   ...mapActions(["getFunds","getBranches","getcardTypes","addfundDetails"]),

   addData(){
    this.form.creditCardNo = this.CrNo1 +'-' + this.CrNo2;
     this.addfundDetails(this.form)
     
   }
},
created(){
   this.getFunds();
   this.getBranches();
   this.getcardTypes();
   
     
   

    
   
}
      


}
</script>
