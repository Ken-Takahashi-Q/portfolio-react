import './form.scss';
import { useState, useEffect } from 'react';
import { Input } from 'antd';

function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isError, setIsError] = useState(0);
  const [formData, setFormData] = useState([
    {step: 1, name: "", email: "", phone: ""},
    {step: 2, plan: "", length: "monthly"},
    {step: 3, add_ons: [false, false, false]},
  ]);

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

  const [inputField, setInputField] = useState([
    {id: 1, type: "name", label: "Name", placeholder: "e.g. Stephen King", value: "", error: ""},
    {id: 2, type: "email", label: "Email Address", placeholder: "e.g. stephenking@lorem.com", value: "", error: ""},
    {id: 3, type: "phone", label: "Phone Number", placeholder: "e.g. +1 234 567 890", value: "", error: ""},
  ]);

  const planData = [
    {id: 1, image: "/images/multi-step-form/icon-arcade.svg", plan: "Arcade", price: 9},
    {id: 2, image: "/images/multi-step-form/icon-advanced.svg", plan: "Advanced", price: 12},
    {id: 3, image: "/images/multi-step-form/icon-pro.svg", plan: "Pro", price: 15},
  ]

  const addOns = [
    {id: 1, name: "Online service", detail: "Access to multiplayer games", price: 1},
    {id: 2, name: "Larger storage", detail: "Extra 1TB of cloud save", price: 2},
    {id: 3, name: "Customizable profile", detail: "Custom theme on your profile", price: 2},
  ]

  const handleInputChange = (type, value) => {
    setFormData((prevState) => {
      const updatedFormData = [...prevState];
      updatedFormData[currentStep - 1][type] = value;
      return updatedFormData;
    });

    setInputField((prevState) => {
      const updatedInputField = prevState.map((field) => {
        if (field.type === type) {
          return { ...field, value };
        }
        return field;
      });
      return updatedInputField;
    });
  };
  
  const handlePlanChange = (plan) => {
    setFormData((prevState) => {
      const updatedFormData = [...prevState];
      updatedFormData[1].plan = plan;
      return updatedFormData;
    });
  }

  const handleSwitchChange = () => {
    const newPlan = formData[currentStep - 1].length === "monthly" ? "yearly" : "monthly"
    setFormData((prevState) => {
      const updatedFormData = [...prevState];
      updatedFormData[currentStep - 1].length = newPlan;
      return updatedFormData;
    });
  };

  const handleAddOnsChange = (id) => {
    setFormData((prevState) => {
      const updatedFormData = [...prevState];
      updatedFormData[2] = { ...prevState[2] }; // deep copy of the third object
      updatedFormData[2].add_ons = [...prevState[2].add_ons]; // copy of the add_ons array
      updatedFormData[2].add_ons[id-1] = !updatedFormData[2].add_ons[id-1];
      return updatedFormData;
    });
  };
  
  const handleGoBack = () => {
    setCurrentStep(currentStep - 1);
  }
  
  const handleGoNext = () => {
    let isError = false;
    if (currentStep === 1) {
      inputField.forEach((field) => {
        if (field.value === "") {
          isError = true;
          field.error = `${field.label} is required`
        } else if (field.type === "name" && field.value.length > 50) {
          isError = true;
          field.error = "Name cannot longer than 50 characters"
        } else if (field.type === "email" && !/\S+@\S+\.\S+/.test(field.value)) {
          isError = true;
          field.error = "Invalid email format";
        } else if (field.type === "phone") {
          if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(field.value)) {
            isError = true;
            field.error = "Phone number can contain only numbers";
          } else if (field.value.length < 7 || field.value.length > 10) {
            isError = true;
            field.error = "Phone number must be 7-10 numbers";
          } else {
            field.error = "";
          }
        } else {
          field.error = "";
        }
        setInputField([...inputField]);
      });
    } else if (currentStep === 2 && formData[1].plan === "") {
      isError = true;
    }

    if (!isError) {
      setCurrentStep(currentStep + 1);
    }
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

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

              {currentStep === 1 ?
                <div className="form-field data-step-1">
                  {inputField.map((data) => (
                    <div className="input-field" key={data.id}>
                      <div className="label">
                        <span>{data.label}</span>
                        <span className={`show-error`}>{data.error}</span>
                      </div>
                      <input
                        className={data.error === "" ? "" : "input-error"}
                        placeholder={data.placeholder}
                        onChange={(e) => handleInputChange(data.type, e.target.value)}
                        value={data.value}
                      >
                      </input>
                    </div>
                  ))}
                </div> :
                null
              }

              {currentStep === 2 ?
                <div className="form-field data-step-2">
                  <div className="plan-grid">
                    {planData.map((data) => (
                      <div
                        className={`card ${formData[1].plan === data.plan ? "selected" : ""}`}
                        key={data.id}
                        onClick={() => handlePlanChange(data.plan)}
                      >
                        <img src={data.image}></img>
                        <div className="plan-price">
                          <h3>{data.plan}</h3>
                          {formData[1].length === "monthly" ?
                            <p>${data.price}/mo</p> :
                            <p>${data.price*10}/yr</p>
                          }

                          <div className={`slide-down ${formData[1].length === "yearly" ? "" : "hidden"}`}>
                            <h5>2 months free</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="plan-type">
                    <h4 className={`${formData[1].length === "monthly" ? "bolder" : ""}`}>Monthly</h4>
                    <div className={`time-slider`} onClick={handleSwitchChange}>
                      <div className={`circle ${formData[1].length === "monthly" ? "" : "slide"}`}></div>
                    </div>
                    <h4 className={`${formData[1].length === "monthly" ? "" : "bolder"}`}>Yearly</h4>
                  </div>
                </div> :
                null
              }
              
              {currentStep === 3 ?
                <div className="form-field data-step-3">
                  {addOns.map((data) => (
                    <div
                      className={`card ${formData[2].add_ons[data.id-1] ? "selected" : ""}`}
                      key={data.id}
                      onClick={() => handleAddOnsChange(data.id)}
                    >
                      <div className="add-ons-left">
                        <div className="tick">
                          <img src="/images/multi-step-form/icon-checkmark.svg"></img>
                        </div>
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <p>{data.detail}</p>
                        </div>
                      </div>

                      <div className="add-ons-price">
                        {formData[1].length === "monthly" ?
                          <p>+${data.price}/mo</p> :
                          <p>+${data.price*10}/yr</p>
                        }
                      </div>
                      </div>
                  ))}
                </div> :
                null
              }
              
            
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
