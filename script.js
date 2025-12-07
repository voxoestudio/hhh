document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // 1. Captura os dados
        const nome = document.getElementById('nome').value;
        const dataInput = document.getElementById('data').value;
        const turno = document.getElementById('turno').value;
        const servico = document.getElementById('servico').value;

        // Formata a data para o padrão brasileiro (dd/mm/aaaa)
        const dataObj = new Date(dataInput);
        const dia = String(dataObj.getUTCDate()).padStart(2, '0');
        const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
        const ano = dataObj.getUTCFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // 2. Número do WhatsApp do Salão (INSIRA O NÚMERO AQUI APENAS NÚMEROS)
        // Exemplo: 55 + DDD + Numero. Ex: 5599999999999
        const phoneNumber = "5599999999999"; 

        // 3. Monta a mensagem pré-definida
        // Usei encodeURIComponent para garantir que caracteres especiais funcionem na URL
        const mensagem = `Olá, Nalua! Me chamo *${nome}*, gostaria de agendar um *${servico}* para o dia *${dataFormatada}* (${turno}).%0A%0AEstou ciente da entrada de 30% para confirmação e aguardo a chave PIX.`;

        // 4. Cria a URL e abre em nova aba
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${mensagem}`;
        
        window.open(whatsappUrl, '_blank');
    });
});
