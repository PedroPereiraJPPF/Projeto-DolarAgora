function chamarApi(){
    let url = 'https://economia.awesomeapi.com.br/last/'
    //Nome da moeda
    moedaEscolhida = document.getElementById('seletor')
    nomeConversao = document.getElementById('converRealizada')
    valor = moedaEscolhida.options[moedaEscolhida.selectedIndex].value
    nomeMoeda = moedaEscolhida.options[moedaEscolhida.selectedIndex].text
    // mudar nome da conversão para o usuario
    nomeConversao.innerText = `${nomeMoeda}: => Real/BRL`
    //somar o valor selecionado na url
    url += valor
    // itens da tabela
    let tabelaCorpo = document.getElementById('tabelaCorpo')
    let conteudoTabela = document.createElement('tr')
    let compra = document.createElement('td')
    let venda = document.createElement('td')
    let variaçao = document.createElement('td')
    let porcentagemDeVar = document.createElement('td')
    let maximo = document.createElement('td')
    let minimo = document.createElement('td')
    let nome = document.createElement('td')
    //tabelaCorpo.appendChild(conteudoTabela)
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        moeda = document.getElementById('convertido')
        real = document.getElementById('real')
        real = Number(real.value)
        // realizar conversões
        switch (nomeMoeda){
            case 'Dolar':
                realConvertido = real*data.USDBRL.ask
                // valores da tabela
                compra.innerHTML = data.USDBRL.bid
                venda.innerHTML = data.USDBRL.ask
                variaçao.innerHTML = data.USDBRL.varBid
                porcentagemDeVar.innerHTML = data.USDBRL.pctChange
                maximo.innerHTML = data.USDBRL.high
                minimo.innerHTML = data.USDBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Euro':
                realConvertido = real*data.EURBRL.ask
                // valores
                compra.innerHTML = data.EURBRL.bid
                venda.innerHTML = data.EURBRL.ask
                variaçao.innerHTML = data.EURBRL.varBid
                porcentagemDeVar.innerHTML = data.EURBRL.pctChange
                maximo.innerHTML = data.EURBRL.high
                minimo.innerHTML = data.EURBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Bitcoin':
                mudar = String(data.BTCBRL.ask)
                mudar = mudar.replace('.','')
                mudar = Number(mudar)
                realConvertido = real*mudar
                // valores
                compra.innerHTML = data.BTCBRL.bid
                venda.innerHTML = data.BTCBRL.ask
                variaçao.innerHTML = data.BTCBRL.varBid
                porcentagemDeVar.innerHTML = data.BTCBRL.pctChange
                maximo.innerHTML = data.BTCBRL.high
                minimo.innerHTML = data.BTCBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Peso Argentino':
                realConvertido = real*data.ARSBRL.ask
                // valores
                compra.innerHTML = data.ARSBRL.bid
                venda.innerHTML = data.ARSBRL.ask
                variaçao.innerHTML = data.ARSBRL.varBid
                porcentagemDeVar.innerHTML = data.ARSBRL.pctChange
                maximo.innerHTML = data.ARSBRL.high
                minimo.innerHTML = data.ARSBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Iene Japonês':
                realConvertido = real*data.JPYBRL.ask
                compra.innerHTML = data.JPYBRL.bid
                venda.innerHTML = data.JPYBRL.ask
                variaçao.innerHTML = data.JPYBRL.varBid
                porcentagemDeVar.innerHTML = data.JPYBRL.pctChange
                maximo.innerHTML = data.JPYBRL.high
                minimo.innerHTML = data.JPYBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Yuan Chinês':
                realConvertido = real*data.CNYBRL.ask
                compra.innerHTML = data.CNYBRL.bid
                venda.innerHTML = data.CNYBRL.ask
                variaçao.innerHTML = data.CNYBRL.varBid
                porcentagemDeVar.innerHTML = data.CNYBRL.pctChange
                maximo.innerHTML = data.CNYBRL.high
                minimo.innerHTML = data.CNYBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Rúpia Indiana':
                realConvertido = real*data.INRBRL.ask
                compra.innerHTML = data.INRBRL.bid
                venda.innerHTML = data.INRBRL.ask
                variaçao.innerHTML = data.INRBRL.varBid
                porcentagemDeVar.innerHTML = data.INRBRL.pctChange
                maximo.innerHTML = data.INRBRL.high
                minimo.innerHTML = data.INRBRL.low
                nome.innerHTML = nomeMoeda
                break
            case 'Coroa Norueguesa':
                realConvertido = real*data.NOKBRL.ask
                compra.innerHTML = data.NOKBRL.bid
                venda.innerHTML = data.NOKBRL.ask
                variaçao.innerHTML = data.NOKBRL.varBid
                porcentagemDeVar.innerHTML = data.NOKBRL.pctChange
                maximo.innerHTML = data.NOKBRL.high
                minimo.innerHTML = data.NOKBRL.low
                nome.innerHTML = nomeMoeda
                break      
            case 'Rand Sul-Africano':
                realConvertido = real*data.ZARBRL.ask
                compra.innerHTML = data.ZARBRL.bid
                venda.innerHTML = data.ZARBRL.ask
                variaçao.innerHTML = data.ZARBRL.varBid
                porcentagemDeVar.innerHTML = data.ZARBRL.pctChange
                maximo.innerHTML = data.ZARBRL.high
                minimo.innerHTML = data.ZARBRL.low
                nome.innerHTML = nomeMoeda
                break     
            case 'Rublo Russo':
                realConvertido = real*data.RUBBRL.ask
                compra.innerHTML = data.RUBBRL.bid
                venda.innerHTML = data.RUBBRL.ask
                variaçao.innerHTML = data.RUBBRL.varBid
                porcentagemDeVar.innerHTML = data.RUBBRL.pctChange
                maximo.innerHTML = data.RUBBRL.high
                minimo.innerHTML = data.RUBBRL.low
                nome.innerHTML = nomeMoeda
                break     
        }
        if(moeda.value > 1){
            moeda.value = realConvertido.toFixed(2)
        }else{
            moeda.value = realConvertido.toFixed(3)
        }
        conteudoTabela.appendChild(compra)
        conteudoTabela.appendChild(venda)
        conteudoTabela.appendChild(variaçao)
        conteudoTabela.appendChild(porcentagemDeVar)
        conteudoTabela.appendChild(maximo)
        conteudoTabela.appendChild(minimo)
        conteudoTabela.appendChild(nome)
        tabelaCorpo.appendChild(conteudoTabela)
    }).catch((erro) => {
        console.log(`erro: ${erro}`)
    })
}

// converter numeros
function converter(){
    let url = 'https://economia.awesomeapi.com.br/last/'
    //Nome da moeda
    moedaEscolhida = document.getElementById('seletor')
    nomeConversao = document.getElementById('converRealizada')
    valor = moedaEscolhida.options[moedaEscolhida.selectedIndex].value
    nomeMoeda = moedaEscolhida.options[moedaEscolhida.selectedIndex].text
    // mudar nome da conversão para o usuario
    nomeConversao.innerText = `${nomeMoeda}: => Real/BRL`
    //somar o valor selecionado na url
    url += valor
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        moeda = document.getElementById('convertido')
        real = document.getElementById('real')
        real = Number(real.value)
        // realizar conversões
        switch (nomeMoeda){
            case 'Dolar':
                realConvertido = real*data.USDBRL.ask
                break
            case 'Euro':
                realConvertido = real*data.EURBRL.ask
                break
            case 'Bitcoin':
                mudar = String(data.BTCBRL.ask)
                mudar = mudar.replace('.','')
                mudar = Number(mudar)
                realConvertido = real*mudar
                break
            case 'Peso Argentino':
                realConvertido = real*data.ARSBRL.ask
                break
            case 'Iene Japonês':
                realConvertido = real*data.JPYBRL.ask
                break
            case 'Yuan Chinês':
                realConvertido = real*data.CNYBRL.ask
                break
            case 'Rúpia Indiana':
                realConvertido = real*data.INRBRL.ask
                break
            case 'Coroa Norueguesa':
                realConvertido = real*data.NOKBRL.ask
                break      
            case 'Rand Sul-Africano':
                realConvertido = real*data.ZARBRL.ask
                break     
            case 'Rublo Russo':
                realConvertido = real*data.RUBBRL.ask
                break     
        }
        if(moeda.value > 1){
            moeda.value = realConvertido.toFixed(2)
        }else{
            moeda.value = realConvertido.toFixed(3)
        }
    }).catch((erro) => {
        console.log(`erro: ${erro}`)
    })
}

// coverter tabela para Excel
function tableToExcel(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("table#tabela"));
}
let real = document.getElementById('real')
real.addEventListener('click', converter)
real.addEventListener('keydown', converter)

let seletor = document.getElementById('seletor')
seletor.addEventListener('click', converter)

moedaEscolhida = document.getElementById('mudar')
moedaEscolhida.addEventListener('click' , chamarApi)

let excel = document.getElementById('excel')
excel.addEventListener('click', tableToExcel)

let refresh = document.getElementById('refresh')
refresh.addEventListener('click' , function() {
    location.reload()
})







