const pesquisa = document.getElementById("pesquisa");
const produtos = document.querySelectorAll(".produto");

pesquisa.addEventListener("input", function () {

    const texto = pesquisa.value.toLowerCase();

    produtos.forEach(function (produto) {

        const nome = produto.textContent.toLowerCase();

        if (nome.includes(texto)) {
            produto.style.display = "";
        } else {
            produto.style.display = "none";
        }

    });

});

