const form = document.getElementById("register-form");
form.onsubmit = (ev) => {
  // Get the form values
  const formData = new FormData(form);
  const e = formData.get("email");
  const ln = formData.get("lastname");
  const fn = formData.get("firstname");
  const pwd = formData.get("password");
  const pwd2 = formData.get("confirmation");
  const p = formData.get("phone");
  let ok = true;

  // Reset the list of errors
  const list = document.getElementById("error-list");
  list.innerHTML = "";

  // Get the reference to the error container for later use
  const errContainer = document.getElementById("errors");

  // Validate the email input value
  if (!e || typeof e !== "string" || !e.includes("@")) {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "email is incorrect";
    list.appendChild(err);
  }

  // Validate email availability
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    `/notUsed?email=${e}`
  );
  req.send();
  req.onload = () => {
    if (!JSON.parse(req.response).available) {
      ok = false;
      errContainer.classList.remove("hidden");
      const err = document.createElement("li");
      err.innerHTML = "email is not available";
      list.appendChild(err);
    }
  };

  // Validate last name input value
  if (!ln || typeof ln !== "string") {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "last name is incorrect";
    list.appendChild(err);
  }

  // Validate first name input value
  if (!fn || typeof fn !== "string") {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "first name is incorrect";
    list.appendChild(err);
  }

  // Validate password input value
  if (!pwd || typeof pwd !== "string" || pwd.length < 8) {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "password is incorrect";
    list.appendChild(err);
  }

  // Validate password confirmation value
  if (!pwd2 || pwd2 !== pwd) {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "confirmation does not match password";
    list.appendChild(err);
  }

  // Validate phone input value if necessary
  if (p && (isNaN(p) || p.length < 10)) {
    ok = false;
    errContainer.classList.remove("hidden");
    const err = document.createElement("li");
    err.innerHTML = "phone number is incorrect";
    list.appendChild(err);
  }

  if (ok) {
    errContainer.classList.add("hidden");
    const req2 = new XMLHttpRequest();
    req2.open(
      "POST",
      "/registerUser"
    );
    req2.onload = () => {
      if (req2.status !== 200) {
        console.warn("An error occurred while registering the user : " + req2.response);
        return;
      }
      errContainer.classList.add("hidden");
      form.classList.add("hidden");
      const registerOK = document.getElementById("success");
      registerOK.classList.remove("hidden");
      const res = JSON.parse(req2.response);
      registerOK
        .getElementsByTagName("p")
        .item(1).innerHTML = `Your user number is <strong>${res.id}</strong>`;
      const edt = document.createElement("dt");
      const edd = document.createElement("dd");
      edt.innerHTML = "email";
      edd.innerHTML = res.email;
      const ndt = document.createElement("dt");
      const ndd = document.createElement("dd");
      ndt.innerHTML = "name";
      ndd.innerHTML = `${res.lastname} ${res.firstname}`;
      registerOK.getElementsByTagName("dl").item(0).append(edt, edd, ndt, ndd);
      if (res.phone) {
        const pdt = document.createElement("dt");
        const pdd = document.createElement("dd");
        pdt.innerHTML = "phone";
        pdd.innerHTML = res.phone;
        registerOK.getElementsByTagName("dl").item(0).append(pdt, pdd);
      }
    };
    req2.setRequestHeader("Content-Type", "application/json");
    req2.send(
      JSON.stringify({
        email: e,
        lastname: ln,
        firstname: fn,
        password: pwd,
        phone: p,
      })
    );
  }
  ev.preventDefault();
};
