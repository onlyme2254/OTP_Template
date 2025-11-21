let inputs = document.querySelectorAll(".otp");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
    if (input.value.length === 1 && index < inputs.length - 1) {
     
     setTimeout(() => {
       if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
     }, 100);
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index >0){
      inputs[index - 1].focus();
    }
  });
});
