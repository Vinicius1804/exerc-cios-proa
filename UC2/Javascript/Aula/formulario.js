//Adicionando Javascript

const naturalidade = {
    RO: "Rondoniano",
    AC: "Acriano",
    AM: "Amazonense",
    RR: "Roraimense",
    PA: "Paraibano",
    AP: "Amapaense",
    TO: "Tocantinense",
    MA: "Maranhense",
    PI: "Piauiense",
    CE: "Cearense",
    RN: "Potiguar",
    PB: "Paraibano",
    PE: "Pernambucano",
    AL: "Alagoano",
    SE: "Sergipano",
    BA: "Baiano",
    MG: "Mineiro",
    ES: "Capixaba",
    RJ: "Fluminense",
    SP: "Paulista",
    PR: "Paraense",
    SC: "Catarinense",
    RS: "Gaúcho",
    MS: "Sul-mato-grossense",
    MT: "Mato-grossense",
    GO: "Goiano",
    DF: "Brasiliense",
}


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('naturalidade').value = ("");

}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);


        // Faz preencher o campo de naturalidade com base na sua UF
        const uf = conteudo.uf;
        if (naturalidade[uf]) {
            document.getElementById('naturalidade').value = naturalidade[uf];
        } else {
            document.getElementById('naturalidade').value = "Desconhecido";
        }

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('naturalidade').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
