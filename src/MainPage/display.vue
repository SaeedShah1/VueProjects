<template>

<el-form ref="form" :model="form" label-width="130px">    
    <div class="sectioncontent">
    <fieldset class="feildset">
    
     <el-row>
        
  <el-col :span="8" style=""
            ><el-form-item label="Transfered To : " class="alignLeft">
                <el-input  v-model="form.creditCardNo" style="width:38vw; margin-left: 5vw" size="small" disabled ></el-input> 
               
                
                </el-form-item>
                   </el-col>
 </el-row>

 <el-row>
        
  <el-col :span="8" style=""
            ><el-form-item label="Title">
                <el-input v-model="form.title" style="width:38vw; margin-left: 5vw" size="small" disabled></el-input> 
                </el-form-item>
                   </el-col>
 </el-row>


  
<div class="sectioncontent">
      <fieldset class="feildset">
   <el-row >
       
<el-col :span="18">
       <router-link to="/">
       <el-button class="okBtn" size="small" >OK</el-button>
       </router-link>
</el-col>
<el-col :span="5">
        

       <router-link to="/details">
       <el-button class="okBtn" size="small" @click="addData()">Back</el-button>
       </router-link>
       
       <router-link to="/">
       <el-button  style="margin-left: 1vw"  size="small">Exit</el-button>
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
    computed : mapGetters(['getNext'])
,
created(){
    if(this.getNext.data != "undefined" || this.getNext.data != null){
      this.form = this.getNext.data
    }
},
methods:{
   ...mapActions(["addfundDetails"]),

   addData(){
      this.addfundDetails(this.form)
   }

}

}
</script>