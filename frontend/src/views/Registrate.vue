<template>
  <div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Username" prop="Username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
              <el-form-item label="Firstname" prop="firstname">
          <el-input type="text" v-model="ruleForm2.firstname" auto-complete="off"></el-input>
        </el-form-item>
          <el-form-item label="Secondname" prop="secondname">
            <el-input type="text" v-model="ruleForm2.secondname" auto-complete="off"></el-input>
          </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm2.age"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
        <el-button @click="resetForm('ruleForm2')">Reset</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
    import axios from '../my-axios';
    export default {


        data() {

            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Please input the age'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please input digits'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Age must be greater than 18'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                }/* else if (value !== this.ruleForm2.password) {
                    callback(new Error('Two inputs don\'t match!'));
                }*/ else {
                    callback();
                }

            };
            return {

                ruleForm2: {
                    username:'',
                    firstname: '',
                    secondname:'',
                    inform:'',
                    password: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]

                }
            };

        },
    methods: {
        submitForm(formName) {
            axios.post('/registration', this.User)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
        async postss() {
            try {
                await axios.post(`/registration`, this.ruleForm);

            } catch (e) {
                this.errors.push(e)
            }
        },
    }


</script>