export const scrollSwap = () => {
    window.addEventListener("scroll", function () {
        let pageHeader = document.getElementById("#pageHeader"); // Selecione sua navbar
        if (window.scrollY > 50) { // Quando rolar mais de 50px
            pageHeader.classList.add("scrolled"); // Adiciona classe quando scrollar
        } else {
            pageHeader.classList.remove("scrolled"); // Remove classe quando voltar ao topo
        }
    });
 }

export const scrollTop = () => {
    window.scrollTo({ top: 0});
}