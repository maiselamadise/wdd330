document.querySelector("#checkoutSubmit")
.addEventListener("click", (e) => {
  e.preventDefault()

  const myForm = document.querySelector("#checkoutForm")
  const isValid = myForm.checkValidity()

  if (!isValid) {
    myForm.reportValidity()
    return
  }

  myCheckout.checkout()
})
