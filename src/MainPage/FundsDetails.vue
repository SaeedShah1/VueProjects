<template>

 <el-form ref="form" :model="form" label-width="130px">    
    <div class="sectioncontent">
    <fieldset class="feildset">


    <div class="sectioncontent">
    <fieldset class="feildset">
     <legend style="margin-left:-25vw">
     <p>Credit Card Info</p>
     </legend>
     
<el-row style="margin-top: -20px;">
        
  <el-col :span="8" style=""
            ><el-form-item label="Credit Number" class="alignLeft">
                <el-input  v-model="form.creditCardNo" style="width:38vw; margin-left: 5vw" size="small" disabled ></el-input> 
               
                
                </el-form-item>
                   </el-col>
 </el-row>

<el-row style="margin-top: -10px;">
        
  <el-col :span="8" style=""
            ><el-form-item label="Credit Title">
                <el-input v-model="form.cardtype" style="width:38vw; margin-left: 5vw" size="small" disabled></el-input> 
                </el-form-item>
                   </el-col>
 </el-row>

      </fieldset>
          </div>


    <div class="sectioncontent">
    <fieldset class="feildset">
     <legend style="margin-left:-25vw">
     <p>Transfer From</p>
     </legend>
     
<el-row style="margin-top: -20px;">
        
  <el-col :span="8" style=""
            ><el-form-item label="Branch">
                <el-input v-model="form.customerBranch" style="width:38vw; margin-left: 5vw" size="small" disabled></el-input> 
                </el-form-item>
                   </el-col>
 </el-row>

<el-row style="margin-top: -10px;">
        
  <el-col :span="8" style=""
            ><el-form-item label="A/C No">
                <el-input v-model="form.accountNumber" style="width:38vw; margin-left: 5vw" size="small" disabled></el-input> 
                </el-form-item>
                   </el-col>
 </el-row>

 <el-row style="margin-top: -10px;">
        
  <el-col :span="8" style=""
            ><el-form-item label="Title">
                <el-input v-model="form.title" style="width:38vw; margin-left: 5vw" size="small"></el-input> 
                </el-form-item>
                   </el-col>
 </el-row>

      </fieldset>
          </div>

    <div class="sectioncontent">
    <fieldset class="feildset">
     
     
<el-row style="margin-top: 10px;">
        
  <el-col :span="8" 
            ><el-form-item label="Cheque No" style="margin-top:-10px">
                <el-input v-model="form.chequeNo" style="width:15vw; margin-left: 5vw" size="small"></el-input> 
                </el-form-item> 
            
             <el-form-item label="Pay-In-Slip-No" style="margin-top:-10px">
                <el-input v-model="form.payInSlipNo" style="width:15vw; margin-left: 5vw" size="small"></el-input> 
                </el-form-item>
                
                <el-form-item label="Amount" style="margin-top:-10px">
                <el-input  v-model="form.amount" style="width:15vw; margin-left: 5vw" size="small"></el-input> 
                </el-form-item>
              
              <el-form-item label="Narration" style="margin-top:-10px">
                <el-input v-model="form.narration1" style="width:15vw; margin-left: 5vw" size="small"></el-input> 
                </el-form-item>
                  

                   </el-col>
 
 

        
  <el-col :span="8" 
            ><el-form-item label="Cheque Date" style="margin-left: 10vw;margin-top:-10px">
                <el-date-picker v-model="form.chequeDate" style="width:15vw;" size="small"></el-date-picker> 
                </el-form-item> 
            
             <el-form-item label="Pay-In-Slip-Date" style="margin-left: 10vw;margin-top:-10px">
                <el-date-picker v-model="form.payInSlipDate" style="width:15vw;" size="small"></el-date-picker> 
                </el-form-item>
                
                <el-form-item label="Charges" style="margin-left: 10vw;margin-top:-10px">
                <el-input v-model="form.charges" style="width:15vw;" size="small"></el-input> 
                </el-form-item>
              
              <el-form-item label="Narration2" style="margin-left: 10vw;margin-top:-10px">
                <el-input  v-model="form.narration2" style="width:15vw;" size="small"></el-input> 
                </el-form-item>
                  

                   </el-col>



 </el-row>


 
 
      </fieldset>
          </div>

<div class="sectioncontent">
      <fieldset class="feildset">
   <el-row >
       
<el-col :span="18">
       <router-link to="/display">
       <el-button class="okBtn" size="small" @click="addData()">OK</el-button>
       </router-link>
</el-col>
<el-col :span="5">
        <router-link to="/details">
       <el-button class="okBtn" size="small" >Signature</el-button>
       </router-link>

       <router-link to="/details">
       <el-button class="backBtn" size="small">Exit</el-button>
       </router-link>

</el-col>
   </el-row>
      </fieldset>
</div>


      </fieldset>
    </div>
 </el-form>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'


export default {
 
data(){
   screenID:'s44'
   return{
       form:{
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
},

 computed: mapGetters(["fDetails"])
,
methods:{
   ...mapActions(["getFunds","addNext"]),

   addData(){
      this.addNext(this.form)
   }

},
created(){
   
   this.getFunds(); 
   if(this.fDetails.data != 'undefined' || this.fDetails.data != null){
   
    this.form = this.fDetails.data

   }
   console.log(this.fDetails.data,"in other component")  

} 

}
</script>