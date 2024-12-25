document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Função para atualizar os cálculos automaticamente com base nos atributos
  const updateStats = () => {
    // Obtendo os valores dos atributos
    const forca = parseInt(document.getElementById("forca").value);
    const velocidade = parseInt(document.getElementById("velocidade").value);
    const intelecto = parseInt(document.getElementById("intelecto").value);
    const resistencia = parseInt(document.getElementById("resistencia").value);
    const aura = parseInt(document.getElementById("aura").value);
    const carisma = parseInt(document.getElementById("carisma").value);

    // Calculando os valores máximos
    const vidaMax = 31 + resistencia; // Vida base 31 + resistência
    const defesaMax = Math.ceil(10 + velocidade / 2); // Defesa base 10 + (velocidade / 2)
    const sanidadeMax = 10 + intelecto; // Sanidade base 10 + intelecto

    // Atualizando os valores máximos nas entradas
    document.getElementById("vidaMaxima").value = vidaMax;
    document.getElementById("defesaMaxima").value = defesaMax;
    document.getElementById("sanidadeMaxima").value = sanidadeMax;
  };

  // Adicionando o evento para atualizar os valores ao alterar os atributos
  const atributosInputs = document.querySelectorAll("#atributos input");
  atributosInputs.forEach(input => {
    input.addEventListener("input", updateStats);
  });

  // Inicializar os cálculos quando a página carregar
  updateStats();
});

document.getElementById("download-pdf").addEventListener("click", () => {
  const contents = document.querySelectorAll(".tab-content");
  const activeTab = document.querySelector(".tab-button.active");
  
  // Tornar todas as abas visíveis
  contents.forEach(content => content.classList.add("active"));

  // Gerar o PDF
  const element = document.querySelector(".container"); // Escolha o elemento para converter em PDF
  const options = {
    filename: 'ficha-personagem.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(options).from(element).save().then(() => {
    // Restaurar o estado original das abas
    contents.forEach(content => content.classList.remove("active"));
    if (activeTab) {
      document.getElementById(activeTab.dataset.tab).classList.add("active");
    }
  });
});
