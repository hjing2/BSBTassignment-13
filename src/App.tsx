import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'; 
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import HeroImage from './components/HeroImage';
import Img from './components/Img';
import Table from './components/Table';
import RadioButton from './components/RadioButton';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <h2>
        Haodan Jing Coding Assignment 12
      </h2>
      <h3>Button Component</h3>
      <Button text="Click Me" />
      <h3>Card Component</h3>
      <Card title="Card Title" content="Card Content" />
      <h3>Dropdown Component</h3>
      <Dropdown options={["Hello", "Hi", "How are you"]} />
      <h3>HeroImage Component</h3>
      <HeroImage src="https://www.dmacg.net/wp-content/uploads/2022/05/1-7.jpg" alt="hero image" />
      <h3>Img Component</h3>
      <Img src="https://kk-promote-template.v3mh.com/answer-admin/prod/image/7g4EHNBGy/24-%E5%9B%BE%E7%89%87.jpg" alt="image" />
      <h3>Table Component</h3>
      <Table headers={['Header 1']} rows={[['Cell 1']]} />
      <h3>RadioButton Component</h3>
      <RadioButton label="Option label" name="radioGroup1" value="option1" /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
