const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");
  menuHamburguer.classList.toggle("change");
}
// ======================
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Armazena os dados no localStorage (opcional)
    const formData = { name, email, phone, subject, message };
    localStorage.setItem("lastContactForm", JSON.stringify(formData));

    // Mostra a mensagem de confirmação
    document.getElementById("confirm-name").textContent = name;
    document.getElementById("confirmation-message").classList.remove("hidden");

    // Limpa o formulário
    document.getElementById("contact-form").reset();
  });
