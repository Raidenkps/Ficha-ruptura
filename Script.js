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
  const element = document.querySelector(".container");
  const options = {
    filename: 'ficha-personagem.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().set(options).from(element).toPdf().get('pdf').then(pdf => {
    const { jsPDF } = window.jspdf;
    const pdfDoc = new jsPDF();

    // Adicionar campos de formulário
    pdfDoc.text("Nome do Personagem:", 20, 30);
    pdfDoc.text("Idade:", 20, 50);
    pdfDoc.text("Tem pais? Quais?", 20, 70);
    pdfDoc.text("Tem irmãos? Quantos?", 20, 100);
    pdfDoc.text("Traumas e medos:", 20, 130);
    pdfDoc.text("Tem alguma mania? Qual?", 20, 160);
    pdfDoc.text("Aparência:", 20, 190);
    pdfDoc.text("Data de aniversário:", 20, 220);
    pdfDoc.text("Força:", 20, 250);
    pdfDoc.text("Velocidade:", 20, 270);
    pdfDoc.text("Intelecto:", 20, 290);
    pdfDoc.text("Resistência:", 20, 310);
    pdfDoc.text("Aura:", 20, 330);
    pdfDoc.text("Carisma:", 20, 350);

    pdfDoc.text("Vida Atual:", 20, 370);
    pdfDoc.text("Vida Máxima:", 80, 370);
    pdfDoc.text("Defesa Atual:", 20, 390);
    pdfDoc.text("Defesa Máxima:", 80, 390);
    pdfDoc.text("Sanidade Atual:", 20, 410);
    pdfDoc.text("Sanidade Máxima:", 80, 410);
    pdfDoc.text("Cansaço:", 20, 430);

    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Nome do Personagem:", { x: 70, y: 20, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Idade:", { x: 70, y: 40, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Tem pais? Quais?", { x: 70, y: 60, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Tem irmãos? Quantos?", { x: 70, y: 90, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Traumas e medos:", { x: 70, y: 120, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Tem alguma mania? Qual?", { x: 70, y: 150, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Aparência:", { x: 70, y: 180, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Data de aniversário:", { x: 70, y: 210, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Força:", { x: 70, y: 240, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Velocidade:", { x: 70, y: 260, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Intelecto:", { x: 70, y: 280, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Resistência:", { x: 70, y: 300, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Aura:", { x: 70, y: 320, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Carisma:", { x: 70, y: 340, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Vida Atual:", { x: 70, y: 360, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Vida Máxima:", { x: 130, y: 360, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Defesa Atual:", { x: 70, y: 380, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Defesa Máxima:", { x: 130, y: 380, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Sanidade Atual:", { x: 70, y: 400, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Sanidade Máxima:", { x: 130, y: 400, width: 100, height: 20 }));
    pdfDoc.addField(new pdfDoc.AcroForm.TextField("Cansaço:", { x: 70, y: 420, width: 100, height: 20 }));

    pdfDoc.save("ficha-personagem-editavel.pdf");
  });

  // Restaurar o estado original das abas
  contents.forEach(content => content.classList.remove("active"));
  if (activeTab) {
    document.getElementById(activeTab.dataset.tab).classList.add("active");
  }
});
