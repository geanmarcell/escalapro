function openDemo() {
    document.querySelector('.demo').scrollIntoView({ behavior: 'smooth' });
}

function updateSchedule(month) {
    const scheduleBody = document.getElementById('schedule-body');
    scheduleBody.innerHTML = '';

    // Dados de exemplo para demonstração
    const sampleData = {
        '2025-11': [
            { cracha: '001', nome: 'João Silva', cargo: 'Analista', entrada: '06:00', saida: '14:00', dias: ['T', 'T', 'F', 'T', 'T'] },
            { cracha: '002', nome: 'Maria Oliveira', cargo: 'Gerente', entrada: '14:00', saida: '22:00', dias: ['F', 'T', 'T', 'F', 'V'] }
        ],
        '2025-12': [
            { cracha: '001', nome: 'João Silva', cargo: 'Analista', entrada: '06:00', saida: '14:00', dias: ['T', 'F', 'T', 'T', 'F'] },
            { cracha: '002', nome: 'Maria Oliveira', cargo: 'Gerente', entrada: '14:00', saida: '22:00', dias: ['T', 'T', 'F', 'V', 'T'] }
        ]
    };

    const data = sampleData[month] || sampleData['2025-11'];
    data.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.cracha}</td>
            <td>${employee.nome}</td>
            <td>${employee.cargo}</td>
            <td>${employee.entrada}</td>
            <td>${employee.saida}</td>
            ${employee.dias.map(dia => `<td class="${dia === 'F' ? 'folga' : dia === 'V' ? 'ferias' : ''}">${dia}</td>`).join('')}
        `;
        scheduleBody.appendChild(row);
    });
}

// Código para o slideshow automático
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    // Esconder todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Avançar para o próximo slide
    slideIndex++;
    
    // Voltar ao primeiro slide se chegar ao fim
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Mostrar o slide atual
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    
    // Mudar slide a cada 4 segundos
    setTimeout(showSlides, 4000);
}

// Inicializar com dados de Novembro 2025 e iniciar o slideshow
document.addEventListener('DOMContentLoaded', () => {
    updateSchedule('2025-11');
    showSlides(); // Iniciar o slideshow
});