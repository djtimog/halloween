const subscribeBtn = document.getElementById("subscribe");

const validateEmail = (email, userName) => {
  let emailError = "";
  if (!(userName.trim().length > 3)) {
    emailError = "User name must be at least 3 charcaters";
  } else if (!(email.trim().length > 6)) {
    emailError = "Email must be more than 8 characters";
  } else if (!email.includes(".")) {
    emailError = "Email must be have (.com), (.net), e.t.c";
  } else if (!email.includes("@")) {
    emailError = "Email must have @*";
  } else {
    emailError = "";
  }
  return emailError;
};

const submitEmail = async (emailDom, userNameDom) => {
  const inputEmail = emailDom.value;
  const username = userNameDom.value;

  try {
    await fetch("/subscribe", {
      method: "POST",
      body: JSON.stringify({ username: username, email: inputEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }

  emailDom.value = "";
  userNameDom.value = "";
  subscribeBtn.innerText = "Submitted!!";
  subscribeBtn.style.color = "green";

  setTimeout(() => {
    subscribeBtn.innerText = "Subscribe";
    subscribeBtn.style.color = "black";
  }, 3000);
};

subscribeBtn.addEventListener("click", async () => {
  const emailDom = document.getElementById("email");
  const userNameDom = document.getElementById("userName");
  const errorDom = document.getElementById("error");
  const inputEmail = emailDom.value;
  const username = userNameDom.value;

  const Err = validateEmail(inputEmail, username);

  errorDom.innerText = Err;
  if (Err) return;

  return await submitEmail(emailDom, userNameDom);
});
