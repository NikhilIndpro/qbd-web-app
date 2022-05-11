/**
 *
 * LogIn
 *
 */
import React from 'react';
import { useInjectSaga, useInjectReducer } from 'redux-injectors';
import Dropdown from 'react-bootstrap/Dropdown';
import saga from './saga';
import reducer from './reducer';
import { useLogIn } from './hooks';
import logo from '../../../Assets/IDI-Logotyp-min.svg';
import en from '../../../css/img/flags/en-gb.png';
import sv from '../../../css/img/flags/sv-se.png';
export function LogIn() {
  const injectorkey = 'logIn';
  useInjectReducer({ key: injectorkey, reducer });
  useInjectSaga({ key: injectorkey, saga });

  const {
    formik,
    forgotPassword,
    forgotPasswordEmail,
    forgotPasswordPage,
    setforgotPasswordPage,
    setforgotPasswordEmail,
    changeLanguage,
    selectedLanguage,
    languageConstant,
    shoowInvalidUserError,
    logInKey,
    forgetPasswordKey,
    noWorriesKey,
    toResetPassWordKey,
    hereKey,
    ForgetPasswordPageKey,
    EnterEmailKey,
    goBackKey,
    submitKey,
    InvalidUserNameOrPasswordKey,
    userNameKey,
    passwordKey,
    requiredKey
  } = useLogIn();
    
  console.log("formik", formik.values);
  return (
    <div className="login">
      <div className="content">
        <div className="login-navbar">
          <img
            src={logo}
            alt="logo"
            className="img-responsive"
            style={{ padding: '10px', width: '200px' }}
          />
          <div className="language_dropdown">
          <Dropdown onSelect={changeLanguage} autoClose="inside" > 
            <Dropdown.Toggle  variant="white" id="dropdown-autoclose-inside" className="drop-toggle">
              <img
                src={selectedLanguage === languageConstant.english ? en : sv}
                alt="lang"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu flip bsPrefix="dropdown-menu" >
              <Dropdown.Item
                as="button"
                eventKey={
                  selectedLanguage === languageConstant.english
                    ? languageConstant.swedish
                    : languageConstant.english
                }
                
              >
                <div className="language-drop">
                  <img
                    src={
                      selectedLanguage === languageConstant.english ? sv : en
                    }
                    alt="lang"
                  />
                  <p>
                    {selectedLanguage === languageConstant.english
                      ? 'Swedish'
                      : 'English'}
                  </p>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>
        <br />

       {shoowInvalidUserError && <div className="alert alert-danger">
            <strong>Error!</strong>{InvalidUserNameOrPasswordKey && InvalidUserNameOrPasswordKey.value}
        </div>}
        <div className="portlet">
          <div className="portlet-body">
            {!forgotPasswordPage && (
              <form onSubmit={formik.handleSubmit} className="login-form">
                <h3 className="form-title">{logInKey && logInKey.value}</h3>
                <div className="form-group">
                  <div className="input-icon">
                    <i className="icon-user"></i>
                    <input
                      className="form-control placeholder-no-fix required email valid"
                      placeholder={userNameKey && userNameKey.value}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      name="email"
                      id="email"
                    />
                  </div>
                <span>  {formik.touched.email && formik.errors.email ? <p style={{color: 'red'}}>{formik.errors.email}</p> : null}</span>
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <i className="icon-lock"></i>
                    <input
                      className="form-control placeholder-no-fix required valid"
                      placeholder={passwordKey && passwordKey.value}
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      name="password"
                      id="password"
                    />
                  </div>
                  <span>  {formik.touched.password && formik.errors.password ? <p style={{color: 'red'}}>{formik.errors.password}</p> : null}</span>

                </div>
                <button type="submit" className="btn btn-info">
                  {' '}
                  {logInKey && logInKey.value}{' '}
                </button>
                <div className="forget-password">
                  <h4>{forgetPasswordKey && forgetPasswordKey.value}</h4>
                  <p>
                    {noWorriesKey && noWorriesKey.value}{' '}
                    <a
                      onClick={() => setforgotPasswordPage(true)}
                      id="forget-password"
                      style={{color: 'green'}}
                    >
                      {hereKey && hereKey.value}
                    </a>
                    &#9; {toResetPassWordKey && toResetPassWordKey.value}
                  </p>
                </div>
              </form>
            )}
            {forgotPasswordPage && (
              <form className="forget-form">
                <h3 className="forget-form-header">
                  {ForgetPasswordPageKey && ForgetPasswordPageKey.value}
                </h3>
                <div className="forget-form-tag">
                  {EnterEmailKey && EnterEmailKey.value}
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <i className="icon-envelope"></i>
                    <input
                      className="forget-form-input "
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={forgotPasswordEmail}
                      onChange={e => setforgotPasswordEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    id="back-btn"
                    className="btn btn-default"
                    onClick={() => setforgotPasswordPage(false)}
                  >
                    <i className="m-icon-swapleft"></i>{goBackKey && goBackKey.value}
                  </button>
                  <button
                    type="submit"
                    className="btn btn-info pull-right btnSendEmail"
                    onClick={forgotPassword}
                  >
                    {submitKey && submitKey.value}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
