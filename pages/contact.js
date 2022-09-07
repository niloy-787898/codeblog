import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us");
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    console.log(e);
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  return <div className={styles.container}>
      <main className={styles.main}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              className={styles.input}
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.formtext}
              value={email}
              onChange={handleChange}
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone
            </label>
            <input
              type="phone"
              className={styles.input}
              value={phone}
              onChange={handleChange}
              name="phone"
              id="phone"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="desc">Elaborate your concern</label>
            <textarea
              className={styles.input}
              value={desc}
              onChange={handleChange}
              placeholder="Write your concern here"
              name="desc"
              id="desc"
            />
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </main>
    </div>
  
};

export default Contact;
