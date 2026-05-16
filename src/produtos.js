/*produtos.js*/
export const PRODUTOS = [

  /*HEADSETS*/
  {
    id: 1, categoria: 'headsets', preco: 289.90, img:"../img/head.jpg",
    nome: { pt: 'Headset Pro Gaming 7.1',       en: 'Pro Gaming Headset 7.1' },
    desc: { pt: 'Áudio surround 7.1 virtual com microfone retrátil e almofadas de espuma memory foam para sessões longas.',
            en: 'Virtual 7.1 surround sound with retractable mic and memory foam ear cushions for long gaming sessions.' },
  },
  {
    id: 2, categoria: 'headsets', preco: 459.90, img:"../img/head (1).jpg",
    nome: { pt: 'Headset Wireless Elite',        en: 'Elite Wireless Headset' },
    desc: { pt: 'Conexão sem fio 2.4GHz de baixa latência, bateria de 30h e design ultraleve para máximo conforto.',
            en: 'Low-latency 2.4GHz wireless, 30h battery and ultra-light design for maximum comfort.' },
  },
  {
    id: 3, categoria: 'headsets', preco: 199.90, img:"../img/head (2).jpg",
    nome: { pt: 'Headset RGB Fusion',            en: 'RGB Fusion Headset' },
    desc: { pt: 'Iluminação RGB personalizável em 16M de cores, driver de 50mm e microfone unidirecional antiruído.',
            en: 'Customizable RGB in 16M colors, 50mm driver and unidirectional noise-cancelling mic.' },
  },
  {
    id: 4, categoria: 'headsets', preco: 149.90, img:"../img/head (3).jpg",
    nome: { pt: 'Headset Travel Lite',           en: 'Travel Lite Headset' },
    desc: { pt: 'Compacto e dobrável para viagens, compatível com PC, console e smartphone. Cabo removível de 1.5m.',
            en: 'Compact and foldable for travel, compatible with PC, console and smartphone.' },
  },
  {
    id: 5, categoria: 'headsets', preco: 379.90, img:"../img/head (4).jpg",
    nome: { pt: 'Headset Studio Premium',        en: 'Studio Premium Headset' },
    desc: { pt: 'Qualidade de áudio estúdio com resposta de frequência ampla de 15Hz-25kHz e controles no fio.',
            en: 'Studio audio quality with wide 15Hz-25kHz frequency response and in-line controls.' },
  },
  {
    id: 6, categoria: 'headsets', preco: 329.90, img:"../img/head (5).jpg",
    nome: { pt: 'Headset Surround Ultra',        en: 'Ultra Surround Headset' },
    desc: { pt: 'Surround virtual 360° com equalizador por software e microfone com braço flexível ajustável.',
            en: '360° virtual surround with software EQ and headset with adjustable flexible boom mic.' },
  },
  {
    id: 7, categoria: 'headsets', preco: 179.90, img:"../img/head (6).jpg",
    nome: { pt: 'Headset Gamer X1',              en: 'Gamer X1 Headset' },
    desc: { pt: 'Estrutura reforçada em plástico ABS premium, som claro e alto e microfone omnidirecional removível.',
            en: 'Reinforced ABS premium build, clear loud sound and removable omnidirectional microphone.' },
  },
  {
    id: 8, categoria: 'headsets', preco: 219.90, img:"../img/head (7).jpg",
    nome: { pt: 'Headset BassBoost Pro',         en: 'BassBoost Pro Headset' },
    desc: { pt: 'Driver de 53mm com tecnologia de graves potentes, ideal para quem valoriza baixos profundos.',
            en: '53mm driver with powerful bass tech, ideal for those who value deep bass in games.' },
  },
  {
    id: 9, categoria: 'headsets', preco: 499.90, img:"../img/head (8).jpg",
    nome: { pt: 'Headset Noise Cancel Active',   en: 'Active Noise Cancel Headset' },
    desc: { pt: 'Cancelamento de ruído ativo híbrido para foco total. Chip de áudio dedicado com DSP integrado.',
            en: 'Hybrid active noise cancellation for total focus. Dedicated audio chip with integrated DSP.' },
  },
  {
    id: 10, categoria: 'headsets', preco: 239.90, img:"../img/head (9).jpg",
    nome: { pt: 'Headset ClearVoice DX',         en: 'ClearVoice DX Headset' },
    desc: { pt: 'Tecnologia ClearVoice que isola sua voz eliminando ruídos de fundo automaticamente em tempo real.',
            en: 'ClearVoice technology isolates your voice, eliminating background noise automatically in real time.' },
  },
  {
    id: 11, categoria: 'headsets', preco: 259.90, img:"../img/head (10).jpg",
    nome: { pt: 'Headset Neon RGB Pro',          en: 'Neon RGB Pro Headset' },
    desc: { pt: 'Visual RGB vibrante, almofadas de couro sintético premium e driver de alta fidelidade 50mm.',
            en: 'Vibrant RGB look, premium synthetic leather cushions and 50mm high-fidelity driver.' },
  },
  {
    id: 12, categoria: 'headsets', preco: 129.90, img:"../img/head.jpg",
    nome: { pt: 'Headset Flex Lite',             en: 'Flex Lite Headset' },
    desc: { pt: 'Design ultrafino com hastes flexíveis de aço, leve e confortável para uso prolongado diário.',
            en: 'Ultra-thin design with flexible steel stems, light and comfortable for extended daily use.' },
  },
  {
    id: 13, categoria: 'headsets', preco: 349.90, img:"../img/head.jpg",
    nome: { pt: 'Headset Commander V2',          en: 'Commander V2 Headset' },
    desc: { pt: 'Áudio Hi-Res certificado, microfone cardioide e arco ajustável com revestimento em alumínio escovado.',
            en: 'Certified Hi-Res audio, cardioid microphone and brushed aluminum adjustable headband.' },
  },
  {
    id: 14, categoria: 'headsets', preco: 299.90, img:"../img/head (13).jpg",
    nome: { pt: 'Headset Stealth Edition',       en: 'Stealth Edition Headset' },
    desc: { pt: 'Visual todo-preto discreto com desempenho de alto nível. Ideal para streamers e jogadores competitivos.',
            en: 'Discreet all-black look with top-level performance. Ideal for streamers and competitive players.' },
  },
  {
    id: 15, categoria: 'headsets', preco: 189.90, img:"../img/head (14).jpg",
    nome: { pt: 'Headset Crystal Sound',         en: 'Crystal Sound Headset' },
    desc: { pt: 'Clareza de áudio cristalina com resposta plana de frequência, perfeito para FPS e comunicação.',
            en: 'Crystal clear audio with flat frequency response, perfect for FPS games and team communication.' },
  },
  {
    id: 16, categoria: 'headsets', preco: 269.90, img:"../img/head (15).jpg",
    nome: { pt: 'Headset TurboAudio 360',        en: 'TurboAudio 360 Headset' },
    desc: { pt: 'Driver de alta velocidade com resposta de 1ms, equalizador de 7 bandas e controles laterais no cabo.',
            en: 'High-speed driver with 1ms response, 7-band EQ and side controls on the cable.' },
  },

  /* ══════════════════════════════════════
     TECLADOS — IDs 17 a 32
     ══════════════════════════════════════ */
  
  {
    id: 17, categoria: 'keyboards', preco: 399.90, img:"../img/teclado (16).jpg",
    nome: { pt: 'Teclado Mecânico RGB Full',     en: 'Full RGB Mechanical Keyboard' },
    desc: { pt: 'Switch linear 45g, retroiluminação RGB por tecla com 16M de cores e estrutura em alumínio escovado.',
            en: '45g linear switch, per-key RGB with 16M colors and brushed aluminum structure.' },
  },
  {
    id: 18, categoria: 'keyboards', preco: 329.90, img:"../img/teclado (2).jpg",
    nome: { pt: 'Teclado TKL Compact Pro',       en: 'TKL Compact Pro Keyboard' },
    desc: { pt: 'Layout tenkeyless para mais espaço ao mouse, switch clicky tátil e retroiluminação RGB suave.',
            en: 'Tenkeyless layout for more mouse room, tactile clicky switch and smooth RGB backlight.' },
  },
  {
    id: 19, categoria: 'keyboards', preco: 279.90, img:"../img/teclado (3).jpg",
    nome: { pt: 'Teclado Wireless Slim 2.4G',    en: 'Wireless Slim 2.4G Keyboard' },
    desc: { pt: 'Conexão sem fio 2.4GHz com latência ultrabaixa, bateria de 40h e perfil slim de apenas 18mm.',
            en: '2.4GHz wireless with ultra-low latency, 40h battery and 18mm slim profile.' },
  },
  {
    id: 20, categoria: 'keyboards', preco: 249.90, img:"../img/teclado (4).jpg",
    nome: { pt: 'Teclado 60% Pro Gamer',         en: '60% Pro Gamer Keyboard' },
    desc: { pt: 'Layout 60% compacto para setups minimalistas. Switch tátil preciso e RGB por tecla endereçável.',
            en: 'Compact 60% layout for minimalist setups. Precise tactile switch and addressable per-key RGB.' },
  },
  {
    id: 21, categoria: 'keyboards', preco: 149.90, img:"../img/teclado (5).jpg",
    nome: { pt: 'Teclado Membrana Gamer Pro',    en: 'Pro Gamer Membrane Keyboard' },
    desc: { pt: 'Membrana de alta resposta com teclas de perfil baixo, retroiluminação azul e suporte de pulso embutido.',
            en: 'High-response membrane with low-profile keys, blue backlight and built-in wrist rest.' },
  },
  {
    id: 22, categoria: 'keyboards', preco: 369.90, img:"../img/teclado (6).jpg",
    nome: { pt: 'Teclado Switch Blue V3',        en: 'Blue Switch V3 Keyboard' },
    desc: { pt: 'Switch azul tátil-sonoro de 3ª geração com feedback audível satisfatório para digitação e gaming.',
            en: '3rd-gen tactile-clicky blue switch with satisfying audible feedback for typing and gaming.' },
  },
  {
    id: 23, categoria: 'keyboards', preco: 349.90, img:"../img/teclado (7).jpg",
    nome: { pt: 'Teclado Switch Red Silent',     en: 'Silent Red Switch Keyboard' },
    desc: { pt: 'Switch vermelho linear silenciado com amortecedor de borracha interno, ideal para ambientes silenciosos.',
            en: 'Silenced linear red switch with rubber dampener, ideal for quiet shared environments.' },
  },
  {
    id: 24, categoria: 'keyboards', preco: 89.90, img:"../img/teclado (8).jpg",
    nome: { pt: 'Numpad Mecânico Extra',         en: 'Mechanical Extra Numpad' },
    desc: { pt: 'Teclado numérico independente com switch mecânico linear, RGB e conexão USB plug-and-play.',
            en: 'Independent numeric keypad with linear mechanical switch, RGB and USB plug-and-play.' },
  },
  {
    id: 25, categoria: 'keyboards', preco: 499.90, img:"../img/teclado (9).jpg",
    nome: { pt: 'Teclado Hot-Swap Elite',        en: 'Hot-Swap Elite Keyboard' },
    desc: { pt: 'Soquetes hot-swap para troca de switches sem soldar, placa de aço e espuma de absorção de som.',
            en: 'Hot-swap sockets to change switches without soldering, steel plate and sound absorption foam.' },
  },
  {
    id: 26, categoria: 'keyboards', preco: 319.90, img:"../img/teclado (10).jpg",
    nome: { pt: 'Teclado Macro Edition',         en: 'Macro Edition Keyboard' },
    desc: { pt: 'Coluna extra de 6 teclas macro programáveis, display OLED integrado e knob rotativo de volume.',
            en: '6 extra programmable macro keys, integrated OLED display and rotary volume knob.' },
  },
  {
    id: 27, categoria: 'keyboards', preco: 449.90, img:"../img/teclado (11).jpg",
    nome: { pt: 'Teclado Aluminum Frame CNC',    en: 'CNC Aluminum Frame Keyboard' },
    desc: { pt: 'Chassi em alumínio CNC sólido, inclinação em 3 ângulos e teclas PBT duplo-shot resistentes.',
            en: 'Solid CNC aluminum chassis, 3-angle tilt and durable double-shot PBT keycaps.' },
  },
  {
    id: 28, categoria: 'keyboards', preco: 129.90, img:"../img/teclado (12).jpg",
    nome: { pt: 'Teclado Budget Mecânico RGB',   en: 'Budget RGB Mechanical Keyboard' },
    desc: { pt: 'Ótima entrada no universo mecânico com switch linear suave, RGB e layout ABNT2 completo.',
            en: 'Great entry into the mechanical universe with smooth linear switch and full RGB.' },
  },
  {
    id: 29, categoria: 'keyboards', preco: 289.90, img:"../img/teclado (13).jpg",
    nome: { pt: 'Teclado Gamer X Pro',           en: 'Gamer X Pro Keyboard' },
    desc: { pt: 'Estabilizadores lubrificados de fábrica, switch veloz de 35g de acionamento e RGB por zona.',
            en: 'Factory lubricated stabilizers, fast 35g activation switch and zone RGB lighting.' },
  },
  {
    id: 30, categoria: 'keyboards', preco: 239.90, img:"../img/teclado (14).jpg",
    nome: { pt: 'Teclado Wireless BT Triple',    en: 'BT Triple Wireless Keyboard' },
    desc: { pt: 'Triplo modo: 2.4GHz, Bluetooth 5.0 e USB com fio. Conecta até 3 dispositivos simultaneamente.',
            en: 'Triple mode: 2.4GHz, Bluetooth 5.0 and wired USB. Connects up to 3 devices.' },
  },
  {
    id: 31, categoria: 'keyboards', preco: 219.90, img:"../img/teclado (15).jpg",
    nome: { pt: 'Teclado Mini 65% Navigator',    en: 'Mini 65% Navigator Keyboard' },
    desc: { pt: 'Layout 65% mantendo setas e cluster de navegação. Equilíbrio perfeito entre compacto e funcional.',
            en: '65% layout keeping arrows and navigation cluster. Perfect balance of compact and functional.' },
  },
  {
    id: 32, categoria: 'keyboards', preco: 379.90, img:"../img/teclado (16).jpg",
    nome: { pt: 'Teclado Custom Polycarbonate',  en: 'Polycarbonate Custom Keyboard' },
    desc: { pt: 'Case em policarbonato translúcido com RGB interno visível, switches lubrificados e keycaps PBT coloridas.',
            en: 'Translucent polycarbonate case with visible internal RGB, lubricated switches and colored PBT keycaps.' },
  },

  /* ══════════════════════════════════════
     CADEIRAS GAMER — IDs 33 a 48
     ══════════════════════════════════════ */
  {
    id: 33, categoria: 'chairs', preco: 799.90, img:"../img/chairs (1).jpg",
    nome: { pt: 'Cadeira Gamer Reclinável X Pro', en: 'X Pro Reclining Gaming Chair' },
    desc: { pt: 'Reclinação até 180°, espuma de alta densidade D28 e almofadas cervical e lombar ajustáveis incluídas.',
            en: 'Reclines up to 180°, high-density D28 foam and adjustable cervical and lumbar cushions included.' },
  },
  {
    id: 34, categoria: 'chairs', preco: 1299.90, img:"../img/chairs (2).png",
    nome: { pt: 'Cadeira Gamer Elite 180°',      en: 'Elite 180° Gaming Chair' },
    desc: { pt: 'Design premium com costura esportiva dupla, braços 4D ajustáveis e base em alumínio polido.',
            en: 'Premium design with double sport stitching, 4D adjustable armrests and polished aluminum base.' },
  },
  {
    id: 35, categoria: 'chairs', preco: 599.90, img:"../img/chairs (3).jpg",
    nome: { pt: 'Cadeira Gamer Compact Urban',   en: 'Compact Urban Gaming Chair' },
    desc: { pt: 'Tamanho compacto para espaços menores, revestimento em tecido respirável e rodízios silenciosos.',
            en: 'Compact size for smaller spaces, breathable fabric upholstery and silent casters.' },
  },
  {
    id: 36, categoria: 'chairs', preco: 999.90, img:"../img/chairs (2).png",
    nome: { pt: 'Cadeira Gamer Ergonômica Max',  en: 'Max Ergonomic Gaming Chair' },
    desc: { pt: 'Suporte lombar ajustável, apoio de cabeça regulável em altura e inclinação, ideal para longas sessões.',
            en: 'Adjustable lumbar support, height and tilt-adjustable headrest, ideal for long sessions.' },
  },
  {
    id: 37, categoria: 'chairs', preco: 849.90, img:"../img/chairs (3).jpg",
    nome: { pt: 'Cadeira Gamer Racing GT',       en: 'Racing GT Gaming Chair' },
    desc: { pt: 'Estilo racing com revestimento em couro PU de alta durabilidade e estrutura de aço reforçada.',
            en: 'Racing style with durable high-quality PU leather upholstery and reinforced steel structure.' },
  },
  {
    id: 38, categoria: 'chairs', preco: 499.90, img:"../img/chairs (3).png",
    nome: { pt: 'Cadeira Gamer Kids Edition',    en: 'Kids Edition Gaming Chair' },
    desc: { pt: 'Dimensões menores para jovens gamers, altura ajustável de 42-52cm e suporte máximo de 80kg.',
            en: 'Smaller dimensions for young gamers, adjustable height 42-52cm and 80kg max support.' },
  },
  {
    id: 39, categoria: 'chairs', preco: 1099.90, img:"../img/chairs (4).jpg",
    nome: { pt: 'Cadeira Gamer Mesh Breeze',     en: 'Mesh Breeze Gaming Chair' },
    desc: { pt: 'Encosto em malha respirável de alta resistência para longas horas sem superaquecimento.',
            en: 'Breathable high-resistance mesh backrest for long hours without overheating.' },
  },
  {
    id: 40, categoria: 'chairs', preco: 749.90, img:"../img/chairs (5).jpg",
    nome: { pt: 'Cadeira Gamer MaxComfort Plus', en: 'MaxComfort Plus Gaming Chair' },
    desc: { pt: 'Espuma viscoelástica de 8cm de espessura, revestimento macio ao toque e braços 2D reguláveis.',
            en: '8cm viscoelastic foam, soft-touch upholstery and 2D adjustable armrests.' },
  },
  {
    id: 41, categoria: 'chairs', preco: 1499.90, img:"../img/chairs (5).png",
    nome: { pt: 'Cadeira Gamer Titan RGB',       en: 'Titan RGB Gaming Chair' },
    desc: { pt: 'Faixa LED RGB nas laterais do encosto, sistema de balanço com mola e suporte de até 150kg.',
            en: 'RGB LED strip on backrest sides, spring balance system and support up to 150kg.' },
  },
  {
    id: 42, categoria: 'chairs', preco: 679.90, img:"../img/chairs (6).png",
    nome: { pt: 'Cadeira Gamer FlexBack Pro',    en: 'FlexBack Pro Gaming Chair' },
    desc: { pt: 'Mecanismo de reclinação contínua de 90° a 155°, tensão regulável e encosto dividido em duas partes.',
            en: 'Continuous recline mechanism from 90° to 155°, adjustable tension and split backrest.' },
  },
  {
    id: 43, categoria: 'chairs', preco: 1199.90, img:"../img/chairs (7).jpg",
    nome: { pt: 'Cadeira Gamer Executive Plus',  en: 'Executive Plus Gaming Chair' },
    desc: { pt: 'Acabamento premium estilo executivo com couro sintético soft touch e espuma de alta densidade.',
            en: 'Premium executive-style finish with soft-touch synthetic leather and high-density foam.' },
  },
  {
    id: 44, categoria: 'chairs', preco: 449.90, img:"../img/chairs (1).jpg",
    nome: { pt: 'Cadeira Gamer Entry Level',     en: 'Entry Level Gaming Chair' },
    desc: { pt: 'Melhor custo-benefício da categoria com revestimento PU básico e regulagem de altura a gás.',
            en: 'Best cost-benefit in the category with basic PU upholstery and gas height adjustment.' },
  },
  {
    id: 45, categoria: 'chairs', preco: 1399.90, img:"../img/chairs (1).png",
    nome: { pt: 'Cadeira Gamer Premium Leather', en: 'Premium Leather Gaming Chair' },
    desc: { pt: 'Couro legítimo de 1ª linha, costuras reforçadas triplas e mecanismo de balanço livre para descanso.',
            en: 'Top-quality genuine leather, triple reinforced stitching and free-tilt mechanism for relaxing.' },
  },
  {
    id: 46, categoria: 'chairs', preco: 899.90, img:"../img/chairs (2).jpg",
    nome: { pt: 'Cadeira Gamer Speed Racing',    en: 'Speed Racing Gaming Chair' },
    desc: { pt: 'Inspirada em assentos de automóvel de corrida, laterais altas para suporte lateral e visual esportivo.',
            en: 'Inspired by racing car seats, high sides for lateral support and sporty look.' },
  },
  {
    id: 47, categoria: 'chairs', preco: 779.90, img:"../img/chairs (2).png",
    nome: { pt: 'Cadeira Gamer LumbarPlus',      en: 'LumbarPlus Gaming Chair' },
    desc: { pt: 'Sistema de suporte lombar integrado com ajuste independente de pressão, sem almofada adicional.',
            en: 'Integrated lumbar support system with independent pressure adjustment, no extra cushion needed.' },
  },
  {
    id: 48, categoria: 'chairs', preco: 1149.90, img:"../img/chairs (3).jpg",
    nome: { pt: 'Cadeira Gamer Ultra Series',    en: 'Ultra Series Gaming Chair' },
    desc: { pt: 'Topo de linha com braços 4D, mecanismo de balanço, couro PU premium e rodízios em poliuretano.',
            en: 'Top of the line with 4D armrests, tilt mechanism, premium PU leather and polyurethane casters.' },
  },

  /* ══════════════════════════════════════
     UTENSÍLIOS GAMER — IDs 49 a 64
     ══════════════════════════════════════ */
  {
    id: 49, categoria: 'accessories', preco: 59.90, img:"../img/utencilios (16).jpg",
    nome: { pt: 'Suporte Headset Universal',     en: 'Universal Headset Stand' },
    desc: { pt: 'Suporte de alumínio com gancho acolchoado, base antiderrapante e porta USB integrada na base.',
            en: 'Aluminum stand with padded hook, non-slip base and built-in USB port at the base.' },
  },
  {
    id: 50, categoria: 'accessories', preco: 119.90, img:"../img/utencilios (15).jpg",
    nome: { pt: 'Hub USB 3.0 de 7 Portas',       en: '7-Port USB 3.0 Hub' },
    desc: { pt: 'Hub USB 3.0 com 7 portas e LED indicador de atividade. Alimentação externa para dispositivos exigentes.',
            en: 'USB 3.0 hub with 7 ports and activity LED indicator. External power for demanding devices.' },
  },
  {
    id: 51, categoria: 'accessories', preco: 39.90, img:"../img/utencilios (14).jpg",
    nome: { pt: 'Apoio de Pulso Ergonômico',     en: 'Ergonomic Wrist Rest' },
    desc: { pt: 'Memory foam de alta densidade com capa removível lavável em couro vegano. Reduz fadiga na digitação.',
            en: 'High-density memory foam with removable washable vegan leather cover. Reduces typing fatigue.' },
  },
  {
    id: 52, categoria: 'accessories', preco: 49.90, img:"../img/utencilios (13).jpg",
    nome: { pt: 'Kit Organizador de Cabos Pro',  en: 'Pro Cable Management Kit' },
    desc: { pt: 'Kit completo com calha, presilhas, braçadeiras velcro e canal adesivo para setup impecável.',
            en: 'Complete kit with cable channel, clips, velcro ties and adhesive channel for a flawless setup.' },
  },
  {
    id: 53, categoria: 'accessories', preco: 79.90, img:"../img/utencilios (12).jpg",
    nome: { pt: 'Fita LED RGB Smart 2m',         en: 'Smart RGB LED Strip 2m' },
    desc: { pt: '2 metros de LED RGB endereçável com controle por app via Bluetooth. 16M de cores e 8 efeitos.',
            en: '2 meters of addressable RGB LED with Bluetooth app control. 16M colors and 8 effects.' },
  },
  {
    id: 54, categoria: 'accessories', preco: 189.90, img:"../img/utencilios (11).jpg",
    nome: { pt: 'Suporte Monitor Duplo Articulado', en: 'Dual Monitor Articulated Stand' },
    desc: { pt: 'Suporte para 2 monitores de até 27" com ajuste de altura, inclinação e rotação. Passagem de cabos.',
            en: 'Stand for 2 monitors up to 27" with height, tilt and rotation adjustment. Cable management.' },
  },
  {
    id: 55, categoria: 'accessories', preco: 99.90, img:"../img/utencilios (10).jpg",
    nome: { pt: 'Cooling Pad Notebook XL',       en: 'XL Notebook Cooling Pad' },
    desc: { pt: '4 ventoinhas de 120mm ultra-silenciosas com controle de velocidade e suporte ergonômico de 6 alturas.',
            en: '4 ultra-silent 120mm fans with speed control and 6-height ergonomic support.' },
  },
  {
    id: 56, categoria: 'accessories', preco: 229.90, img:"../img/utencilios (9).jpg",
    nome: { pt: 'Webcam HD 1080p 60fps',         en: 'HD 1080p 60fps Webcam' },
    desc: { pt: 'Câmera 1080p a 60fps com microfone duplo embutido, correção automática de luz e clipe universal.',
            en: '1080p 60fps camera with built-in dual mic, auto light correction and universal clip.' },
  },
  {
    id: 57, categoria: 'accessories', preco: 269.90, img:"../img/utencilios (8).jpg",
    nome: { pt: 'Microfone USB Condensador',     en: 'USB Condenser Microphone' },
    desc: { pt: 'Cápsula cardioide condensadora, suporte articulado e filtro pop incluídos. Plug-and-play sem drivers.',
            en: 'Cardioid condenser capsule, articulated arm and pop filter included. Plug-and-play, no drivers.' },
  },
  {
    id: 58, categoria: 'accessories', preco: 149.90, img:"../img/utencilios (7).jpg",
    nome: { pt: 'Hub USB-C 8 em 1 Pro',          en: '8-in-1 Pro USB-C Hub' },
    desc: { pt: 'Entrada USB-C com saída HDMI 4K, 3x USB 3.0, SD, microSD, RJ45 e carregamento 100W pass-through.',
            en: 'USB-C input with 4K HDMI, 3x USB 3.0, SD, microSD, RJ45 and 100W pass-through charging.' },
  },
  {
    id: 59, categoria: 'accessories', preco: 119.90, img:"../img/utencilios (6).jpg",
    nome: { pt: 'Controle Gamer USB Pro',        en: 'USB Pro Gamer Controller' },
    desc: { pt: 'Layout ergonômico, gatilhos analógicos, vibração dupla e cabo trançado de 3m com preso USB-A.',
            en: 'Ergonomic layout, analog triggers, dual vibration and 3m braided cable with USB-A.' },
  },
  {
    id: 60, categoria: 'accessories', preco: 89.90, img:"../img/utencilios (5).jpg",
    nome: { pt: 'Óculos Anti-Luz Azul Gaming',   en: 'Gaming Blue Light Blocking Glasses' },
    desc: { pt: 'Lentes com filtro de luz azul 95% e revestimento antirreflexo para proteger olhos em longas sessões.',
            en: '95% blue light filter lenses and anti-reflective coating to protect eyes in long sessions.' },
  },
  {
    id: 61, categoria: 'accessories', preco: 139.90, img:"../img/utencilios (4).jpg",
    nome: { pt: 'Tapete de Mesa Gaming XL',      en: 'XL Gaming Desk Mat' },
    desc: { pt: 'Couro vegano 80x40cm resistente a líquidos, antiderrapante, borda costurada e superfície suave.',
            en: 'Vegan leather 80x40cm, liquid resistant, non-slip, stitched edge and smooth surface.' },
  },
  {
    id: 62, categoria: 'accessories', preco: 54.90, img:"../img/utencilios (3).jpg",
    nome: { pt: 'Almofada Lombar Gamer',         en: 'Gamer Lumbar Cushion' },
    desc: { pt: 'Suporte lombar em memory foam com capa removível lavável e tiras ajustáveis para qualquer cadeira.',
            en: 'Memory foam lumbar support with removable washable cover and adjustable straps for any chair.' },
  },
  {
    id: 63, categoria: 'accessories', preco: 99.90, img:"../img/utencilios (2).jpg",
    nome: { pt: 'Suporte Notebook Alumínio',     en: 'Aluminum Notebook Stand' },
    desc: { pt: 'Alumínio anodizado com 6 ângulos de ajuste (15° a 45°), base ventilada e dobrável para transporte.',
            en: 'Anodized aluminum with 6 adjustment angles (15° to 45°), ventilated base and foldable for transport.' },
  },
  {
    id: 64, categoria: 'accessories', preco: 34.90, img:"../img/utencilios (1).jpg",
    nome: { pt: 'Kit Limpeza Eletrônicos Premium', en: 'Premium Electronics Cleaning Kit' },
    desc: { pt: 'Pincel antiestático, pano de microfibra, spray limpador sem álcool e removedor de keycaps incluídos.',
            en: 'Anti-static brush, microfiber cloth, alcohol-free cleaning spray and keycap puller included.' },
  },
];