import { observable, action } from 'mobx';
import { generateUUID } from '@src/utils';

class LoginForm {

  @observable
  verifycode = `/server/verifycode?_t=${generateUUID()}`;

  @observable
  formData = {
    account: '',
    password: '',
    verifyCode: ''
  }

  @action.bound
  changeFormData(info) {
    this.formData = {
      ...this.formData,
      ...info
    };
  }

  @action.bound
  resetFormData() {
    this.formData = {
      ...this.formData,
      ...{
        account: '',
        password: '',
        verifyCode: ''
      }
    };
  }

  @action.bound
  resetVerifycode() {
    this.verifycode = `/server/verifycode?_t=${generateUUID()}`;
  }

}

export default LoginForm;
