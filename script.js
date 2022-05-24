
let adviceElement = document.getElementById("advice")
let mensagemElement = document.getElementById("mensagem")

async function getMensagem() {
  const response = await fetch("https://api.adviceslip.com/advice")
  const data = await response.json()

  const adviceId = data.slip.id
  const mensagem = data.slip.advice

  adviceElement.innerText = `Advice #${adviceId}`
  mensagemElement.innerText = `"${mensagem}"`
}

getMensagem()