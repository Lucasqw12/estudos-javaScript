let idade = Number(prompt("Digite sua idade:"));

if (idade < 16) {
  alert("Não pode votar");
} else if (idade < 18) {
  alert("Voto opcional");
} else if (idade <= 70) {
  alert("Voto obrigatório");
} else {
  alert("Voto opcional");
}