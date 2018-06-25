//inicialização
document.addEventListener('DOMContentLoaded', function () {
    var dropdownTrigger = document.querySelectorAll('.dropdown-trigger')
    var sidenav = document.querySelectorAll('.sidenav')
    var collapsible = document.querySelectorAll('.collapsible')
    var fixedBtnAction = document.querySelectorAll('.fixed-action-btn')
    var tooltip = document.querySelectorAll('.tooltipped')
    var modal = document.querySelectorAll('.modal')

    var instances = M.Modal.init(modal)
    var instances = M.Tooltip.init(tooltip)
    var instances = M.Dropdown.init(dropdownTrigger)
    var instances = M.Collapsible.init(collapsible)
    var instances = M.Sidenav.init(sidenav)
    var instances = M.FloatingActionButton.init(fixedBtnAction, {
        toolbarEnabled: true
    })
})




//#region fazendo a ligação entre os botões no html e js
const btnPlanilha = document.querySelector('#btnPlanilha')
const btnBra = document.querySelector('#btnBra')
const btnCaixa = document.querySelector('#btnCaixa')
const btnBB = document.querySelector('#btnBB')
const btnInter = document.querySelector('#btnInter')
const btnOriginal = document.querySelector('#btnOriginal')
const btnEstorno = document.querySelector('#btnEstorno')
const btnMacro = document.querySelector('#btnMacro')

//menu-rodape
const btnZendesk = document.querySelector('#zendesk')
const btnBlinkTrade = document.querySelector('#blinktrade')
const btnSlack = document.querySelector('#slack')
const btnLastPass = document.querySelector('#lastpass')
const btnPontoMais = document.querySelector('#pontomais')
const btnHolerite = document.querySelector('#holerite')
//logo
const logo = document.querySelector('#logo')
const janelaInformativa = document.querySelector('#janela-informativa')

//informativo sobre o aplicativo
const btnFechar = document.querySelector('#btnFechar')
const github = document.querySelector('#github')
const electron = document.querySelector('#electron')
const materialize = document.querySelector('#materialize')
const tippy = document.querySelector('#tippy')
const logoInformativo = document.querySelector('#logo-informativo')
const appVersao = document.querySelector('#versao')
//#endregion



// #region funções que fazem os botões abrirem os links
btnPlanilha.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/0B-XG05sb5LBpSzNjUjR0UmEwQzg')
})

btnBra.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/1X9f-58sWtJqBcfZNOyP1kZCpxvJ9pIK_')
})

btnCaixa.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/15FeseTVNMwc6jvN3vfkaAJmIE0Uet_q5')
})

btnBB.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/1DMHktPayh5898nnshfFPb6IZxA5hHerC')
})

btnInter.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/1MPrOLGcoHb-EE5ro2Xjx8HekbRW6Fuvl')
})

btnOriginal.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/folders/1Hl1TGnFqHkRRUskxjs_a-wOQ9nJQi9kW')
})

btnEstorno.addEventListener('click', () => {
    window.open('https://docs.google.com/spreadsheets/d/1YjeMTbQT_0Cc5XVj2ZAVXgdSoXcOvcqJs1WzdPszaCI/edit#gid=0')
})

btnMacro.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/1FvufCszZja4ToeQge096m6sWkaoDQX-UqJc3uvbtWGY/edit')
})

//#endregion


//#region funções que abrem os links do menu do rodape
btnZendesk.addEventListener('click', () => {
    window.open('https://foxbit.zendesk.com/agent/')
})

btnBlinkTrade.addEventListener('click', () => {
    window.open('https://blinktrade.com/admin/#/login')
})

btnSlack.addEventListener('click', () => {
    window.open('https://slack.com/signin')
})

btnPontoMais.addEventListener('click', () => {
    window.open('https://app.pontomaisweb.com.br/#/meu_ponto')
})

btnHolerite.addEventListener('click', () => {
    window.open('https://office2crm.prosoft.com.br/')
})

btnLastPass.addEventListener('click', () => {
    window.open('https://lastpass.com/?ac=1&lpnorefresh=1&lang=pt')
})

logo.addEventListener('click', () => {
    window.open('https://foxbit.com.br')
})
//#endregion


github.addEventListener('click', () => {
    window.open('https://github.com/andreposman')
})

materialize.addEventListener('click', () => {
    window.open('https://materializecss.com/')
})

logoInformativo.addEventListener('click', () => {
    window.open('https://foxbit.com.br')
})