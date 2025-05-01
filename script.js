const step1Container = document.getElementById("step1");
const step2Container = document.getElementById("step2");
const step3Container = document.getElementById("step3");
const step4Container = document.getElementById("step4");
const confirmationContainer = document.getElementById("confirmation");

const circle1 = document.querySelectorAll(".circle")[0];
const circle2 = document.querySelectorAll(".circle")[1];
const circle3 = document.querySelectorAll(".circle")[2];
const circle4 = document.querySelectorAll(".circle")[3];

const backBtn = document.getElementById("go-back");
const nextBtn = document.getElementById("next-step");

const step2Radio1 = document.getElementById("step2-radio-btn1")
const step2Radio2 = document.getElementById("step2-radio-btn2")
const step2Radio3 = document.getElementById("step2-radio-btn3")

const step2Label1 = document.getElementById("step2-radio-btn-option1");
const step2Label2 = document.getElementById("step2-radio-btn-option2");
const step2Label3 = document.getElementById("step2-radio-btn-option3");

const step2Label1Price = document.getElementsByClassName("step2-radio-btn-price")[0];
const step2Label2Price = document.getElementsByClassName("step2-radio-btn-price")[1];
const step2Label3Price = document.getElementsByClassName("step2-radio-btn-price")[2];

const step2ToggleCheckbox = document.getElementById("toggle-checkbox");

const step3Checkbox1 = document.getElementById("step3-form-checkbox1");
const step3Checkbox2 = document.getElementById("step3-form-checkbox2");
const step3Checkbox3 = document.getElementById("step3-form-checkbox3");

const step4PlanTitle = document.getElementById("step4-plan-title");
const step4PlanTotal = document.getElementById("step4-plan-right-charge");
const step4TotalText = document.getElementById("step4-total-span1");
const step4TotalPrice = document.getElementById("step4-total-span2");

backBtn.addEventListener("click", switchScreensBack)

function switchScreensForward() {
  if (step1Container.classList.contains("visible-step")) {
    step1Container.classList.remove("visible-step")
    circle1.classList.remove("current-circle")
    step2Container.classList.add("visible-step")
    circle2.classList.add("current-circle")
  } else if (step2Container.classList.contains("visible-step")) {
    step2Container.classList.remove("visible-step")
    circle2.classList.remove("current-circle")
    step3Container.classList.add("visible-step")
    circle3.classList.add("current-circle")
    if (step2ToggleCheckbox.checked) {
      document.getElementsByClassName("step3-label-price")[0].innerText = '+$10/yr';
      document.getElementsByClassName("step3-label-price")[1].innerText = '+$20/yr';
      document.getElementsByClassName("step3-label-price")[2].innerText = '+$20/yr';
    }
  } else if (step3Container.classList.contains("visible-step")) {
    step3Container.classList.remove("visible-step")
    circle3.classList.remove("current-circle")
    step4Container.classList.add("visible-step")
    circle4.classList.add("current-circle")
  } else if (step4Container.classList.contains("visible-step")) {
    step4Container.classList.remove("visible-step")
    confirmationContainer.classList.add("visible-step")
    backBtn.remove()
    nextBtn.remove()
  } else {
    alert("Error in switchScreensForward()")
  }
  getPricing()
}

function switchScreensBack() {
  if (step2Container.classList.contains("visible-step")) {
    step2Container.classList.remove("visible-step")
    circle2.classList.remove("current-circle")
    step1Container.classList.add("visible-step")
    circle1.classList.add("current-circle")
  } else if (step3Container.classList.contains("visible-step")) {
    step3Container.classList.remove("visible-step")
    circle3.classList.remove("current-circle")
    step2Container.classList.add("visible-step")
    circle2.classList.add("current-circle")
  } else if (step4Container.classList.contains("visible-step")) {
    step4Container.classList.remove("visible-step")
    circle4.classList.remove("current-circle")
    step3Container.classList.add("visible-step")
    circle3.classList.add("current-circle")
  } else {
    alert("Error in switchScreensBack()")
  }
}

function switchCheckedLabel(arg) {
  if (arg == '1') {
    step2Label1.classList.add("step2-checked-btn")
    step2Label2.classList.remove("step2-checked-btn")
    step2Label3.classList.remove("step2-checked-btn")
  } else if (arg == '2') {
    step2Label1.classList.remove("step2-checked-btn")
    step2Label2.classList.add("step2-checked-btn")
    step2Label3.classList.remove("step2-checked-btn")
  } else if (arg == '3') {
    step2Label1.classList.remove("step2-checked-btn")
    step2Label2.classList.remove("step2-checked-btn")
    step2Label3.classList.add("step2-checked-btn")
  } else {
    alert("Error in switchCheckedLabel()")
  }
}

function getTogglePosition() {
  if (step2ToggleCheckbox.checked) {
    document.getElementById("toggle-option1").style.color = "var(--marine-blue)"
    document.getElementById("toggle-option2").style.color = "var(--cool-gray)"
    step2Label1Price.innerText = '$9/mo' 
    step2Label2Price.innerText = '$12/mo' 
    step2Label3Price.innerText = '$15/mo' 
  } else {
    document.getElementById("toggle-option2").style.color = "var(--marine-blue)"
    document.getElementById("toggle-option1").style.color = "var(--cool-gray)"
    step2Label1Price.innerText = '$90/yr' 
    step2Label2Price.innerText = '$120/yr' 
    step2Label3Price.innerText = '$150/yr'
  }
}

function getPricing() {
  document.getElementById("step4-extra-charges-container").inerHTML = ``;
  let totalPrice;
  let monthOrYear;
  let planCost;
  let onlineService = 0;
  let largerStorage = 0;
  let customizableProfile = 0;
  let plan;
  let planTimePeriod;
  let moOrYr;
  let bonusChargesHTML = ``;
  // get step2 toggle position
  if (step2ToggleCheckbox.checked) {
    monthOrYear = 'year';
    planTimePeriod = 'Yearly';
    moOrYr = 'yr';
  } else {
    monthOrYear = 'month';
    planTimePeriod = 'Monthly';
    moOrYr = 'mo';
  }
  // set plan cost
  if (step2Label1.classList.contains("step2-checked-btn")) {
    plan = 'Arcade'
    if (monthOrYear == 'month') {
      planCost = 9
    } else {
      planCost = 90
    }
  } else if (step2Label2.classList.contains("step2-checked-btn")) {
    plan = 'Advanced'
    if (monthOrYear == 'month') {
      planCost = 12
    } else {
      planCost = 120
    }
  } else if (step2Label3.classList.contains("step2-checked-btn")) {
    plan = 'Pro'
    if (monthOrYear == 'month') {
      planCost = 15
    } else {
      planCost = 150
    }
  }
  // get which optional services were selected
  if (step3Checkbox1.checked) {
    if (monthOrYear == 'month') {
      onlineService = 1
    } else {
      onlineService = 10
    }
    bonusChargesHTML += `<div class="bonus-charge">
    <div class="bonus-charge-left">Online service</div>
    <div class="bonus-charge-right">+$${onlineService}/${moOrYr}</div>
  </div>`;
  }
  if (step3Checkbox2.checked) {
    if (monthOrYear == 'month') {
      largerStorage = 2
    } else {
      largerStorage = 20
    }
    bonusChargesHTML += `<div class="bonus-charge">
    <div class="bonus-charge-left">Larger Storage</div>
    <div class="bonus-charge-right">+$${largerStorage}/${moOrYr}</div>
  </div>`;
  } 
  if (step3Checkbox3.checked) {
    if (monthOrYear == 'month') {
      customizableProfile = 2
    } else {
      customizableProfile = 20
    }
    bonusChargesHTML += `<div class="bonus-charge">
    <div class="bonus-charge-left">Customizable profile</div>
    <div class="bonus-charge-right">+$${customizableProfile}/${moOrYr}</div></div>`;
  }
  // setting step 4 values
  step4PlanTitle.innerText = `${plan} (${planTimePeriod})`;
  step4PlanTotal.innerText = `$${planCost}/${moOrYr}`;
  document.getElementById("step4-extra-charges-container").innerHTML = bonusChargesHTML;
  step4TotalText.innerText = `Total (per ${monthOrYear})`;
  totalPrice = planCost + onlineService + largerStorage + customizableProfile;
  step4TotalPrice.innerText = `+$${totalPrice}/${moOrYr}`;
}