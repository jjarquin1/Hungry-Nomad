import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {
      username,
      bio
    } = props.user;

return(
<aside className="profile-card">
  
<header>
  
  <a href="https://tutsplus.com">
    <img src="https://scontent-fra3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11174970_10204130403759697_3987981136837199734_n.jpg?oh=c324eee77a6c0a10052b11ee771aa2c4&oe=55E867E1"/>
  </a>

  <h1>{username}</h1>
  
  <h2>{title}</h2>

</header>

<div classNameName="profile-bio">
  
  <p>{bio}</p>
  
</div>

<div classNameName="profile-social-links">
  
  <li>
    <a href="https://twitter.com/tutsplus">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
    </a>
  </li>
  
  <li>
    <a href="https://envato.com">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
    </a>
  </li>
  
  <li>
    <a href="https://codepen.io/tutsplus">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
    </a>
  </li>
  
</div>

</aside>)};
