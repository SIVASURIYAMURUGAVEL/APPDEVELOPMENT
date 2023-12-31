import React from 'react';
import './MyAccount.css';
export default function MyAccount() {
  return (
    <div className="myaccount-main-content">
      <div className="myaccount-welcome">
        <h1>Welcome Sivasuriya M</h1>
        <p>
          Here, you can effortlessly manage your DIY projects, stay updated on
          recent activities, and access various tools and features to enhance
          your DIY experience.
        </p>
      </div>
      <div className="myaccount-user-details">
        <h2>User Detail</h2>
        <div className="myaccount-user-inner">
          <p>Sivasuriya M</p>
          <p>suriyasiva7964@gmail.com</p>
        </div>
        <input type="button" value="Edit" />
      </div>
      <div className="myaccount-social">
        <h2>Social</h2>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <p>Instagram : </p>
            <p className="myaccount-links">
              https://www.instagram.com/__.S__i__V__a/
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>X : </p>
            <p className="myaccount-links">
              https://www.twitter.com/Siva_suriya/
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>Youtube : </p>
            <p className="myaccount-links">
              https://www.youtube.com/Sivasuriya/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
