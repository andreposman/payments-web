
//#region inicialização do materialize
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
//#endregion


//#region fazendo a ligação entre os botões no html e js
const btnPlanilha = document.querySelector('#btnPlanilha')
const btnBra = document.querySelector('#btnBra')
const btnCaixa = document.querySelector('#btnCaixa')
const btnBB = document.querySelector('#btnBB')
const btnInter = document.querySelector('#btnInter')
const btnOriginal = document.querySelector('#btnOriginal')
const btnNeon = document.querySelector('#btnNeon')
const btnEstorno = document.querySelector('#btnEstorno')
const btnMacro = document.querySelector('#btnMacro')
const btnFaq = document.querySelector('#btnFaq')


//menu-rodape
const btnZendesk = document.querySelector('#zendesk')
const btnEmail = document.querySelector('#email')
const btnSlack = document.querySelector('#slack')
const btnLastPass = document.querySelector('#lastpass')
const btnPontoMais = document.querySelector('#pontomais')
const btnConvenia = document.querySelector('#convenia')
//logo
const logoIndex = document.querySelector('#logo')

//informativo sobre o aplicativo
const btnFechar = document.querySelector('#btnFechar')
const github = document.querySelector('#github')
const materialize = document.querySelector('#materialize')
const logoInformativo = document.querySelector('#logo-informativo')
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

btnNeon.addEventListener('click', () => {
    window.open('https://drive.google.com/drive/u/1/folders/1TfM_eZ0hA-T3Wd4b9G9uE2una7xWffhB')
})

btnEstorno.addEventListener('click', () => {
    window.open('https://docs.google.com/spreadsheets/d/1YjeMTbQT_0Cc5XVj2ZAVXgdSoXcOvcqJs1WzdPszaCI/edit#gid=0')
})

btnMacro.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/1FvufCszZja4ToeQge096m6sWkaoDQX-UqJc3uvbtWGY/edit')
})

btnFaq.addEventListener('click', () => {
    window.open('https://foxbit.zendesk.com/hc/pt-br')
})


//#endregion


//#region funções que abrem os links do menu do rodape
btnZendesk.addEventListener('click', () => {
    window.open('https://foxbit.zendesk.com/agent/')
})

btnEmail.addEventListener('click', () => {
    window.open('https://gmail.com')
})

btnSlack.addEventListener('click', () => {
    window.open('https://slack.com/signin')
})

btnPontoMais.addEventListener('click', () => {
    window.open('https://app.pontomaisweb.com.br/#/meu_ponto')
})

btnConvenia.addEventListener('click', () => {
    window.open('https://colaborador.convenia.com.br/painel')
})

btnLastPass.addEventListener('click', () => {
    window.open('https://lastpass.com/?ac=1&lpnorefresh=1&lang=pt')
})

logoIndex.addEventListener('click', () => {
    window.open('https://foxbit.com.br')
})
//#endregion


//#region links do modal de info
github.addEventListener('click', () => {
    window.open('https://github.com/andreposman')
})

materialize.addEventListener('click', () => {
    window.open('https://materializecss.com/')
})

logoInformativo.addEventListener('click', () => {
    window.open('https://foxbit.com.br')
})
//#endregion