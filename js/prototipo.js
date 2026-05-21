const problemasEcologicos = {
    clima: {
        titulo: 'Mudanças climáticas',
        causa: 'Emissões de gases de efeito estufa',
        resumo: 'Uso de energia, transporte movido a combustíveis fósseis e consumo sem controle aumentam emissões e desperdício de recursos.',
        mensagem: 'Comece por ações de energia e transporte. São hábitos simples de medir, pontuar e transformar em evolução dentro da plataforma.',
        quests: [
            {
                titulo: 'Modo economia por 2 horas',
                dificuldade: 'facil',
                pontos: 40,
                tempo: '10 min de preparação',
                descricao: 'Desligue luzes desnecessárias, tire carregadores da tomada e reduza o brilho da tela por pelo menos 2 horas.'
            },
            {
                titulo: 'Trajeto de baixo carbono',
                dificuldade: 'medio',
                pontos: 80,
                tempo: '1 deslocamento',
                descricao: 'Faça um trajeto curto caminhando, de bicicleta, transporte público ou carona compartilhada.'
            },
            {
                titulo: 'Dia com consumo consciente',
                dificuldade: 'dificil',
                pontos: 140,
                tempo: '1 dia',
                descricao: 'Passe um dia sem compras por impulso e registre três escolhas que reduziram gasto de energia ou recursos.'
            }
        ]
    },
    residuos: {
        titulo: 'Resíduos e descarte incorreto',
        causa: 'Excesso de lixo, descarte misturado e baixa reutilização',
        resumo: 'O aumento de resíduos pressiona coleta, aterros e reciclagem. Separar, reduzir e reutilizar evita desperdício e melhora o impacto ambiental.',
        mensagem: 'Para resíduos, a melhor quest é objetiva: separar, reutilizar e reduzir. A Lumën pontua ações fáceis de comprovar no dia a dia.',
        quests: [
            {
                titulo: 'Separação inteligente',
                dificuldade: 'facil',
                pontos: 35,
                tempo: '15 min',
                descricao: 'Separe papel, plástico, metal ou vidro de um descarte comum e identifique onde cada item deveria ir.'
            },
            {
                titulo: 'Reutilize antes de jogar fora',
                dificuldade: 'medio',
                pontos: 75,
                tempo: '30 min',
                descricao: 'Escolha uma embalagem ou objeto e encontre uma forma útil de reutilizá-lo por mais uma semana.'
            },
            {
                titulo: 'Dia lixo mínimo',
                dificuldade: 'dificil',
                pontos: 130,
                tempo: '1 dia',
                descricao: 'Planeje um dia tentando gerar o mínimo possível de lixo descartável e anote quais escolhas ajudaram mais.'
            }
        ]
    },
    agua: {
        titulo: 'Desperdício de água',
        causa: 'Uso excessivo, vazamentos e hábitos sem controle',
        resumo: 'Banhos longos, torneiras abertas e pequenos vazamentos aumentam desperdício. Medir o uso ajuda a mudar comportamento.',
        mensagem: 'Água combina muito com missões rápidas. O usuário entende o impacto quando percebe onde desperdiça sem notar.',
        quests: [
            {
                titulo: 'Banho cronometrado',
                dificuldade: 'facil',
                pontos: 30,
                tempo: '1 banho',
                descricao: 'Reduza o tempo do banho e registre quantos minutos conseguiu economizar em relação ao normal.'
            },
            {
                titulo: 'Caça ao vazamento',
                dificuldade: 'medio',
                pontos: 70,
                tempo: '20 min',
                descricao: 'Verifique torneiras, descarga e cozinha procurando sinais de vazamento ou uso desnecessário de água.'
            },
            {
                titulo: 'Rotina de reuso',
                dificuldade: 'dificil',
                pontos: 120,
                tempo: '1 dia',
                descricao: 'Encontre uma forma segura de reutilizar água em uma tarefa doméstica, como limpeza de área externa ou rega.'
            }
        ]
    },
    biodiversidade: {
        titulo: 'Perda de biodiversidade',
        causa: 'Desmatamento, degradação de habitats e baixa conexão com áreas verdes',
        resumo: 'A natureza depende de habitats preservados. Pequenas ações de cuidado com áreas verdes ajudam a criar consciência e proteção local.',
        mensagem: 'Aqui a experiência precisa conectar o usuário com o ambiente ao redor. A quest deve parecer simples, mas gerar vínculo com a natureza.',
        quests: [
            {
                titulo: 'Mapa verde do bairro',
                dificuldade: 'facil',
                pontos: 45,
                tempo: '20 min',
                descricao: 'Identifique uma praça, árvore ou área verde próxima e registre por que ela é importante para a comunidade.'
            },
            {
                titulo: 'Cuidado com uma planta',
                dificuldade: 'medio',
                pontos: 85,
                tempo: '1 semana',
                descricao: 'Escolha uma planta para cuidar durante a semana, acompanhando luz, água e crescimento.'
            },
            {
                titulo: 'Ação de preservação local',
                dificuldade: 'dificil',
                pontos: 150,
                tempo: '1 ação',
                descricao: 'Participe ou organize uma pequena ação de cuidado com área verde, como limpeza segura ou conscientização.'
            }
        ]
    },
    poluicao: {
        titulo: 'Poluição urbana',
        causa: 'Emissões, descarte irregular e excesso de materiais descartáveis',
        resumo: 'Poluição afeta ar, água, solo e saúde. A experiência deve incentivar escolhas que reduzam exposição e descarte incorreto.',
        mensagem: 'Para poluição, a Lumën recomenda missões visíveis: observar o problema, reduzir descartáveis e compartilhar uma solução simples.',
        quests: [
            {
                titulo: 'Observador da poluição',
                dificuldade: 'facil',
                pontos: 35,
                tempo: '15 min',
                descricao: 'Observe um ponto com lixo, fumaça ou descarte irregular e pense em uma ação preventiva para esse problema.'
            },
            {
                titulo: 'Sem descartável hoje',
                dificuldade: 'medio',
                pontos: 80,
                tempo: '1 dia',
                descricao: 'Evite copos, sacolas ou talheres descartáveis por um dia e registre qual item foi mais fácil substituir.'
            },
            {
                titulo: 'Mini campanha consciente',
                dificuldade: 'dificil',
                pontos: 135,
                tempo: '1 publicação ou conversa',
                descricao: 'Crie uma mensagem curta de conscientização sobre descarte correto ou redução de poluição e compartilhe com alguém.'
            }
        ]
    }
};

const textosDificuldade = {
    facil: 'Fácil',
    medio: 'Médio',
    dificil: 'Difícil'
};

const elementos = {
    tabs: document.querySelectorAll('.quest-tab'),
    filtroDificuldade: document.querySelector('#difficulty-filter'),
    gradeQuests: document.querySelector('#quest-grid'),
    tituloProblema: document.querySelector('#quest-problem-title'),
    tituloCausa: document.querySelector('#quest-cause-title'),
    textoCausa: document.querySelector('#quest-cause-text'),
    textoLumen: document.querySelector('#quest-lumen-text'),
    etiquetaLumen: document.querySelector('#quest-lumen-label'),
    nomeUsuario: document.querySelector('#quest-user-name'),
    nivelUsuario: document.querySelector('#quest-level'),
    pontosTotais: document.querySelector('#quest-total-points'),
    barraProgresso: document.querySelector('#quest-progress-bar'),
    textoProgresso: document.querySelector('#quest-progress-text'),
    balaoLumen: document.querySelector('.quest-bubble'),
    modal: document.querySelector('#quest-modal'),
    modalTitulo: document.querySelector('#quest-modal-title'),
    modalTexto: document.querySelector('#quest-modal-text'),
    modalFechar: document.querySelector('#quest-modal-close')
};

let problemaAtual = 'clima';
let pontosUsuario = Number(localStorage.getItem('pontosSoulUp')) || 0;
let questsConcluidas = JSON.parse(localStorage.getItem('questsConcluidasSoulUp')) || [];

function obterUsuarioLogado() {
    const dadosSalvos = localStorage.getItem('usuarioSoulUp');

    if (!dadosSalvos) return null;

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        localStorage.removeItem('usuarioSoulUp');
        return null;
    }
}

function obterNivel(pontos) {
    if (pontos >= 500) return { nome: 'Guardião Verde', atual: 500, proximo: 500 };
    if (pontos >= 300) return { nome: 'Eco Líder', atual: 300, proximo: 500 };
    if (pontos >= 120) return { nome: 'Eco Ativo', atual: 120, proximo: 300 };
    return { nome: 'Eco Iniciante', atual: 0, proximo: 120 };
}

function atualizarUsuario() {
    const usuario = obterUsuarioLogado();
    const nome = usuario && usuario.nome ? usuario.nome : 'Visitante Soul UP';

    elementos.nomeUsuario.textContent = nome;
    elementos.etiquetaLumen.textContent = usuario && usuario.nome
        ? `Plano da Lumën para ${usuario.nome}`
        : 'Plano da Lumën para visitante';
}

function atualizarProgresso() {
    const nivel = obterNivel(pontosUsuario);
    const intervalo = nivel.proximo - nivel.atual;
    const pontosNoNivel = pontosUsuario - nivel.atual;
    const porcentagem = nivel.proximo === nivel.atual ? 100 : Math.min((pontosNoNivel / intervalo) * 100, 100);

    elementos.nivelUsuario.textContent = nivel.nome;
    elementos.pontosTotais.textContent = pontosUsuario;
    elementos.barraProgresso.style.width = `${porcentagem}%`;

    if (nivel.proximo === nivel.atual) {
        elementos.textoProgresso.textContent = 'Você atingiu o maior nível desta demonstração.';
        return;
    }

    elementos.textoProgresso.textContent = `Faltam ${nivel.proximo - pontosUsuario} pontos para o próximo nível.`;
}

function atualizarProblema() {
    const problema = problemasEcologicos[problemaAtual];

    elementos.tituloProblema.textContent = problema.titulo;
    elementos.tituloCausa.textContent = problema.causa;
    elementos.textoCausa.textContent = problema.resumo;
    elementos.textoLumen.textContent = problema.mensagem;

    elementos.tabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.problem === problemaAtual);
    });

    animarBalaoLumen();
    renderizarQuests();
}

function renderizarQuests() {
    const problema = problemasEcologicos[problemaAtual];
    const dificuldadeSelecionada = elementos.filtroDificuldade.value;

    const questsFiltradas = problema.quests.filter((quest) => {
        return dificuldadeSelecionada === 'todas' || quest.dificuldade === dificuldadeSelecionada;
    });

    elementos.gradeQuests.innerHTML = '';

    questsFiltradas.forEach((quest, indice) => {
        const questId = `${problemaAtual}-${quest.dificuldade}-${indice}`;
        const concluida = questsConcluidas.includes(questId);
        const card = document.createElement('article');

        card.className = `quest-card quest-card--${quest.dificuldade}`;
        card.innerHTML = `
            <div class="quest-card-top">
                <span class="quest-difficulty">${textosDificuldade[quest.dificuldade]}</span>
                <strong>${quest.pontos} pts</strong>
            </div>
            <h3>${quest.titulo}</h3>
            <p>${quest.descricao}</p>
            <small>Tempo estimado: ${quest.tempo}</small>
            <button class="quest-complete-btn" type="button" data-quest-id="${questId}" data-pontos="${quest.pontos}" ${concluida ? 'disabled' : ''}>
                ${concluida ? 'Quest concluída' : 'Concluir quest'}
            </button>
        `;

        elementos.gradeQuests.appendChild(card);
    });
}

function concluirQuest(questId, pontos) {
    if (questsConcluidas.includes(questId)) return;

    pontosUsuario += pontos;
    questsConcluidas.push(questId);

    localStorage.setItem('pontosSoulUp', pontosUsuario);
    localStorage.setItem('questsConcluidasSoulUp', JSON.stringify(questsConcluidas));

    atualizarProgresso();
    renderizarQuests();
    abrirModal('Quest concluída!', `Você ganhou ${pontos} Pontos Verdes. A Lumën atualizou seu progresso sustentável.`);
}

function abrirModal(titulo, texto) {
    elementos.modalTitulo.textContent = titulo;
    elementos.modalTexto.textContent = texto;
    elementos.modal.classList.add('is-open');
    elementos.modal.setAttribute('aria-hidden', 'false');
}

function fecharModal() {
    elementos.modal.classList.remove('is-open');
    elementos.modal.setAttribute('aria-hidden', 'true');
}

function animarBalaoLumen() {
    if (!elementos.balaoLumen) return;

    elementos.balaoLumen.classList.remove('is-changing');
    void elementos.balaoLumen.offsetWidth;
    elementos.balaoLumen.classList.add('is-changing');
}

function iniciarEventos() {
    elementos.tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            problemaAtual = tab.dataset.problem;
            atualizarProblema();
        });
    });

    elementos.filtroDificuldade.addEventListener('change', renderizarQuests);

    elementos.gradeQuests.addEventListener('click', (evento) => {
        const botao = evento.target.closest('.quest-complete-btn');
        if (!botao) return;

        concluirQuest(botao.dataset.questId, Number(botao.dataset.pontos));
    });

    elementos.modalFechar.addEventListener('click', fecharModal);

    elementos.modal.addEventListener('click', (evento) => {
        if (evento.target === elementos.modal) fecharModal();
    });

    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') fecharModal();
    });
}

atualizarUsuario();
atualizarProgresso();
atualizarProblema();
iniciarEventos();
