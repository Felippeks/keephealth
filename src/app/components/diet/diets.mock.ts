
// DIETAS MOCKADAS NO LOCALSTORAGE:
let diets = [
    {
      id: 1,
      name: 'Dieta Mediterrânea',
      description:
        ' Rica em frutas, legumes, verduras, cereais integrais e azeite de oliva.',
      qttCalories: 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 2,
      name: 'Dieta Vegetariana',
      description:
        ' Exclui carnes vermelhas, mas permite peixes, ovos e laticínios.',
      qttCalories: 1500,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 3,
      name: 'Dieta Cetogênica',
      description:
        'Rica em gorduras, com baixo teor de carboidratos e moderada em proteínas. Ideal para perda de peso e controle da glicemia.',
      qttCalories: 2000,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 4,
      name: 'Dieta Low-Carb',
      description:
        'Reduz o consumo de carboidratos, focando em proteínas e gorduras saudáveis. Boa para perda de peso e controle do apetite.',
      qttCalories: 1600,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 5,
      name: 'Dieta Intermitente',
      description:
        'Cicla períodos de jejum com períodos de alimentação normal. Promove perda de peso, saúde metabólica e autofagia.',
      qttCalories: 'Variável',
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 6,
      name: 'Dieta Flexitariana',
      description:
        'Predominantemente vegetariana, mas permite consumo ocasional de carne. Ideal para quem busca reduzir o consumo de carne sem abandoná-la totalmente.',
      qttCalories: 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 7,
      name: 'Dieta Vegana',
      description:
        'Exclui todos os produtos de origem animal. Rica em frutas, legumes, verduras, grãos integrais e leguminosas.',
      qttCalories: 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 8,
      name: 'Dieta DASH',
      description:
        'Reduz a pressão arterial e o risco de doenças cardíacas. Rica em frutas, legumes, verduras, grãos integrais e laticínios com baixo teor de gordura.',
      qttCalories: 2000,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 9,
      name: 'Dieta Ovolactovegetariana',
      description:
        'Exclui carne vermelha e aves, mas permite ovos e laticínios. Ideal para quem busca uma dieta vegetariana rica em proteínas.',
      qttCalories: 1700,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 10,
      name: 'Dieta Sem Glúten',
      description:
        'Exclui o glúten, proteína presente no trigo, centeio e cevada. Boa para pessoas com doença celíaca ou sensibilidade ao glúten.',
      qttCalories: 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 11,
      name: 'Dieta Sem Lactose',
      description:
        'Exclui a lactose, açúcar presente no leite e seus derivados. Boa para pessoas com intolerância à lactose.',
      qttCalories: 1700,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 12,
      name: 'Dieta Alcalina',
      description:
        'Baseada na ideia de que o pH do sangue influencia na saúde. Prioriza alimentos alcalinos e evita alimentos acidificantes. Inclui frutas, legumes, verduras, grãos integrais e leguminosas.',
      qttCalories: 1900,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 13,
      name: 'Dieta Detox',
      description:
        'Visa eliminar toxinas do corpo. Rica em frutas, legumes, verduras, água e chás.',
      qttCalories: 1500,
      qttDaysFeed: 3 - 5,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 14,
      name: 'Dieta Anti-inflamatória',
      description:
        'Reduz a inflamação no corpo, o que pode ajudar a prevenir e tratar doenças crônicas. Rica em frutas, legumes, verduras, grãos integrais e gorduras saudáveis.',
      qttCalories: 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 15,
      name: 'Dieta para Ganho de Massa Muscular',
      description:
        'Rica em proteínas e calorias para ajudar a construir músculos. Inclui carne vermelha, frango, peixe, ovos, laticínios, leguminosas e grãos integrais.',
      qttCalories: 2500 - 3000,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 16,
      name: 'Dieta para Definição Muscular',
      description:
        'Rica em proteínas e com baixo teor de gordura para ajudar a definir os músculos. Inclui carne vermelha magra, frango, peixe, ovos, laticínios, leguminosas e grãos integrais.',
      qttCalories: 2000 - 2500,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 17,
      name: 'Dieta para Gestantes',
      description:
        'Rica em nutrientes para suprir as necessidades da mãe e do bebê. Inclui frutas, legumes, verduras, grãos integrais, proteínas magras e laticínios.',
      qttCalories: 1800 - 2200,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 18,
      name: 'Dieta para Idosos',
      description:
        'Rica em nutrientes para ajudar a manter a saúde e prevenir doenças. Inclui frutas, legumes, verduras, grãos integrais, proteínas magras e laticínios.',
      qttCalories: 1500 - 1800,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 19,
      name: 'Dieta para Diabéticos',
      description:
        'Controla os níveis de açúcar no sangue. Rica em fibras, proteínas magras e gorduras saudáveis. Limita o consumo de carboidratos simples e açúcares.',
      qttCalories: 1800 - 2000,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
    {
      id: 20,
      name: 'Dieta Paleo',
      description:
        ' Baseada em alimentos consumidos pelos nossos ancestrais caçadores-coletores.',
      qttCalories: 2200,
      qttDaysFeed: 7,
      imageLink: 'https://via.placeholder.com/150x150',
    },
  ];
  
  localStorage.setItem(
    'diets',
    JSON.stringify(diets)
  );