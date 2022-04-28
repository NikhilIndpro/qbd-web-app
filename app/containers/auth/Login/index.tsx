/**
 *
 * LogIn
 *
 */
import React from 'react';
import { useInjectSaga } from 'redux-injectors';
import saga from './saga';
import { useLogIn } from './hooks';
import logo from '../../../Assets/IDI-Logotyp-min.svg';
export function LogIn() {
  useInjectSaga({ key: 'logIn', saga });

  const { formik } = useLogIn();
  console.log(formik.values);
  return (
    <div className="login">
      <div className="logo"></div>
      <div className="content">
        <ul className="nav navbar-nav pull-right"></ul>
        <div className="left">
          <img
            src={logo}
            alt="logo"
            className="img-responsive"
            style={{ padding: '10px', width: '200px' }}
          />
        </div>
        <br />
        <div className="portlet">
          <div className="portlet-body">
            <form onSubmit={formik.handleSubmit} className="login-form">
              <h3 className="form-title">Login</h3>
              <div className="form-group">
                <div className="input-icon">
                  <i className="icon-user"></i>
                  <input
                    className="form-control placeholder-no-fix required email valid"
                    placeholder="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-icon">
                  <i className="icon-lock"></i>
                  <input
                    className="form-control placeholder-no-fix required valid"
                    placeholder="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-info">
                {' '}
                Login{' '}
              </button>
              <div className="forget-password">
                <h4>Forgot your password ?</h4>
                <p>
                  no worries, click{' '}
                  <a href="javascript:;" id="forget-password">
                    here 
                  </a> 
                  &#9; to reset your password.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
