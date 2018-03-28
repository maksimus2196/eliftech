<template>
    <div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
            <el-form-item label="Username" prop="Username">
                <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
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

            return {

                ruleForm2: {
                    username: '',
                    password: '',
                },
            }

        },
        methods: {
            submitForm(ruleForm2) {

                this.$refs[ruleForm2].validate((valid) => {
                    if (valid) {
                        try {
                            axios.post(`/authorize`, this.ruleForm2);
                            this.User.authenticated = true;
                            localStorage.setItem('jwtToken', response.data.token);
                            localStorage.setItem('username', response.data.username);
                            window.location.href = '/';
                            console.log(this.User);
                        } catch (e) {
                            this.errors.push(e)
                        }

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
        }

    }


</script>