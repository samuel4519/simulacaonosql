//Comunicação com o Bando de Dados - NO_SQL - JSON 

fetch('dados.json').then(resposta => resposta.json()).then(banco => {
    console.log(banco)

    
    document.getElementById('imagem').innerHTML = banco[3].imagemProdutos.image001;
    document.getElementById('produto').innerHTML = banco[0].produtos.prod123;
    document.getElementById('preco').innerHTML = "R$" + banco[2].preco.preco789;
    document.getElementById('vendedor').innerHTML = banco[1].vendedor.vend456;
    document.getElementById('cliente1').innerHTML = banco[4].cliente.cliente001;

    
    document.getElementById('imagem2').innerHTML = banco[3].imagemProdutos.image002;
    document.getElementById('produto2').innerHTML = banco[0].produtos.prod124;
    document.getElementById('preco2').innerHTML = "R$" + banco[2].preco.preco790;
    document.getElementById('vendedor2').innerHTML = banco[1].vendedor.vend457;
    document.getElementById('cliente2').innerHTML = banco[4].cliente.cliente002;


    document.getElementById('imagem3').innerHTML = banco[3].imagemProdutos.image003;
    document.getElementById('produto3').innerHTML = banco[0].produtos.prod125;
    document.getElementById('preco3').innerHTML = "R$" + banco[2].preco.preco791;
    document.getElementById('vendedor3').innerHTML = banco[1].vendedor.vend458;
    document.getElementById('cliente3').innerHTML = banco[4].cliente.cliente003;

    
    document.getElementById('imagem4').innerHTML = banco[3].imagemProdutos.image004;
    document.getElementById('produto4').innerHTML = banco[0].produtos.prod126;
    document.getElementById('preco4').innerHTML = "R$" + banco[2].preco.preco792;
    document.getElementById('vendedor4').innerHTML = banco[1].vendedor.vend459;
    document.getElementById('cliente4').innerHTML = banco[4].cliente.cliente004;

    
    document.getElementById('imagem5').innerHTML = banco[3].imagemProdutos.image005;
    document.getElementById('produto5').innerHTML = banco[0].produtos.prod127;
    document.getElementById('preco5').innerHTML = "R$" + banco[2].preco.preco793;
    document.getElementById('vendedor5').innerHTML = banco[1].vendedor.vend460;
    document.getElementById('cliente5').innerHTML = banco[4].cliente.cliente005;
});
