import contacts from "../data/contacts.json";

function ContactPage() {
  const content = document.getElementById("content");

  const contactHeading = document.createElement("h1");

  contactHeading.textContent = "Contact Us";

  content.appendChild(contactHeading);

  contacts.map((contact) => {
    const contactDiv = document.createElement("div");

    const contactName = document.createElement("p");
    const contactEmail = document.createElement("p");
    const contactPhone = document.createElement("p");

    contactName.textContent = "name: " + contact.name;
    contactEmail.textContent = "email: " + contact.email;
    contactPhone.textContent = "phone: " + contact.phone;

    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactEmail);
    contactDiv.appendChild(contactPhone);

    content.appendChild(contactDiv);
  });
}

export default ContactPage;
