// Dados do gráfico
const data = {
    labels: [
        'Pouca ou nenhuma compreensão',
        'Compreensão superficial',
        'Compreensão profunda'
    ],
    datasets: [{
        label: 'Compreensão sobre Saúde Mental',
        data: [60, 30, 10], // Porcentagens
        backgroundColor: [
            '#ff9999',
            '#66b3ff',
            '#99ff99'
        ],
        hoverOffset: 4
    }]
};

// Configurações do gráfico
const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + '%';
                        }
                        return label;
                    }
                }
            }
        }
    },
};

// Renderizar o gráfico
const myPieChart = new Chart(
    document.getElementById('myPieChart'),
    config
);
