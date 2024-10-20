import React from 'react';

const Info = () => {
  return (
    <div>
      <h1>Canvas Pet Extension</h1>
      
      <h2>About the Project</h2>
      <p>
        The Canvas Pet extension is a fun and interactive way to keep track of your Canvas assignments. 
        As you complete tasks on your To-Do list, your virtual pet grows and thrives! This project was 
        developed as part of a hackathon to encourage productivity while adding a touch of enjoyment to 
        completing coursework.
      </p>
      
      {/* <h2>Hackathon Project</h2>
      <p>
        This extension was created during a hackathon event, where the team focused on building a motivational 
        tool that integrates with Canvas. The goal was to make academic tasks more engaging by rewarding users 
        with points and virtual pet growth as they complete their assignments. 
      </p> */}

      <h2>Developers</h2>
      <ul>
        <li>Rida Adhami</li>
        <li>Lizzy Vologzhanin</li>
        <li>Kshitij Soni</li>
      </ul>
    </div>
  );
};

export default Info;
