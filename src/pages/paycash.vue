<template>

  <el-form ref="form" :model="form" label-width="130px" >
    
    <div class="sectioncontent">
      <fieldset class="feildset">
        <el-row style="margin-top: 30px">
          
          <el-col :span="8"
            ><el-form-item label="Branch">
                <el-input v-model="form.branchCode" maxlength="4"></el-input> 
                </el-form-item>
                   </el-col>

                  <el-col :span="10">
                     <el-form-item>
                          <el-select
                v-model="form.space"
                placeholder="Select"
                style="width:25vw"
                :disabled = true
               >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
                     </el-form-item>
                 </el-col>
        </el-row>
    <el-row style="margin-top: 30px">
          <el-col :span="12"
            ><el-form-item label="Currency">
          <el-select
                v-model="form.space"
                placeholder="Select"
                
              >
                <el-option
                  v-for="cur in currencies"
                  :key="cur.currency"
                  :label="cur.label"
                  :value="cur.currency"
                  :disabled="cur.disabled"
                >
                </el-option>
          </el-select>
         
               </el-form-item
          ></el-col>
        
        
        </el-row>


       <el-row style="margin-top: 30px">
          <el-col :span="12"
            ><el-form-item label="Customer No." >
              <el-input v-model="form.space" style="width: 20vw"></el-input> </el-form-item
          ></el-col>
        
        <el-col :span="12">
      <el-radio-group v-model="form.space">
         <el-radio  label="A/C No"></el-radio> 
      
        <el-radio label="IBAN"></el-radio>
      </el-radio-group>
        </el-col>
      
        </el-row>
        
        
        <el-row>
          <el-col :span="12"
            ><el-form-item label="A/C No.">
              <el-select
                v-model="form.space"
                placeholder="Select"
                style="width: 40vw"
              >
                <el-option
                  v-for="acc in accounts"
                  :key="acc.account"
                  :label="acc.label"
                  :value="acc.account"
                  :disabled="acc.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </fieldset>
    </div>

    <div class="sectioncontent">
      <fieldset class="feildset">
        
       <router-link to="">
       <el-button class="okBtn" v-on:click="isOkPressed">OK</el-button>
       </router-link>
        
        <el-button class="backBtn">Exit</el-button>
      </fieldset>
    </div>
  </el-form>
</template>
<script>


//import { ref } from "vue";
//import Connection from '../RedisConfig/getConnection'


export default {
 
components: {},

data() {

      return {
   
   fundModel: {
    
      
      },
    


      accounts: ref([

        {account: "112233",
         label:"112233"
        },
        {account: "4444444",
         label:"4444444"},

        {
          account: "4554333",
         label:"4554333"
         },

         {account: "986887",
         label:"986887"
         },

        {account: "987545",
         label:"987545"
         }
      ]),
      currencies: ref([
        
        {currency: "PKR",
         label:"PKR"
        },
        {currency: "USD",
         label:"USD"},

        {
          currency: "EURO",
         label:"EURO"
         },

         {currency: "POUND",
         label:"POUND"
         },

        {currency: "INDR",
         label:"INDR"
         },

      ]),

      currency: ref(""),

      options: ref([
        {
          value: "Branch1",
          label: "Branch1",
        }
      ]),

      value: ref(""),
    };
  },
  
  methods: {
    
    getClient() {
       try{
        
         let con = new Connection();
         console.log(con)
         //con.getConnection(branch);

    

}
    catch(err){
      console.log("In errrrr")
      console.log(err)
    }
    },


    isOkPressed(){
      
       //this.getClient(this.form.branchCode)
       console.log("Pressed")


      },
  },

};


</script>
