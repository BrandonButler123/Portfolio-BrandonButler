const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const formDataString = JSON.stringify(formData);

    localStorage.setItem("formData", formDataString);

    alert("Form data submitted to local storage succesfully!");

    e.target.reset();
  };

  return (
    <div id="main-container-contact">
      <div id="map-container">
        <iframe
          width="100%"
          height="600px"
          title="map"
          style={{ filter: "opacity(0.7)", borderRadius: 5 }}
          src="https://www.google.com/maps/embed/v1/place?q=st.+john's+NL&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
        <div id="contact-details-container">
          <div id="address-container">
            <h3>ADDRESS</h3>
            <p>123 Main St</p>
            <p>St. John's, NL</p>
            <p>A1A 1A1</p>
          </div>
          <div id="email-phone-container">
            <div id="email">
              <h3>EMAIL</h3>
              <p>
                <a href="#contact">butler.brandon@hotmail.com</a>
              </p>
            </div>
            <div>
              <h3>PHONE</h3>
              <p>709-123-4567</p>
            </div>
          </div>
        </div>
      </div>
      <div id="hire-me-container">
        <div id="heading-container-contact">
          <h1>Hire Me</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            et quia modi delectus, sit recusandae esse nostrum.
          </p>
        </div>
        <div id="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-elements">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-elements">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-elements">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="60"
                rows="10"
              ></textarea>
            </div>
            <div className="form-elements">
              <button id="form-element-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
