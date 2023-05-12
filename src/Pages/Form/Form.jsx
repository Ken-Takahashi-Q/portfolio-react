import './form.scss';
import { useState, useEffect } from 'react';
import { Input } from 'antd';

function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const formData = [
    {step: 1, name: "", email: "", phone: ""},
    {step: 2, type: "", duration: ""},
    {step: 3, add_ons: []},
  ];

  const stepName = [
    {step: 1, name: "YOUR INFO"},
    {step: 2, name: "SELECT PLAN"},
    {step: 3, name: "ADD-ONS"},
    {step: 4, name: "SUMMARY"},
  ];

  const headerText = [
    {step: 1, header: "Personal Info", text: "Please provide your name, email address, and phone number."},
    {step: 2, header: "Select your plan", text: "You have options for monthly or yearly billing."},
    {step: 3, header: "Pick add-ons", text: "Add-ons help enhance your gaming experience."},
    {step: 4, header: "Finishing up", text: "Double-check everything looks OK before confirming."},
  ]

  const inputField = [
    {id: 1, label: "Name", placeholder: "e.g. Stephen King"},
    {id: 2, label: "Email Address", placeholder: "e.g. stephenking@lorem.com"},
    {id: 3, label: "Phone Number", placeholder: "e.g. +1 234 567 890"},
  ];

  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  }
  
  const handleGoNext = () => {
    setCurrentStep(currentStep + 1);
  }

  return (
    <div className="multi-step-form">
      <div className="form">
        <div className="form-navbar">
          {stepName.map((value) => (
            <div className="step" key={value.step}>
              <div className={`step-number ${currentStep === value.step ? "current" : ""}`}>{value.step}</div>
              <div className="step-info">
                <p>STEP {value.step}</p>
                <h3>{value.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="form-field">
          <div className="form-field upper">
            <div className="form-field header">
              <h1>{headerText[currentStep-1].header}</h1>
              <p>{headerText[currentStep-1].text}</p>
            </div>

            <div className="form-field data">
              {inputField.map((value) => (
                <div className="input-field" key={value.id}>
                  <span>{value.label}</span>
                  <input placeholder={value.placeholder}></input>
                </div>
              ))}

              
            </div>
          </div>

          <div className="form-field menu">
              <a className={`go-back ${currentStep === 1 ? "hidden" : ""}`} onClick={handleGoBack}>Go Back</a>
              <button onClick={handleGoNext}>Next Step</button>
            </div>

        </div>
      </div>
    </div>
  );
}
export default Form;
