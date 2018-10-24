<script>
import { Form } from 'ant-design-vue';

const NormalLoginForm = {
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-form id='components-form-demo-normal-login' onSubmit={this.handleSubmit} class='login-form'>
        <a-form-item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <a-input prefix={<a-icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <a-input prefix={<a-icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <a-checkbox>Remember me</a-checkbox>
          )}
          <a class='login-form-forgot' href=''>Forgot password</a>
          <a-button type='primary' htmlType='submit' class='login-form-button'>
            Log in
          </a-button>
          Or <a href='/register'>register now!</a>
        </a-form-item>
      </a-form>
    )
  },
}

export default Form.create()(NormalLoginForm)
</script>
<style>
#components-form-demo-normal-login .login-form {
  
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  background: #;
  width: 100%;
}
</style>






















<!--<template>
    <a-form layout='inline' @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
  <template v-if="form">
    <a-form-item
      :validateStatus="userNameError() ? 'error' : ''"
      :help="userNameError() || ''"
      fieldDecoratorId="userName"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your username!' }]}"
    >
      <a-input placeholder='Username'>
        <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item
      :validateStatus="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
      fieldDecoratorId="password"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}"
    >
      <a-input type='password' placeholder='Password'>
        <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type='primary'
        htmlType='submit'
        :disabled="hasErrors(form.getFieldsError())"
      >
        Log in
      </a-button>
    </a-form-item>
    
    <a-form-item>
      <a-button
        type='primary'
        htmlType='submit'
        :disabled="hasErrors(form.getFieldsError())"
      >
        Register
      </a-button>
    </a-form-item>
  </template>
</a-form>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      hasErrors,
      form: null,
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}


</script>

<style>

</style>-->

