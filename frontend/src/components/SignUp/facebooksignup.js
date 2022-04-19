import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './styleSign.css'


function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
      const fullNameSeparado = res.name.split(" ")
      console.log(fullNameSeparado)

     // let nombre = fullNameSeparado[0]
      //let apellido = fullNameSeparado[1]
      //console.log(nombre)
      //console.log(apellido)

    const userData = {
      firstName:fullNameSeparado[0],
      lastName:fullNameSeparado[1] + "" + fullNameSeparado[2],
      email: res.email,
      imagenURL:res.picture.data.url,
      password: res.id,
      from: "facebook",
      country:props.country,
    }
    await props.signUpUsers(userData)
  }
  return (
      <div>
         <FacebookLogin
            cssClass="buttonsocial my-facebook-button-class"
            icon="fa-facebook"
            textButton=" Sign Up with Facebook"
            appId="383191546637976"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}

        />
     </div>
  );
}
const mapDispatchToProps = {
  signUpUsers: userActions.signUpUsers,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);