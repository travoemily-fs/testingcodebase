"use strict";
// function test 1: sumOfarray(arr)
const s1Submit = document.getElementById("s1Btn");
const s1Results = document.querySelector(".s1Results");
const s1Input = document.getElementById("s1Input");
const s1Nums = (event) => {
    event.preventDefault();
    const input1 = s1Input.value;
    const numArray = input1.split(",").map((num) => num.trim());
    if (!numArray.every((num) => !isNaN(Number(num)) && num !== "")) {
        s1Input.value = "";
        s1Results.style.opacity = "1";
        s1Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> please enter valid whole numbers separated by commas.`;
        return;
    }
    if (numArray.length !== 4) {
        s1Input.value = "";
        s1Results.style.opacity = "1";
        s1Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> exactly 4 numbers are required to proceed.`;
        return;
    }
    let sum = 0;
    numArray.forEach((num) => {
        sum += Number(num);
    });
    s1Results.style.opacity = "1";
    s1Results.innerHTML = `<i class="ti ti-calculator"></i> the sum of the array is: <br> <b>${sum}</b>`;
    s1Input.value = "";
};
// function test 2: findMax(arr)
const s2Submit = document.getElementById("s2Btn");
const s2Results = document.querySelector(".s2Results");
const s2Input = document.getElementById("s2Input");
const s2Nums = (event) => {
    event.preventDefault();
    const input2 = s2Input.value;
    const numArray2 = input2.split(",").map((num) => num.trim());
    if (!numArray2.every((num) => !isNaN(Number(num)) && num !== "")) {
        s2Input.value = ""; //
        s2Results.style.opacity = "1";
        s2Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> please enter valid whole numbers, separated by commas.`;
        return;
    }
    if (numArray2.length !== 4) {
        s2Input.value = ""; //
        s2Results.style.opacity = "1";
        s2Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> exactly 4 whole numbers are required to proceed.`;
        return;
    }
    const maxNumArray = numArray2.map(Number);
    const max = Math.max(...maxNumArray);
    s2Results.style.opacity = "1";
    s2Results.innerHTML = `<i class="ti ti-calculator"></i> the largest number in the array is: <br>
  <b>${max}</b>`;
    s2Input.value = "";
};
// function test 3: countVowels(str)
const s3Submit = document.getElementById("s3Btn");
const s3Results = document.querySelector(".s3Results");
const s3Input = document.getElementById("s3Input");
const s3Vowels = (event) => {
    event.preventDefault();
    const input3 = s3Input.value.trim();
    if (input3 === "") {
        s3Input.value = "";
        s3Results.style.opacity = "1";
        s3Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> you must enter your name to proceed`;
        return;
    }
    if (/\d/.test(input3)) {
        s3Input.value = "";
        s3Results.style.opacity = "1";
        s3Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> your name cannot include numbers. please try again!`;
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(input3)) {
        s3Input.value = "";
        s3Results.style.opacity = "1";
        s3Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> your name can only contain letters. please remove any special characters and try again.`;
        return;
    }
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let vowelCount = 0;
    for (let char of input3.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    s3Results.style.opacity = "1";
    s3Results.innerHTML = `<i class="ti ti-confetti"></i> your name, <b>${input3}</b>, contains <b>${vowelCount}</b> vowels. neat!`;
    s3Input.value = "";
};
// function test 4: reverseString(str)
const s4Submit = document.getElementById("s4Btn");
const s4Results = document.querySelector(".s4Results");
const s4Input = document.getElementById("s4Input");
const s4String = (event) => {
    event.preventDefault();
    const input4 = s4Input.value.trim();
    if (input4 === "") {
        s4Input.value = ""; //
        s4Results.style.opacity = "1";
        s4Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> please enter a sentence to reverse.`;
        return;
    }
    if (/\d/.test(input4)) {
        s4Input.value = ""; //
        s4Results.style.opacity = "1";
        s4Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> your sentence cannot include numbers. Please try again!`;
        return;
    }
    if (/^[.,!?'\s]+$/.test(input4)) {
        s4Input.value = "";
        s4Results.style.opacity = "1";
        s4Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> your input cannot consist only of punctuation or spaces. please enter a valid sentence.`;
        return;
    }
    if (!/^[a-zA-Z\s.,!?']+$/.test(input4)) {
        s4Input.value = "";
        s4Results.style.opacity = "1";
        s4Results.innerHTML = `<i class="ti ti-alert-circle"></i> <span>ERROR:</span> your sentence can only contain letters, spaces, and basic punctuation (, . ! ? '). please try again.`;
        return;
    }
    let reversedString = "";
    for (let i = input4.length - 1; i >= 0; i--) {
        reversedString += input4[i];
    }
    s4Results.style.opacity = "1";
    s4Results.innerHTML = `<i class="ti ti-confetti"></i> here is your sentence reversed: <br>
  ${reversedString}`;
    s4Input.value = "";
};
(() => {
    // event listener for function #1 btn click
    s1Submit.addEventListener("click", s1Nums);
    // event listener for function #2 btn click
    s2Submit.addEventListener("click", s2Nums);
    // event listener for function #3 btn click
    s3Submit.addEventListener("click", s3Vowels);
    // event listener for function #4 btn click
    s4Submit.addEventListener("click", s4String);
})();
