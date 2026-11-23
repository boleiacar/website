const pt = {
  meta: {
    title: 'Boleia · Partilhe a viagem, divida o custo',
    description:
      'Motoristas verificados partilham os lugares livres no carro e os passageiros reservam um lugar em segundos. Viaje pela cidade ou pelo país, de forma mais barata, segura e simples.',
  },
  nav: {
    how: 'Como funciona',
    benefits: 'Vantagens',
    safety: 'Segurança',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Em breve em Angola',
    title: 'A sua próxima boleia já vai a caminho.',
    subtitle:
      'Motoristas verificados partilham os lugares livres no carro e os passageiros reservam um lugar em segundos. Viaje pela cidade ou pelo país, de forma mais barata, segura e simples.',
    soonOn: 'Em breve no',
    soonIn: 'Em breve na',
    googlePlay: 'Google Play',
    appStore: 'App Store',
  },
  trust: {
    verified: 'Motoristas verificados',
    sos: 'SOS 24 horas',
    price: 'Preço fixo por lugar, em kwanzas',
    payment: 'Pagamento na app',
  },
  how: {
    eyebrow: 'Como funciona',
    title: 'Da pesquisa ao lugar no carro, em quatro passos.',
    tabPassenger: 'Sou passageiro',
    tabDriver: 'Sou motorista',
    passenger: [
      { t: 'Pesquise', d: 'Indique para onde vai e quando.' },
      {
        t: 'Reserve',
        d: 'Escolha uma boleia, veja o motorista, o carro, a avaliação e o preço, e reserve o seu lugar.',
      },
      {
        t: 'Pague com segurança',
        d: 'Pague com cartão na app. Se a viagem for cancelada, é reembolsado automaticamente.',
      },
      { t: 'Viaje', d: 'Encontre o motorista e siga.' },
    ],
    driver: [
      {
        t: 'Seja verificado',
        d: 'Envie o BI, a carta de condução, uma selfie e os documentos do veículo.',
      },
      {
        t: 'Publique uma viagem',
        d: 'Defina a rota, as paragens, a hora de partida e os lugares. A app sugere um preço justo.',
      },
      { t: 'Preencha os lugares', d: 'Os passageiros reservam e pagam antecipadamente.' },
      { t: 'Receba', d: 'Os seus ganhos são pagos automaticamente.' },
    ],
  },
  benefits: {
    eyebrow: 'Vantagens',
    title: 'Mais barato do que ir sozinho. Mais seguro do que apanhar boleia na rua.',
    items: [
      {
        t: 'Motoristas verificados',
        d: 'A identidade, a carta e o veículo de cada motorista são revistos pela nossa equipa.',
      },
      {
        t: 'SOS com localização em tempo real',
        d: 'Um toque alerta a nossa equipa, que vê onde está.',
      },
      { t: 'Preços fixos e justos', d: 'O preço por lugar aparece antes de reservar. Sem regatear.' },
      {
        t: 'Sem dinheiro, com segurança',
        d: 'Pagamento com cartão na app e reembolso automático se a viagem for cancelada.',
      },
      {
        t: 'Cidade e longa distância',
        d: 'Viagens diárias em Luanda e rotas interurbanas por Angola.',
      },
      {
        t: 'Viaje à sua maneira',
        d: 'Veja o espaço para bagagem, as paragens e as preferências (não fumar, música) antes de reservar.',
      },
      { t: 'Avaliações', d: 'Passageiros e motoristas avaliam-se após cada viagem.' },
      { t: 'Português e inglês', d: 'A app e o apoio estão disponíveis nas duas línguas.' },
      {
        t: 'Apoio real',
        d: 'Centro de ajuda, pedidos de suporte e denúncias, tratados por uma equipa local.',
      },
    ],
  },
  safety: {
    eyebrow: 'Segurança',
    title: 'A segurança vem primeiro.',
    verification:
      'Cada motorista é verificado manualmente antes de publicar uma viagem: BI, carta de condução, selfie em tempo real e documentos do veículo.',
    sos: 'Durante a viagem, passageiros e motoristas têm um botão SOS que partilha a localização em tempo real com a equipa de operações da Boleia, disponível 24 horas por dia.',
    docs: ['BI', 'Carta de condução', 'Selfie em tempo real', 'Documentos do veículo'],
    photoAlt: 'Motorista da Boleia a receber passageiros à porta de um hotel',
  },
  routes: {
    title: 'Pela cidade e pelo país.',
    city: 'Cidade',
    intercity: 'Interurbana',
  },
  closing: {
    title: 'Partilhe a viagem, divida o custo.',
    subtitle: 'A app está quase pronta. Em breve no Google Play e na App Store.',
  },
  footer: {
    languages: 'Português · English',
    rights: '© 2026 Boleia',
  },
  phone: {
    greeting: 'Bom dia',
    searchTitle: 'Encontrar boleia',
    from: 'De',
    to: 'Para',
    date: 'Selecionar data',
    search: 'Pesquisar viagens',
    recentRoutes: 'Rotas recentes',
    seeAll: 'Ver tudo',
    tapRoute: 'Toque para usar esta rota',
    tabs: ['Início', 'Viagens', 'Mensagens', 'Perfil'],
    publishTitle: 'Publicar viagem',
    step: 'Passo 6 de 6 · Preço',
    pricePerSeat: 'Preço por lugar',
    perSeat: 'AOA por lugar',
    recommended: 'Preço recomendado',
    publish: 'Publicar viagem',
  },
}

export default pt
export type Messages = typeof pt
