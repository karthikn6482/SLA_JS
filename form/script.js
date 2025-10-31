document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target
    const { name, email, password, age, mobile, gender, about } = form
    const user = {
      ...{
        name: name.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        age: parseInt(age.value),
        mobile: mobile.value.trim(),
        gender: gender.value,
        about: about.value.trim(),
      },
    }
    const error = document.getElementById("error")
    const validateFields = (...conditions) => conditions.every(Boolean)
    const isNameValid = user.name !== ""
    const isEmailValid = user.email.includes("@") && user.email.includes(".")
    const isPasswordValid = user.password.length >= 8
    const isAgeValid = user.age >= 18
    const isMobileValid = user.mobile.length === 10
    const isAboutValid = user.about.length >= 20
    const isGenderValid = user.gender !== ""
    if (
      !validateFields(
        isNameValid,
        isEmailValid,
        isPasswordValid,
        isAgeValid,
        isMobileValid,
        isAboutValid,
        isGenderValid
      )
    ) {
      error.textContent = "Please fill all fields correctly!"
      return
    }
    if (user.gender === "male" && !user.name.endsWith("n")) {
      error.textContent = "Male name should end with 'n'!"
      return
    } else if (user.gender === "female" && !user.name.endsWith("a")) {
      error.textContent = "Female name should end with 'a'!"
      return
    }
    error.textContent = ""
    alert("Form submitted successfully! Moving to next page...")
    Object.values(form.elements).forEach((field) => {
      if (field.type !== "submit") field.value = ""
    })
    window.location.href = "nextpage.html"
  })
  