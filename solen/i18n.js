/* Solen Markets: language and theme.
   Text is translated at runtime from the English source in the HTML, so every
   page keeps working without script. Article bodies on the blog stay in English. */
(function(){
"use strict";

/* ---------- Dictionary: [en, es, zh, fr] ---------- */
var R=[
/* navigation + chrome */
["Home","Inicio","首页","Accueil"],
["About","Nosotros","关于","À propos"],
["Blog","Blog","博客","Blog"],
["Contact","Contacto","联系","Contact"],
["Open an account","Abrir una cuenta","开设账户","Ouvrir un compte"],
["Menu","Menú","菜单","Menu"],
["Close","Cerrar","关闭","Fermer"],
["Back","Volver","返回","Retour"],
["Next","Siguiente","下一篇","Suivant"],
["Copy","Copiar","复制","Copier"],
["Copied","Copiado","已复制","Copié"],
["Copy link","Copiar enlace","复制链接","Copier le lien"],
["Link copied","Enlace copiado","链接已复制","Lien copié"],
["Copied to clipboard","Copiado al portapapeles","已复制到剪贴板","Copié dans le presse-papiers"],
["Press Cmd/Ctrl+C to copy","Pulsa Cmd/Ctrl+C para copiar","按 Cmd/Ctrl+C 复制","Appuyez sur Cmd/Ctrl+C pour copier"],

/* home: hero */
["Execution, custody and","Ejecución, custodia y","交易执行、托管与","Exécution, conservation et"],
["settlement","liquidación","结算","règlement"],
["in one venue.","en un solo mercado.","集于一个平台。","en une seule place."],
["Solen gives trading desks, funds and treasuries a single place to price risk, move size and keep assets under segregated custody. One account, one API, one counterparty.",
 "Solen ofrece a mesas de trading, fondos y tesorerías un único lugar para valorar el riesgo, mover volumen y mantener los activos en custodia segregada. Una cuenta, una API, una contraparte.",
 "Solen 为交易台、基金和财资部门提供一站式平台，用于风险定价、大额成交，并将资产置于独立托管之下。一个账户，一套 API，一个交易对手。",
 "Solen offre aux salles de marché, aux fonds et aux trésoreries un lieu unique pour évaluer le risque, exécuter de gros volumes et conserver les actifs en conservation ségréguée. Un compte, une API, une contrepartie."],
["See the markets","Ver los mercados","查看市场","Voir les marchés"],

/* home: stats */
["A track record you can check","Un historial que puedes verificar","可核查的业绩记录","Un historique vérifiable"],
["Every figure here is published monthly, with the underlying data available to clients on request.",
 "Cada cifra se publica mensualmente, y los datos de base están disponibles para los clientes bajo solicitud.",
 "此处每项数据均按月发布，客户可按需获取底层数据。",
 "Chaque chiffre est publié chaque mois, et les données sous-jacentes sont disponibles sur demande pour les clients."],
["Notional traded since 2019","Nocional negociado desde 2019","2019 年以来累计名义成交额","Notionnel négocié depuis 2019"],
["Spot, futures and the OTC desk combined","Spot, futuros y mesa OTC combinados","现货、期货与场外交易合计","Spot, futures et desk OTC cumulés"],
["Client assets in custody","Activos de clientes en custodia","托管的客户资产","Actifs clients en conservation"],
["Segregated, attested by an independent auditor","Segregados, certificados por un auditor independiente","独立托管，由独立审计师鉴证","Ségrégués, attestés par un auditeur indépendant"],
["Spot and derivative pairs","Pares spot y de derivados","现货与衍生品交易对","Paires spot et dérivés"],
["Quoted by 26 market makers around the clock","Cotizados por 26 creadores de mercado las 24 horas","由 26 家做市商全天候报价","Cotées par 26 teneurs de marché en continu"],
["Matching engine uptime","Disponibilidad del motor de emparejamiento","撮合引擎正常运行时间","Disponibilité du moteur d'appariement"],
["Rolling twelve months, incidents published","Últimos doce meses, incidentes publicados","近十二个月滚动统计，事件均已公开","Sur douze mois glissants, incidents publiés"],

/* home: markets */
["Deep books on the pairs","Libros profundos en los pares","盘口深厚，覆盖","Des carnets profonds sur les paires"],
["desks actually trade","que las mesas realmente operan","交易台真正交易的币对","que les desks négocient vraiment"],
["Continuous two-sided liquidity from twenty-six market makers, with request for quote when the order book is not the right tool.",
 "Liquidez continua en ambos sentidos de veintiséis creadores de mercado, con solicitud de cotización cuando el libro de órdenes no es la herramienta adecuada.",
 "二十六家做市商提供持续的双边流动性；当订单簿不适用时，可使用询价（RFQ）。",
 "Une liquidité bilatérale continue fournie par vingt-six teneurs de marché, avec demande de cotation lorsque le carnet d'ordres n'est pas le bon outil."],
["Request the full pair list","Solicitar la lista completa de pares","申请完整交易对列表","Demander la liste complète des paires"],
["Pair","Par","交易对","Paire"],
["Last price","Último precio","最新价","Dernier prix"],
["24h volume","Volumen 24h","24 小时成交量","Volume 24 h"],
["Bitcoin","Bitcoin","比特币","Bitcoin"],
["Ether","Ether","以太币","Ether"],
["Sample figures shown for layout. Connect the table to your own feed to make it live.",
 "Cifras de muestra para maquetación. Conecta la tabla a tu propio feed para que esté en vivo.",
 "此处为版式示例数据。将表格接入您自己的行情源即可实时更新。",
 "Chiffres d'exemple pour la mise en page. Connectez le tableau à votre propre flux pour le rendre dynamique."],

/* home: desks */
["Six desks, one balance","Seis mesas, un solo balance","六大业务，统一余额","Six desks, un seul solde"],
["Margin is shared across the platform, so collateral posted once works everywhere.",
 "El margen se comparte en toda la plataforma, así que el colateral depositado una vez sirve en todas partes.",
 "保证金在整个平台共享，一次缴纳的抵押品处处可用。",
 "La marge est mutualisée sur toute la plateforme : un collatéral déposé une fois sert partout."],
["Spot exchange","Mercado spot","现货交易","Marché spot"],
["Central limit order book with maker rebates from 10,000 BTC in monthly volume.",
 "Libro de órdenes limitadas central con rebajas para makers desde 10 000 BTC de volumen mensual.",
 "中央限价订单簿，月成交量达 10,000 BTC 起享做市商返佣。",
 "Carnet d'ordres central à cours limité, avec remises maker dès 10 000 BTC de volume mensuel."],
["Fee schedule","Tarifas","费率表","Grille tarifaire"],
["Perpetuals and futures","Perpetuos y futuros","永续合约与期货","Perpétuels et futures"],
["Linear contracts settled in USD stablecoins, with funding published every hour.",
 "Contratos lineales liquidados en stablecoins en USD, con funding publicado cada hora.",
 "线性合约以美元稳定币结算，资金费率每小时公布。",
 "Contrats linéaires réglés en stablecoins USD, avec taux de financement publié chaque heure."],
["Contract specs","Especificaciones","合约规格","Spécifications des contrats"],
["OTC desk","Mesa OTC","场外交易台","Desk OTC"],
["Voice and chat coverage for block trades, with settlement the same business day.",
 "Cobertura por voz y chat para operaciones en bloque, con liquidación el mismo día hábil.",
 "语音与即时通讯覆盖大宗交易，当个工作日完成结算。",
 "Couverture voix et chat pour les blocs, avec règlement le jour ouvré même."],
["Talk to the desk","Hablar con la mesa","联系交易台","Parler au desk"],
["Custody","Custodia","托管","Conservation"],
["Segregated wallets under a qualified custodian, with withdrawal allowlists and quorum approval.",
 "Wallets segregadas bajo un custodio cualificado, con listas de retiro permitidas y aprobación por quórum.",
 "由合格托管机构管理的独立钱包，配备提币白名单与多签法定人数审批。",
 "Portefeuilles ségrégués chez un dépositaire qualifié, avec listes blanches de retrait et approbation par quorum."],
["How custody works","Cómo funciona la custodia","托管如何运作","Comment fonctionne la conservation"],
["Portfolio margin","Margen de cartera","组合保证金","Marge de portefeuille"],
["Risk netted across spot, futures and options, so hedged books post less collateral.",
 "Riesgo compensado entre spot, futuros y opciones, de modo que las carteras cubiertas aportan menos colateral.",
 "现货、期货与期权的风险相互轧差，对冲仓位所需抵押品更少。",
 "Risque compensé entre spot, futures et options : les portefeuilles couverts déposent moins de collatéral."],
["Margin model","Modelo de margen","保证金模型","Modèle de marge"],
["Market data","Datos de mercado","市场数据","Données de marché"],
["Full order book snapshots and trade history, streamed live or delivered as flat files.",
 "Instantáneas completas del libro de órdenes e historial de operaciones, en streaming o como archivos planos.",
 "完整订单簿快照与成交历史，可实时推送或以文件形式交付。",
 "Instantanés complets du carnet d'ordres et historique des transactions, en flux direct ou en fichiers plats."],
["Data API","API de datos","数据 API","API de données"],

/* home: execution */
["Built for size,","Hecho para el volumen,","为大额成交而生，","Conçu pour la taille,"],
["not for screenshots","no para las capturas","而非为截图","pas pour les captures d'écran"],
["Most venues look the same until you send a real order. These are the parts that decide what your fill looks like.",
 "La mayoría de los mercados se parecen hasta que envías una orden real. Estas son las piezas que deciden cómo queda tu ejecución.",
 "在发出真实订单之前，大多数交易平台看起来都差不多。以下这些环节决定了你的成交质量。",
 "La plupart des places se ressemblent jusqu'à l'envoi d'un vrai ordre. Voici ce qui détermine la qualité de votre exécution."],
["Sub-millisecond matching","Emparejamiento submilisegundo","亚毫秒级撮合","Appariement sous la milliseconde"],
["Median internal latency of 180 microseconds, measured at the gateway and published monthly.",
 "Latencia interna mediana de 180 microsegundos, medida en la pasarela y publicada mensualmente.",
 "内部延迟中位数为 180 微秒，在网关处测量并按月公布。",
 "Latence interne médiane de 180 microsecondes, mesurée à la passerelle et publiée chaque mois."],
["Colocation","Colocación","同机房部署","Colocation"],
["Cross-connect in Equinix LD4 and NY4, with a dedicated FIX session per strategy.",
 "Interconexión en Equinix LD4 y NY4, con una sesión FIX dedicada por estrategia.",
 "在 Equinix LD4 与 NY4 机房提供交叉连接，每个策略配备独立 FIX 会话。",
 "Interconnexion dans Equinix LD4 et NY4, avec une session FIX dédiée par stratégie."],
["Honest rejects","Rechazos honestos","坦诚拒单","Rejets honnêtes"],
["No last look. An order that passes risk checks is filled or rests on the book.",
 "Sin last look. Una orden que supera los controles de riesgo se ejecuta o queda en el libro.",
 "不设 last look。通过风控检查的订单要么成交，要么挂在订单簿上。",
 "Pas de last look. Un ordre qui passe les contrôles de risque est exécuté ou reste dans le carnet."],
["Settlement you can plan around","Liquidación con la que puedes planificar","可预期的结算","Un règlement sur lequel s'appuyer"],
["Fiat out by 16:00 London on the same day, for instructions received before 14:00.",
 "Fiat enviado a las 16:00 de Londres el mismo día, para instrucciones recibidas antes de las 14:00.",
 "14:00（伦敦时间）前收到的指令，当日 16:00 前完成法币出金。",
 "Fiat versé avant 16 h 00 à Londres le jour même, pour les instructions reçues avant 14 h 00."],

/* home: API */
["An API your engineers","Una API con la que tus ingenieros","一套工程师","Une API contre laquelle vos ingénieurs"],
["will not fight","no tendrán que pelear","不会头疼的 API","n'auront pas à lutter"],
["REST for state, WebSocket for everything that moves, FIX 4.4 when your OMS insists. Keys are scoped per strategy and can be restricted by IP.",
 "REST para el estado, WebSocket para todo lo que se mueve, FIX 4.4 cuando tu OMS lo exige. Las claves se limitan por estrategia y pueden restringirse por IP.",
 "REST 用于状态查询，WebSocket 用于一切实时变动，若你的 OMS 要求则提供 FIX 4.4。密钥按策略划分权限，并可限制 IP。",
 "REST pour l'état, WebSocket pour tout ce qui bouge, FIX 4.4 quand votre OMS l'exige. Les clés sont limitées par stratégie et restreintes par IP."],
["Request sandbox keys","Solicitar claves de sandbox","申请沙盒密钥","Demander des clés sandbox"],

/* home: safeguards */
["Segregated accounts","Cuentas segregadas","独立账户","Comptes ségrégués"],
["Proof of reserves","Prueba de reservas","储备证明","Preuve de réserves"],
["Withdrawal controls","Controles de retiro","提币管控","Contrôles de retrait"],
["Key custody","Custodia de claves","密钥托管","Conservation des clés"],
["Independent testing","Pruebas independientes","独立测试","Tests indépendants"],
["Incident reporting","Reporte de incidentes","事件通报","Signalement des incidents"],
["Never lent out","Nunca se presta","绝不出借","Jamais prêtés"],
["Monthly attestation","Certificación mensual","按月鉴证","Attestation mensuelle"],
["Quorum approval","Aprobación por quórum","法定人数审批","Approbation par quorum"],
["Two jurisdictions","Dos jurisdicciones","两个司法管辖区","Deux juridictions"],
["No payout cap","Sin tope de pago","赏金无上限","Sans plafond de paiement"],
["Named contact","Contacto nominal","专属联系人","Contact nommé"],
["Boring where it counts","Aburrido donde importa","在关键处求稳","Sobre là où cela compte"],
["Client assets are not a funding source. They sit apart from the company balance sheet and are reported monthly.",
 "Los activos de los clientes no son una fuente de financiación. Están separados del balance de la empresa y se reportan cada mes.",
 "客户资产不是融资来源。它们与公司资产负债表相互隔离，并按月披露。",
 "Les actifs des clients ne sont pas une source de financement. Ils sont séparés du bilan de l'entreprise et publiés chaque mois."],
["Segregated accounts.","Cuentas segregadas.","独立账户。","Comptes ségrégués."],
["Client funds are held separately from operating capital and never lent out.",
 "Los fondos de los clientes se mantienen separados del capital operativo y nunca se prestan.",
 "客户资金与运营资金分开存放，绝不出借。",
 "Les fonds des clients sont conservés séparément du capital d'exploitation et ne sont jamais prêtés."],
["Proof of reserves.","Prueba de reservas.","储备证明。","Preuve de réserves."],
["Monthly attestation by an independent auditor, published with the underlying addresses.",
 "Certificación mensual de un auditor independiente, publicada junto con las direcciones subyacentes.",
 "由独立审计师按月鉴证，并连同底层地址一并公布。",
 "Attestation mensuelle par un auditeur indépendant, publiée avec les adresses sous-jacentes."],
["Withdrawal controls.","Controles de retiro.","提币管控。","Contrôles de retrait."],
["Address allowlists, quorum approval and a configurable delay on first use.",
 "Listas de direcciones permitidas, aprobación por quórum y un retraso configurable en el primer uso.",
 "地址白名单、多签法定人数审批，以及首次使用时可配置的延迟。",
 "Listes blanches d'adresses, approbation par quorum et délai configurable à la première utilisation."],
["Key custody.","Custodia de claves.","密钥托管。","Conservation des clés."],
["Hardware security modules in two jurisdictions, with no single person able to sign.",
 "Módulos de seguridad de hardware en dos jurisdicciones, sin que ninguna persona pueda firmar sola.",
 "硬件安全模块部署于两个司法辖区，任何个人均无法单独签署。",
 "Modules de sécurité matériels dans deux juridictions, sans qu'aucune personne ne puisse signer seule."],
["Independent testing.","Pruebas independientes.","独立测试。","Tests indépendants."],
["Annual penetration test and a public bug bounty with no payout cap.",
 "Prueba de penetración anual y un programa público de recompensas por errores sin límite de pago.",
 "每年一次渗透测试，并设有无赏金上限的公开漏洞赏金计划。",
 "Test d'intrusion annuel et programme public de bug bounty sans plafond de récompense."],
["Incident reporting.","Reporte de incidentes.","事件通报。","Signalement des incidents."],
["Status page, root cause write-ups and a named contact for every client.",
 "Página de estado, análisis de causa raíz y un contacto con nombre para cada cliente.",
 "状态页面、根因复盘报告，并为每位客户配备专属联系人。",
 "Page de statut, analyses de cause racine et un contact nommé pour chaque client."],
["Ready to see real pricing?","¿Listo para ver precios reales?","准备好查看真实报价了吗？","Prêt à voir les vrais tarifs ?"],
["Onboarding takes about three business days once documents are in. You get a sandbox key on day one.",
 "La incorporación toma unos tres días hábiles una vez recibidos los documentos. Recibes una clave de sandbox el primer día.",
 "资料齐全后，开户约需三个工作日。第一天即可获得沙盒密钥。",
 "L'intégration prend environ trois jours ouvrés une fois les documents reçus. Vous recevez une clé sandbox dès le premier jour."],
["About Solen","Acerca de Solen","关于 Solen","À propos de Solen"],

/* footer */
["Platform","Plataforma","平台","Plateforme"],
["Markets","Mercados","市场","Marchés"],
["Fees","Tarifas","费率","Frais"],
["Company","Empresa","公司","Société"],
["Press","Prensa","媒体","Presse"],
["Resources","Recursos","资源","Ressources"],
["Documentation","Documentación","文档","Documentation"],
["Status","Estado","状态","Statut"],
["Proof of reserves","Prueba de reservas","储备证明","Preuve de réserves"],
["Legal","Legal","法律","Mentions légales"],
["Terms","Términos","条款","Conditions"],
["Privacy","Privacidad","隐私","Confidentialité"],
["Disclosures","Divulgaciones","披露","Informations réglementaires"],
["Complaints","Reclamaciones","投诉","Réclamations"],
["London · Singapore · São Paulo","Londres · Singapur · São Paulo","伦敦 · 新加坡 · 圣保罗","Londres · Singapour · São Paulo"],

/* about */
["A venue built by people","Un mercado creado por personas","由真正用过交易平台的人","Une place de marché conçue par des gens"],
["who had to use one.","que tuvieron que usar uno.","打造的交易平台。","qui ont dû en utiliser une."],
["Solen started in 2019 with eight people, most of them from execution desks who were tired of explaining to risk why a fill had moved four basis points between click and confirmation.",
 "Solen nació en 2019 con ocho personas, la mayoría de mesas de ejecución, cansadas de explicarle a riesgos por qué una ejecución se había movido cuatro puntos básicos entre el clic y la confirmación.",
 "Solen 创立于 2019 年，起初只有八个人，大多来自交易执行台，他们厌倦了向风控解释为什么一笔成交在点击与确认之间滑动了四个基点。",
 "Solen est né en 2019 avec huit personnes, pour la plupart issues de desks d'exécution, lassées d'expliquer au risque pourquoi une exécution avait bougé de quatre points de base entre le clic et la confirmation."],
["We sell certainty,","Vendemos certeza,","我们出售确定性，","Nous vendons de la certitude,"],
["not excitement","no emoción","而非刺激","pas de l'adrénaline"],
["A trading venue has one job: be there when the market is difficult. That sounds modest until you watch a book go empty during a liquidation cascade and realise that most of the industry treats uptime as a marketing number rather than an engineering commitment.",
 "Un mercado tiene una sola tarea: estar ahí cuando el mercado es difícil. Suena modesto hasta que ves vaciarse un libro durante una cascada de liquidaciones y te das cuenta de que gran parte de la industria trata la disponibilidad como una cifra de marketing y no como un compromiso de ingeniería.",
 "交易平台只有一项使命：在市场艰难时依然在线。这听起来很朴素，直到你亲眼看到订单簿在连环爆仓中被抽空，才会发现业内多数人把可用性当作营销数字，而不是工程承诺。",
 "Une place de marché n'a qu'une mission : être là quand le marché est difficile. Cela semble modeste jusqu'à ce qu'on voie un carnet se vider pendant une cascade de liquidations et qu'on réalise que la plupart du secteur traite la disponibilité comme un argument marketing plutôt que comme un engagement d'ingénierie."],
["So we built the opposite of a growth-first exchange. No token, no yield product, no leverage offered to people who should not have it. Client assets sit apart from the company balance sheet, and the only way we make money is fees on trades that actually happened.",
 "Así que construimos lo contrario de un exchange que prioriza el crecimiento. Sin token, sin producto de rendimiento, sin apalancamiento para quien no debería tenerlo. Los activos de los clientes están separados del balance de la empresa, y la única forma en que ganamos dinero son las comisiones de operaciones que realmente ocurrieron.",
 "因此我们打造了与“增长优先”相反的交易所。没有代币，没有收益产品，不向不该使用杠杆的人提供杠杆。客户资产与公司资产负债表相互隔离，我们唯一的收入来源，是真实发生的交易所产生的手续费。",
 "Nous avons donc construit l'inverse d'une bourse axée sur la croissance. Pas de token, pas de produit de rendement, pas d'effet de levier pour ceux qui ne devraient pas en avoir. Les actifs des clients sont séparés du bilan de l'entreprise, et notre seule source de revenus, ce sont les frais sur des transactions réellement exécutées."],
["That decision cost us some volume in the early years. It also means we have never had to publish an apology, and our clients have never had to explain one to their own investors.",
 "Esa decisión nos costó algo de volumen en los primeros años. También significa que nunca hemos tenido que publicar una disculpa, ni nuestros clientes han tenido que explicar una a sus propios inversores.",
 "这个决定在早期让我们损失了一些交易量。但这也意味着，我们从未需要发布过道歉声明，我们的客户也从未需要向自己的投资人解释过一次。",
 "Cette décision nous a coûté du volume les premières années. Elle signifie aussi que nous n'avons jamais eu à publier d'excuses, et que nos clients n'ont jamais eu à en expliquer à leurs propres investisseurs."],
["Founded in London","Fundada en Londres","创立于伦敦","Fondée à Londres"],
["People across three offices","Personas en tres oficinas","分布在三个办公室的员工","Personnes réparties dans trois bureaux"],
["Institutional clients","Clientes institucionales","机构客户","Clients institutionnels"],
["Client funds lost to date","Fondos de clientes perdidos hasta la fecha","迄今损失的客户资金","Fonds clients perdus à ce jour"],
["Six rules we do not bend","Seis reglas que no doblamos","我们绝不妥协的六条原则","Six règles que nous ne plions jamais"],
["They are written into how the company is structured, not just into a values page.",
 "Están escritas en la estructura de la empresa, no solo en una página de valores.",
 "它们被写进了公司的组织架构，而不只是停留在价值观页面上。",
 "Elles sont inscrites dans la structure de l'entreprise, pas seulement sur une page de valeurs."],
["Client assets are untouchable","Los activos de los clientes son intocables","客户资产不可触碰","Les actifs des clients sont intouchables"],
["Never lent, never rehypothecated, never used as collateral by us. Segregated and attested monthly.",
 "Nunca prestados, nunca rehipotecados, nunca usados por nosotros como colateral. Segregados y certificados cada mes.",
 "绝不出借，绝不再质押，我们也绝不将其用作抵押品。独立托管，按月鉴证。",
 "Jamais prêtés, jamais réhypothéqués, jamais utilisés comme collatéral par nous. Ségrégués et attestés chaque mois."],
["No proprietary trading","Sin trading propio","不做自营交易","Pas de trading pour compte propre"],
["We do not take the other side of client flow. There is no internal desk competing with the book.",
 "No tomamos la otra parte del flujo de los clientes. No hay una mesa interna compitiendo con el libro.",
 "我们不会成为客户订单的对手方。内部没有任何交易台与订单簿竞争。",
 "Nous ne prenons jamais l'autre côté du flux client. Aucun desk interne ne rivalise avec le carnet."],
["Published, not promised","Publicado, no prometido","公开披露，而非口头承诺","Publié, pas promis"],
["Latency, uptime and reserve figures go out on a schedule, including the months they look bad.",
 "Las cifras de latencia, disponibilidad y reservas se publican según un calendario, incluidos los meses en que se ven mal.",
 "延迟、可用性与储备数据按固定周期发布，包括数据不好看的月份。",
 "Les chiffres de latence, de disponibilité et de réserves sont publiés selon un calendrier, y compris les mois où ils sont mauvais."],
["One price for everyone","Un solo precio para todos","人人同价","Un seul prix pour tous"],
["Fees follow volume tiers that are public. No negotiated rates for the loudest counterparty.",
 "Las comisiones siguen niveles de volumen públicos. Sin tarifas negociadas para la contraparte que más grita.",
 "费率按公开的成交量阶梯执行。不为嗓门最大的对手方单独议价。",
 "Les frais suivent des paliers de volume publics. Pas de tarifs négociés pour la contrepartie la plus bruyante."],
["Risk checks stay on","Los controles de riesgo siempre activos","风控检查始终开启","Les contrôles de risque restent actifs"],
["Pre-trade limits are never disabled for a client, however large, however urgent the request.",
 "Los límites pre-operación nunca se desactivan para un cliente, por grande que sea, por urgente que sea la petición.",
 "无论客户规模多大、请求多紧急，事前限额都不会被关闭。",
 "Les limites pré-négociation ne sont jamais désactivées pour un client, aussi important soit-il, aussi urgente que soit la demande."],
["A named human","Una persona con nombre","专属联络人","Un interlocuteur nommé"],
["Every account has a coverage contact who answers directly. No ticket queue for a stuck withdrawal.",
 "Cada cuenta tiene un contacto asignado que responde directamente. Sin cola de tickets para un retiro atascado.",
 "每个账户都有专属对接人直接答复。提币卡住时无需排工单队列。",
 "Chaque compte a un contact dédié qui répond directement. Pas de file de tickets pour un retrait bloqué."],
["How we got here","Cómo llegamos hasta aquí","我们的历程","Notre parcours"],
["Eight people, one spot book, and a matching engine written from scratch.",
 "Ocho personas, un libro spot y un motor de emparejamiento escrito desde cero.",
 "八个人，一个现货订单簿，以及一台从零编写的撮合引擎。",
 "Huit personnes, un carnet spot et un moteur d'appariement écrit de zéro."],
["Custody launched","Lanzamiento de la custodia","托管服务上线","Lancement de la conservation"],
["Segregated wallets under a qualified custodian, after eighteen months of review.",
 "Wallets segregadas bajo un custodio cualificado, tras dieciocho meses de revisión.",
 "经过十八个月审查，推出由合格托管机构管理的独立钱包。",
 "Portefeuilles ségrégués chez un dépositaire qualifié, après dix-huit mois d'examen."],
["Singapore desk","Mesa de Singapur","新加坡交易台","Desk de Singapour"],
["Asia hours coverage, and the first market makers quoting through the night.",
 "Cobertura en horario asiático y los primeros creadores de mercado cotizando durante la noche.",
 "覆盖亚洲时段，首批做市商开始通宵报价。",
 "Couverture des heures asiatiques et premiers teneurs de marché cotant toute la nuit."],
["Risk netted across products, which cut collateral for hedged books by roughly a third.",
 "Riesgo compensado entre productos, lo que redujo el colateral de las carteras cubiertas en aproximadamente un tercio.",
 "跨产品风险轧差，使对冲仓位的抵押品需求降低约三分之一。",
 "Risque compensé entre produits, ce qui a réduit d'environ un tiers le collatéral des portefeuilles couverts."],
["São Paulo office","Oficina de São Paulo","圣保罗办公室","Bureau de São Paulo"],
["Local settlement in BRL, and coverage for Latin American funds and treasuries.",
 "Liquidación local en BRL y cobertura para fondos y tesorerías de América Latina.",
 "支持巴西雷亚尔本地结算，并服务拉丁美洲的基金与财资部门。",
 "Règlement local en BRL et couverture des fonds et trésoreries d'Amérique latine."],
["How we are supervised","Cómo somos supervisados","我们如何接受监管","Comment nous sommes supervisés"],
["Regulated entities in each region, with the client contracting into the one covering their jurisdiction.",
 "Entidades reguladas en cada región; el cliente contrata con la que cubre su jurisdicción.",
 "每个地区均设有受监管实体，客户与覆盖其所在司法辖区的实体签约。",
 "Des entités réglementées dans chaque région ; le client contracte avec celle qui couvre sa juridiction."],
["United Kingdom.","Reino Unido.","英国。","Royaume-Uni."],
["Registered as a cryptoasset business, with safeguarding rules applied to client money.",
 "Registrada como empresa de criptoactivos, con normas de salvaguarda aplicadas al dinero de los clientes.",
 "已注册为加密资产业务机构，客户资金适用保障规则。",
 "Enregistrée comme entreprise de cryptoactifs, avec des règles de protection appliquées aux fonds des clients."],
["Singapore.","Singapur.","新加坡。","Singapour."],
["Licensed for digital payment token services, with local custody arrangements.",
 "Licenciada para servicios de tokens de pago digital, con acuerdos de custodia locales.",
 "已获数字支付代币服务牌照，并设有本地托管安排。",
 "Agréée pour les services de jetons de paiement numériques, avec des dispositifs de conservation locaux."],
["Brazil.","Brasil.","巴西。","Brésil."],
["Registered as a virtual asset service provider, settling in BRL through a partner bank.",
 "Registrada como proveedor de servicios de activos virtuales, con liquidación en BRL a través de un banco asociado.",
 "已注册为虚拟资产服务提供商，通过合作银行以雷亚尔结算。",
 "Enregistrée comme prestataire de services sur actifs virtuels, avec règlement en BRL via une banque partenaire."],
["Audit.","Auditoría.","审计。","Audit."],
["Financial statements audited annually, reserve attestations published monthly.",
 "Estados financieros auditados anualmente y certificaciones de reservas publicadas cada mes.",
 "财务报表每年审计，储备鉴证报告按月发布。",
 "États financiers audités chaque année, attestations de réserves publiées chaque mois."],
["Want the long version?","¿Quieres la versión larga?","想了解完整版本？","Envie de la version longue ?"],
["We will walk you through the margin model, the custody chain and the incident history before you sign anything.",
 "Te explicaremos el modelo de margen, la cadena de custodia y el historial de incidentes antes de que firmes nada.",
 "在你签署任何文件之前，我们会逐一为你讲解保证金模型、托管链路和事件历史。",
 "Nous vous présenterons le modèle de marge, la chaîne de conservation et l'historique des incidents avant que vous ne signiez quoi que ce soit."],
["Talk to the team","Hablar con el equipo","联系团队","Parler à l'équipe"],
["See the platform","Ver la plataforma","查看平台","Voir la plateforme"],

/* contact */
["Tell us what you trade.","Cuéntanos qué operas.","告诉我们您交易什么。","Dites-nous ce que vous négociez."],
["A coverage contact reads every message and replies within one business day. If you are opening an account, the onboarding pack comes with that first reply.",
 "Un contacto asignado lee cada mensaje y responde en un día hábil. Si estás abriendo una cuenta, el paquete de incorporación llega con esa primera respuesta.",
 "专属对接人会阅读每一条留言，并在一个工作日内回复。如果您要开户，首次回复会附上开户资料包。",
 "Un contact dédié lit chaque message et répond sous un jour ouvré. Si vous ouvrez un compte, le dossier d'intégration accompagne cette première réponse."],
["Send a message","Enviar un mensaje","发送留言","Envoyer un message"],
["The more precise the last two answers, the better the first reply.",
 "Cuanto más precisas sean las dos últimas respuestas, mejor será la primera respuesta.",
 "后两项填写得越具体，我们的首次回复就越有针对性。",
 "Plus vos deux dernières réponses sont précises, meilleure sera notre première réponse."],
["About you","Sobre ti","关于您","À propos de vous"],
["Full name","Nombre completo","姓名","Nom complet"],
["Work email","Correo de trabajo","工作邮箱","E-mail professionnel"],
["Country","País","国家/地区","Pays"],
["Select a country","Selecciona un país","选择国家/地区","Sélectionnez un pays"],
["Brazil","Brasil","巴西","Brésil"],
["United Kingdom","Reino Unido","英国","Royaume-Uni"],
["Singapore","Singapur","新加坡","Singapour"],
["United States","Estados Unidos","美国","États-Unis"],
["Switzerland","Suiza","瑞士","Suisse"],
["Other","Otro","其他","Autre"],
["What you need","Lo que necesitas","您的需求","Vos besoins"],
["Type of firm","Tipo de empresa","机构类型","Type d'entreprise"],
["Select one","Selecciona una opción","请选择","Sélectionnez une option"],
["Hedge fund","Fondo de cobertura","对冲基金","Hedge fund"],
["Proprietary trading firm","Firma de trading propietario","自营交易公司","Société de trading pour compte propre"],
["Asset manager","Gestora de activos","资产管理人","Gestionnaire d'actifs"],
["Corporate treasury","Tesorería corporativa","企业财资","Trésorerie d'entreprise"],
["Broker or exchange","Bróker o exchange","经纪商或交易所","Courtier ou plateforme d'échange"],
["Family office","Family office","家族办公室","Family office"],
["Reason for contact","Motivo de contacto","联系原因","Motif du contact"],
["Open a trading account","Abrir una cuenta de trading","开设交易账户","Ouvrir un compte de trading"],
["Liquidity and pricing","Liquidez y precios","流动性与定价","Liquidité et tarification"],
["API and sandbox access","Acceso a API y sandbox","API 与沙盒权限","Accès API et sandbox"],
["Broker program","Programa para brókers","经纪商计划","Programme courtiers"],
["Something else","Otra cosa","其他事项","Autre chose"],
["Anything we should know","Algo que debamos saber","其他需要说明的信息","Autre chose à nous signaler"],
["(optional)","(opcional)","（选填）","(facultatif)"],
["I agree that Solen may contact me about this enquiry and store the details I provided.",
 "Acepto que Solen me contacte sobre esta consulta y almacene los datos que proporcioné.",
 "我同意 Solen 就此咨询与我联系，并保存我提供的信息。",
 "J'accepte que Solen me contacte au sujet de cette demande et conserve les informations fournies."],
["Send message","Enviar mensaje","发送留言","Envoyer le message"],
["We reply within one business day.","Respondemos en un día hábil.","我们将在一个工作日内回复。","Nous répondons sous un jour ouvré."],
["Please complete the highlighted fields.","Completa los campos resaltados.","请填写标出的必填项。","Veuillez remplir les champs en surbrillance."],
["Thanks. This site is a design concept, so nothing was sent. Point the form at your own endpoint to make it live.",
 "Gracias. Este sitio es un concepto de diseño, así que no se envió nada. Apunta el formulario a tu propio endpoint para activarlo.",
 "谢谢。本网站仅为设计概念，因此没有发送任何内容。将表单指向您自己的接口即可正式启用。",
 "Merci. Ce site est une maquette de conception, rien n'a donc été envoyé. Reliez le formulaire à votre propre endpoint pour l'activer."],
["Where we are","Dónde estamos","我们的所在地","Où nous sommes"],
["Coverage follows the clock, so there is a desk awake whenever the market is.",
 "La cobertura sigue al reloj, así que siempre hay una mesa despierta cuando el mercado está abierto.",
 "服务随时区接力，因此只要市场开着，就有交易台在岗。",
 "La couverture suit l'horloge : il y a toujours un desk éveillé quand le marché l'est."],
["Drag to spin · tap a city for its details","Arrastra para girar · toca una ciudad para ver sus detalles","拖动旋转 · 点击城市查看详情","Faites glisser pour tourner · touchez une ville pour ses détails"],
["London","Londres","伦敦","Londres"],
["São Paulo","São Paulo","圣保罗","São Paulo"],
["local","local","本地时间","heure locale"],
["Desk hours","Horario","交易台时间","Horaires"],
["Coordinates","Coordenadas","坐标","Coordonnées"],
["Covers","Cobertura","覆盖范围","Couverture"],
["Open in Maps","Abrir en Mapas","在地图中打开","Ouvrir dans Plans"],
["EC2A 1AH, United Kingdom","EC2A 1AH, Reino Unido","EC2A 1AH，英国","EC2A 1AH, Royaume-Uni"],
["049910, Singapore","049910, Singapur","049910，新加坡","049910, Singapour"],
["04538-133, Brazil","04538-133, Brasil","04538-133，巴西","04538-133, Brésil"],
["Europe, Middle East and Africa","Europa, Oriente Medio y África","欧洲、中东和非洲","Europe, Moyen-Orient et Afrique"],
["Asia and the Pacific","Asia y el Pacífico","亚洲及太平洋地区","Asie et Pacifique"],
["North and South America","Norteamérica y Sudamérica","北美和南美","Amérique du Nord et du Sud"],
["What happens next","Qué sigue","后续流程","Et ensuite"],
["Three business days from first reply to a funded account, assuming documents arrive together.",
 "Tres días hábiles desde la primera respuesta hasta una cuenta fondeada, siempre que los documentos lleguen juntos.",
 "只要资料一次提交齐全，从首次回复到账户入金仅需三个工作日。",
 "Trois jours ouvrés entre la première réponse et un compte approvisionné, à condition que les documents arrivent ensemble."],
["Day one","Día uno","第一天","Jour 1"],
["First reply","Primera respuesta","首次回复","Première réponse"],
["A coverage contact answers, sends the onboarding pack and opens a sandbox key.",
 "Un contacto asignado responde, envía el paquete de incorporación y abre una clave de sandbox.",
 "专属对接人回复，发送开户资料包，并开通沙盒密钥。",
 "Un contact dédié répond, envoie le dossier d'intégration et ouvre une clé sandbox."],
["Day two","Día dos","第二天","Jour 2"],
["Compliance review","Revisión de cumplimiento","合规审核","Revue de conformité"],
["Entity documents, beneficial owners and source of funds.",
 "Documentos de la entidad, beneficiarios finales y origen de los fondos.",
 "机构文件、受益所有人及资金来源。",
 "Documents de l'entité, bénéficiaires effectifs et origine des fonds."],
["Day three","Día tres","第三天","Jour 3"],
["Account opened","Cuenta abierta","账户已开通","Compte ouvert"],
["Limits agreed and settlement instructions confirmed with your operations team.",
 "Límites acordados e instrucciones de liquidación confirmadas con tu equipo de operaciones.",
 "与您的运营团队确认额度和结算指令。",
 "Limites convenues et instructions de règlement confirmées avec votre équipe opérationnelle."],
["After that","Después","此后","Ensuite"],
["Quarterly review","Revisión trimestral","季度复核","Revue trimestrielle"],
["Limits and fees revisited, plus a direct line to the desk during market hours.",
 "Revisión de límites y comisiones, además de una línea directa con la mesa en horario de mercado.",
 "定期复核额度与费率，并在市场时段提供交易台直线联络。",
 "Limites et frais revus, avec une ligne directe vers le desk pendant les heures de marché."],
["you@company.com","tu@empresa.com","you@company.com","vous@societe.com"],
["Monthly volume, the products you trade, settlement currencies, and anything your operations team needs.",
 "Volumen mensual, los productos que operas, divisas de liquidación y cualquier cosa que necesite tu equipo de operaciones.",
 "月成交量、交易品种、结算币种，以及您的运营团队需要的任何信息。",
 "Volume mensuel, produits négociés, devises de règlement et tout ce dont votre équipe opérationnelle a besoin."],

/* benefits */
["Benefits","Beneficios","优势","Avantages"],
["What a Solen account gives you: public pricing, deep liquidity, segregated custody and a named contact.",
 "Lo que te da una cuenta Solen: precios públicos, liquidez profunda, custodia segregada y un contacto con nombre.",
 "Solen 账户能为您带来什么：公开定价、深度流动性、独立托管和专属联络人。",
 "Ce que vous apporte un compte Solen : tarifs publics, liquidité profonde, conservation ségréguée et un interlocuteur nommé."],
["Everything you get","Todo lo que obtienes","一个账户，","Tout ce que vous obtenez"],
["with one account.","con una sola cuenta.","尽享所有优势。","avec un seul compte."],
["Pricing, liquidity, custody and support are designed as one system, so a benefit in one place never costs you something in another.",
 "Precios, liquidez, custodia y soporte están diseñados como un solo sistema, de modo que una ventaja en un lugar nunca te cuesta algo en otro.",
 "定价、流动性、托管与服务被设计为一个整体，因此在某一环节获得的优势，绝不会以另一环节的代价为交换。",
 "Tarifs, liquidité, conservation et support sont conçus comme un seul système : un avantage à un endroit ne vous coûte jamais ailleurs."],
["Why desks switch","Por qué las mesas se cambian","交易台为何转投 Solen","Pourquoi les desks changent"],
["Six things clients tell us they notice in the first quarter.","Seis cosas que los clientes nos dicen notar en el primer trimestre.","客户告诉我们，他们在第一个季度就能感受到的六件事。","Six choses que nos clients remarquent dès le premier trimestre."],
["A lower all-in cost","Un costo total más bajo","更低的综合成本","Un coût global plus bas"],
["Public fee tiers, maker rebates and no hidden markups on the spread. What the schedule says is what you pay.",
 "Niveles de comisiones públicos, rebajas para makers y sin sobrecostes ocultos en el spread. Lo que dice la tarifa es lo que pagas.",
 "公开的费率阶梯、做市商返佣，价差上没有任何隐性加价。费率表上写多少，您就付多少。",
 "Paliers de frais publics, remises maker et aucune majoration cachée sur le spread. Ce que dit la grille est ce que vous payez."],
["Fills you can predict","Ejecuciones predecibles","可预期的成交","Des exécutions prévisibles"],
["Deep books and request for quote on size, with no last look, so the price you accept is the price you get.",
 "Libros profundos y solicitud de cotización para tamaños grandes, sin last look, así que el precio que aceptas es el que obtienes.",
 "深厚的订单簿，大额可询价，且不设 last look，您接受的价格就是最终成交的价格。",
 "Carnets profonds et demande de cotation pour les gros volumes, sans last look : le prix que vous acceptez est le prix que vous obtenez."],
["One balance for margin","Un solo balance para el margen","统一的保证金余额","Un seul solde pour la marge"],
["Collateral posted once covers spot, futures and options, which frees capital that would sit idle on other venues.",
 "El colateral depositado una vez cubre spot, futuros y opciones, liberando capital que quedaría inmovilizado en otros mercados.",
 "一次缴纳的抵押品即可覆盖现货、期货和期权，释放在其他平台上会被闲置的资金。",
 "Un collatéral déposé une fois couvre le spot, les futures et les options, libérant du capital qui resterait inactif ailleurs."],
["Assets that stay yours","Activos que siguen siendo tuyos","资产始终属于您","Des actifs qui restent les vôtres"],
["Segregated custody, monthly attestation and withdrawal controls keep client funds off the company balance sheet.",
 "Custodia segregada, certificación mensual y controles de retiro mantienen los fondos de los clientes fuera del balance de la empresa.",
 "独立托管、按月鉴证和提币管控，使客户资金远离公司资产负债表。",
 "Conservation ségréguée, attestation mensuelle et contrôles de retrait gardent les fonds des clients hors du bilan de l'entreprise."],
["A named contact","Un contacto con nombre","专属联络人","Un interlocuteur nommé"],
["Every account has a coverage contact who answers directly, including when the market is under stress.",
 "Cada cuenta tiene un contacto asignado que responde directamente, también cuando el mercado está bajo estrés.",
 "每个账户都有专属对接人直接答复，市场承压时也不例外。",
 "Chaque compte a un contact dédié qui répond directement, y compris quand le marché est sous tension."],
["A fast start","Un arranque rápido","快速上手","Un démarrage rapide"],
["About three business days from first reply to a funded account, with a sandbox key on day one.",
 "Unos tres días hábiles desde la primera respuesta hasta una cuenta fondeada, con una clave de sandbox el primer día.",
 "从首次回复到账户入金约需三个工作日，第一天即可获得沙盒密钥。",
 "Environ trois jours ouvrés entre la première réponse et un compte approvisionné, avec une clé sandbox dès le premier jour."],
["Pricing that rewards volume","Precios que premian el volumen","成交量越大，费率越优","Une tarification qui récompense le volume"],
["One public schedule for everyone. Your tier is set by trailing thirty-day spot volume.",
 "Una tarifa pública para todos. Tu nivel depende del volumen spot de los últimos treinta días.",
 "人人适用同一份公开费率表。您的费率阶梯由最近三十天的现货成交量决定。",
 "Une grille publique pour tous. Votre palier dépend du volume spot des trente derniers jours."],
["30-day volume","Volumen a 30 días","30 日成交量","Volume sur 30 jours"],
["Maker","Maker","挂单方","Maker"],
["Taker","Taker","吃单方","Taker"],
["Under $10M","Menos de $10M","低于 $10M","Moins de 10 M$"],
["$10M to $100M","De $10M a $100M","$10M 至 $100M","De 10 M$ à 100 M$"],
["$100M to $1B","De $100M a $1B","$100M 至 $1B","De 100 M$ à 1 Md$"],
["Over $1B","Más de $1B","超过 $1B","Plus de 1 Md$"],
["Sample figures shown for layout. A negative maker fee is a rebate.",
 "Cifras de muestra para maquetación. Una comisión maker negativa es una rebaja.",
 "此处为版式示例数据。负的挂单费率即为返佣。",
 "Chiffres d'exemple pour la mise en page. Des frais maker négatifs correspondent à une remise."],
["Built around how you trade","Hecho a la medida de cómo operas","围绕您的交易方式打造","Conçu autour de votre façon de négocier"],
["The same platform, set up differently for each kind of client.","La misma plataforma, configurada de forma distinta para cada tipo de cliente.","同一个平台，为不同类型的客户提供不同的配置。","La même plateforme, configurée différemment selon le type de client."],
["Hedge funds","Fondos de cobertura","对冲基金","Hedge funds"],
["Less collateral","Menos colateral","更少的抵押品","Moins de collatéral"],
["Portfolio margin nets risk across products, so hedged books post less.","El margen de cartera compensa el riesgo entre productos, así que las carteras cubiertas aportan menos.","组合保证金在产品间轧差风险，对冲仓位所需抵押更少。","La marge de portefeuille compense le risque entre produits : les portefeuilles couverts déposent moins."],
["Trading firms","Firmas de trading","交易公司","Sociétés de trading"],
["Low latency","Baja latencia","低延迟","Faible latence"],
["Colocation in LD4 and NY4, with a dedicated FIX session per strategy.","Colocación en LD4 y NY4, con una sesión FIX dedicada por estrategia.","在 LD4 与 NY4 机房同机房部署，每个策略配备独立 FIX 会话。","Colocation dans LD4 et NY4, avec une session FIX dédiée par stratégie."],
["Treasuries","Tesorerías","财资部门","Trésoreries"],
["Safe custody","Custodia segura","安全托管","Conservation sécurisée"],
["Segregated wallets, quorum approval and same-day settlement in BRL and USD.","Wallets segregadas, aprobación por quórum y liquidación el mismo día en BRL y USD.","独立钱包、多签审批，并支持雷亚尔与美元当日结算。","Portefeuilles ségrégués, approbation par quorum et règlement le jour même en BRL et USD."],
["Brokers","Bróker","经纪商","Courtiers"],
["Deep liquidity","Liquidez profunda","深度流动性","Liquidité profonde"],
["Route client flow to the same book, with keys scoped per strategy and IP.","Dirige el flujo de clientes al mismo libro, con claves limitadas por estrategia e IP.","将客户订单路由至同一订单簿，密钥可按策略和 IP 限定权限。","Dirigez le flux client vers le même carnet, avec des clés limitées par stratégie et par IP."],
["What changes when you move","Qué cambia cuando te mudas","迁移之后会有什么不同","Ce qui change quand vous nous rejoignez"],
["A plain comparison of how Solen handles the things that usually go wrong.","Una comparación sencilla de cómo maneja Solen lo que suele salir mal.","直观对比 Solen 如何处理那些通常容易出问题的环节。","Une comparaison simple de la façon dont Solen gère ce qui tourne habituellement mal."],
["Typical venue","Mercado típico","常见平台","Place type"],
["Last look on fills","Last look en ejecuciones","成交的 last look","Last look sur les exécutions"],
["Never","Nunca","从不","Jamais"],
["Common","Habitual","常见","Courant"],
["Client assets","Activos de clientes","客户资产","Actifs des clients"],
["Segregated","Segregados","独立托管","Ségrégués"],
["Often pooled","A menudo mezclados","常被混同","Souvent mutualisés"],
["Fee schedule","Tarifas","费率表","Grille tarifaire"],
["Public","Pública","公开","Publique"],
["Negotiated","Negociada","单独议价","Négociée"],
["Reserve attestation","Certificación de reservas","储备鉴证","Attestation des réserves"],
["Monthly","Mensual","每月","Mensuelle"],
["Rare","Poco común","罕见","Rare"],
["Support","Soporte","服务支持","Support"],
["A ticket queue","Una cola de tickets","工单队列","Une file de tickets"],
["See what it adds up to.","Mira cuánto suma todo.","看看这一切加起来意味着什么。","Voyez ce que tout cela représente."],
["Tell us your monthly volume and the products you trade, and we will send a pricing proposal with the first reply.",
 "Cuéntanos tu volumen mensual y los productos que operas, y enviaremos una propuesta de precios con la primera respuesta.",
 "告诉我们您的月成交量和交易品种，我们会在首次回复中附上报价方案。",
 "Indiquez-nous votre volume mensuel et les produits que vous négociez, et nous joindrons une proposition tarifaire à notre première réponse."],

/* aria labels */
["Main","Principal","主导航","Principal"],
["Main mobile","Principal móvil","移动端主导航","Principal mobile"],
["Platform figures","Cifras de la plataforma","平台数据","Chiffres de la plateforme"],
["API examples","Ejemplos de API","API 示例","Exemples d'API"],
["Company figures","Cifras de la empresa","公司数据","Chiffres de l'entreprise"],
["Offices","Oficinas","办公室","Bureaux"],
["Rotating globe marking the London, Singapore and Sao Paulo offices. Drag to spin, or use the arrow keys.",
 "Globo giratorio que marca las oficinas de Londres, Singapur y São Paulo. Arrastra para girar o usa las flechas.",
 "旋转地球仪，标出伦敦、新加坡和圣保罗的办公室。拖动旋转，或使用方向键。",
 "Globe rotatif marquant les bureaux de Londres, Singapour et São Paulo. Faites glisser pour le faire tourner, ou utilisez les flèches."],

/* page titles + descriptions */
["Institutional digital asset exchange: execution, custody and settlement in one venue.",
 "Exchange institucional de activos digitales: ejecución, custodia y liquidación en un solo mercado.",
 "机构级数字资产交易所：交易执行、托管与结算集于一个平台。",
 "Plateforme d'échange d'actifs numériques institutionnelle : exécution, conservation et règlement en une seule place."],
["Who Solen is, how the venue is run, and the rules we hold ourselves to.",
 "Quién es Solen, cómo se gestiona el mercado y las reglas a las que nos sometemos.",
 "Solen 是谁、平台如何运营，以及我们自我约束的准则。",
 "Qui est Solen, comment la place est gérée et les règles que nous nous imposons."],
["Talk to the Solen coverage team about accounts, liquidity, custody or API access.",
 "Habla con el equipo de cobertura de Solen sobre cuentas, liquidez, custodia o acceso a API.",
 "就账户、流动性、托管或 API 权限，联系 Solen 对接团队。",
 "Parlez à l'équipe de couverture de Solen de comptes, de liquidité, de conservation ou d'accès API."],
["Crypto market, regulation and security news, summarised by the Solen desk with links to every source.",
 "Noticias de mercado, regulación y seguridad cripto, resumidas por la mesa de Solen con enlaces a cada fuente.",
 "加密市场、监管与安全新闻，由 Solen 交易台整理，并附上各来源链接。",
 "Actualité des marchés, de la réglementation et de la sécurité crypto, résumée par le desk Solen avec les liens vers chaque source."],

/* blog index */
["What moved in crypto markets, regulation and security, summarised by the Solen desk with a link to every source.",
 "Lo que se movió en los mercados cripto, la regulación y la seguridad, resumido por la mesa de Solen con un enlace a cada fuente.",
 "加密市场、监管与安全领域的最新动态，由 Solen 交易台整理，并附上每条消息的来源链接。",
 "Ce qui a bougé sur les marchés crypto, la réglementation et la sécurité, résumé par le desk Solen avec un lien vers chaque source."],
["Ether ETFs lose more than $1 billion in October","Los ETF de ether pierden más de 1000 millones de dólares en octubre","以太坊现货 ETF 十月流出超 10 亿美元","Les ETF ether perdent plus d'un milliard de dollars en octobre"],
["US spot ether funds have given back all of September's inflows, while bitcoin funds held close to flat.",
 "Los fondos spot de ether en EE. UU. han devuelto todas las entradas de septiembre, mientras que los de bitcoin se mantuvieron casi planos.",
 "美国以太币现货基金已吐回九月的全部流入，而比特币基金基本持平。",
 "Les fonds ether spot américains ont restitué toutes les entrées de septembre, tandis que les fonds bitcoin sont restés quasi stables."],
["September was the worst month for crypto hacks this year","Septiembre fue el peor mes del año para los hackeos cripto","九月是今年加密黑客事件最严重的一个月","Septembre a été le pire mois de l'année pour les piratages crypto"],
["PeckShield counted $766.5 million stolen across 55 major incidents, with two breaches making up most of it.",
 "PeckShield contabilizó 766,5 millones de dólares robados en 55 incidentes importantes, la mayor parte por dos brechas.",
 "PeckShield 统计，55 起重大事件共被盗 7.665 亿美元，其中两起攻击占了绝大部分。",
 "PeckShield a recensé 766,5 millions de dollars volés dans 55 incidents majeurs, dont l'essentiel provient de deux brèches."],
["Bitget's $388 million breach and the road to recovery","La brecha de 388 millones de Bitget y el camino hacia la recuperación","Bitget 3.88 亿美元被盗事件与追回之路","La brèche de 388 millions de Bitget et le chemin vers la récupération"],
["The exchange has resumed withdrawals in stages, but its CEO says she is not very optimistic about getting the funds back.",
 "El exchange ha reanudado los retiros por etapas, pero su CEO dice que no es muy optimista sobre recuperar los fondos.",
 "该交易所已分阶段恢复提币，但其 CEO 表示对追回资金并不十分乐观。",
 "La plateforme a repris les retraits par étapes, mais sa PDG se dit peu optimiste quant à la récupération des fonds."],
["With the CLARITY Act stalled, the SEC and CFTC write their own rules","Con la ley CLARITY estancada, la SEC y la CFTC escriben sus propias reglas","CLARITY 法案搁浅，SEC 与 CFTC 开始自行制定规则","Avec la loi CLARITY au point mort, la SEC et la CFTC écrivent leurs propres règles"],
["Both agencies have proposals and relief in motion that cover fundraising, market structure and tokenized stocks.",
 "Ambas agencias tienen propuestas y exenciones en marcha sobre financiación, estructura de mercado y acciones tokenizadas.",
 "两家监管机构均已推出涵盖融资、市场结构和代币化股票的提案与豁免措施。",
 "Les deux agences ont des propositions et des dérogations en cours sur le financement, la structure de marché et les actions tokenisées."],
["The CLARITY Act fails a Senate procedural vote, 49 to 50","La ley CLARITY fracasa en una votación de procedimiento del Senado, 49 a 50","CLARITY 法案在参议院程序性投票中以 49 比 50 落败","La loi CLARITY échoue lors d'un vote de procédure au Sénat, 49 voix contre 50"],
["The market structure bill fell 11 votes short of the 60 it needed to start debate, though it stays on the calendar.",
 "El proyecto de estructura de mercado se quedó 11 votos por debajo de los 60 necesarios para iniciar el debate, aunque sigue en el calendario.",
 "这项市场结构法案距离启动辩论所需的 60 票差 11 票，但仍保留在议程上。",
 "Le texte sur la structure de marché a manqué de 11 voix les 60 nécessaires pour ouvrir le débat, mais reste à l'ordre du jour."],
["US regulators miss the GENIUS Act rulemaking deadline","Los reguladores de EE. UU. incumplen el plazo de la ley GENIUS","美国监管机构错过 GENIUS 法案的规则制定期限","Les régulateurs américains manquent l'échéance de la loi GENIUS"],
["Five agencies were due to finalize stablecoin rules by July 18. They have issued ten proposals instead.",
 "Cinco agencias debían finalizar las reglas de stablecoins antes del 18 de julio. En su lugar han emitido diez propuestas.",
 "五家机构本应在 7 月 18 日前敲定稳定币规则，实际只发布了十项提案。",
 "Cinq agences devaient finaliser les règles sur les stablecoins avant le 18 juillet. Elles ont publié dix propositions à la place."],
["Brazil brings crypto firms under central bank supervision","Brasil somete a las empresas cripto a la supervisión del banco central","巴西将加密公司纳入央行监管","Le Brésil place les entreprises crypto sous la supervision de la banque centrale"],
["Three resolutions create a new license category and treat stablecoin transfers as foreign exchange activity.",
 "Tres resoluciones crean una nueva categoría de licencia y tratan las transferencias de stablecoins como operaciones de cambio.",
 "三项决议设立了新的牌照类别，并将稳定币转账视为外汇业务。",
 "Trois résolutions créent une nouvelle catégorie de licence et traitent les transferts de stablecoins comme des opérations de change."]
];

var MONTHS=[
["January","enero","1月","janvier"],["February","febrero","2月","février"],["March","marzo","3月","mars"],
["April","abril","4月","avril"],["May","mayo","5月","mai"],["June","junio","6月","juin"],
["July","julio","7月","juillet"],["August","agosto","8月","août"],["September","septiembre","9月","septembre"],
["October","octubre","10月","octobre"],["November","noviembre","11月","novembre"],["December","diciembre","12月","décembre"]
];
var TAGS={Engineering:["Ingeniería","工程","Ingénierie"],Craft:["Oficio","工艺","Savoir-faire"],Markets:["Mercados","市场","Marchés"],Security:["Seguridad","安全","Sécurité"],Regulation:["Regulación","监管","Réglementation"]};

var LANGS=[
 {code:"en",short:"EN",name:"English",html:"en"},
 {code:"es",short:"ES",name:"Español",html:"es"},
 {code:"zh",short:"中文",name:"中文",html:"zh-CN"},
 {code:"fr",short:"FR",name:"Français",html:"fr"}
];
var IDX={en:0,es:1,zh:2,fr:3};
var UI={
 language:["Language","Idioma","语言","Langue"],
 theme:["Toggle theme","Cambiar tema","切换主题","Changer de thème"]
};

var norm=function(s){return s.replace(/\s+/g," ").trim()};
var DICT={};
R.forEach(function(r){DICT[norm(r[0])]=r});

var lang="en", theme="light", loaded=false;
var root=document.documentElement;

function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}

/* ---------- translate a string ---------- */
function t(s,l){
  l=l||lang;
  if(l==="en"||!s)return s;
  var i=IDX[l], core=norm(s), row=DICT[core];
  if(row)return row[i+0]||s;
  var m=core.match(/^([A-Z][a-z]+) (\d{1,2}), (\d{4}) · ([A-Za-z]+)$/);
  if(m){
    var mo=null;for(var k=0;k<MONTHS.length;k++)if(MONTHS[k][0]===m[1])mo=MONTHS[k];
    if(mo){
      var tag=TAGS[m[4]]?TAGS[m[4]][i-1]:m[4], d=m[2];
      if(l==="es")return d+" de "+mo[1]+" de "+m[3]+" · "+tag;
      if(l==="zh")return m[3]+"年"+mo[2]+d+"日 · "+tag;
      return d+" "+mo[3]+" "+m[3]+" · "+tag;
    }
  }
  return s;
}
window.SOLEN_T=function(s){return t(s)};

/* ---------- walk the DOM ---------- */
var SKIP="SCRIPT,STYLE,PRE,CODE,NOSCRIPT,[data-notr],.num,.lang-menu";
var ATTRS=["placeholder","aria-label","title"];
var obs=null;

function textNodes(rootEl,fn){
  var w=document.createTreeWalker(rootEl,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    var p=n.parentElement;
    if(!p||p.closest(SKIP))return NodeFilter.FILTER_REJECT;
    return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
  }});
  var n;while((n=w.nextNode()))fn(n);
}

function doNode(n){
  var cur=n.nodeValue, base;
  if(n.__t!==undefined&&cur===n.__t)base=n.__o; else base=cur;
  n.__o=base;
  var lead=base.match(/^\s*/)[0], trail=base.match(/\s*$/)[0];
  var out=lang==="en"?base:(function(){var r=t(base.trim());return r===base.trim()?base:lead+r+trail})();
  if(out!==cur)n.nodeValue=out;
  n.__t=out!==base?out:undefined;
}

function doAttrs(el){
  if(el.closest&&el.closest("[data-notr]"))return;
  ATTRS.forEach(function(a){
    if(!el.hasAttribute(a))return;
    var cur=el.getAttribute(a), store_="__"+a;
    var base=(el[store_]&&el[store_].t===cur)?el[store_].o:cur;
    var out=lang==="en"?base:t(base);
    el[store_]={o:base,t:out};
    if(out!==cur)el.setAttribute(a,out);
  });
}

function doHead(){
  var title=document.querySelector("title");
  if(title){
    if(title.__o===undefined||title.__t!==title.textContent)title.__o=title.textContent;
    var parts=title.__o.split(" — ");
    var out=parts.map(function(p,i){return i===parts.length-1?p:t(p)}).join(" — ");
    title.__t=out;document.title=out;
  }
  var md=document.querySelector('meta[name="description"]');
  if(md){
    if(md.__o===undefined||md.__t!==md.getAttribute("content"))md.__o=md.getAttribute("content");
    md.__t=lang==="en"?md.__o:t(md.__o);md.setAttribute("content",md.__t);
  }
}

function applyAll(){
  if(obs)obs.disconnect();
  textNodes(document.body,doNode);
  document.querySelectorAll("["+ATTRS.join("],[")+"]").forEach(doAttrs);
  doHead();
  syncControls();
  if(obs)obs.observe(document.body,{childList:true,subtree:true,characterData:true});
}

var pending=0;
function schedule(){
  if(pending)return;
  pending=requestAnimationFrame(function(){pending=0;applyAll()});
}

/* ---------- language + theme state ---------- */
function setLang(l){
  if(!(l in IDX))l="en";
  lang=l;store("solen-lang",l);
  var info=LANGS[IDX[l]];
  root.setAttribute("lang",info.html);
  applyAll();
}
function setTheme(th,persist){
  theme=th==="dark"?"dark":"light";
  root.setAttribute("data-theme",theme);
  if(persist)store("solen-theme",theme);
  syncControls();
  var m=document.querySelector('meta[name="theme-color"]');
  if(m)m.setAttribute("content",theme==="dark"?"#1b1b1b":"#ffffff");
}

/* ---------- header controls ---------- */
var ui={};
var ICON_GLOBE='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.5 3.9 5.5 3.9 9s-1.3 6.5-3.9 9c-2.6-2.5-3.9-5.5-3.9-9S9.4 5.5 12 3z"/></svg>';
var ICON_THEME='<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" stroke="none"/></svg>';
var ICON_CHECK='<svg class="chk" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function build(){
  var cta=document.querySelector(".head-cta");
  if(!cta||ui.wrap)return;
  var wrap=document.createElement("div");wrap.className="ctl-group";wrap.setAttribute("data-notr","");
  wrap.innerHTML=
   '<div class="lang">'+
     '<button class="ctl lang-btn" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="langMenu">'+ICON_GLOBE+'<span class="lang-code">EN</span></button>'+
     '<ul class="lang-menu" id="langMenu" role="menu" hidden>'+
      LANGS.map(function(L){return '<li role="none"><button type="button" role="menuitemradio" aria-checked="false" data-lang="'+L.code+'" lang="'+L.html+'"><span>'+L.name+'</span>'+ICON_CHECK+'</button></li>'}).join("")+
     '</ul>'+
   '</div>'+
   '<button class="ctl theme-btn" type="button">'+ICON_THEME+'</button>';
  cta.insertBefore(wrap,cta.firstChild);
  ui.wrap=wrap;
  ui.langBtn=wrap.querySelector(".lang-btn");
  ui.menu=wrap.querySelector(".lang-menu");
  ui.code=wrap.querySelector(".lang-code");
  ui.theme=wrap.querySelector(".theme-btn");

  function open(v){
    ui.menu.hidden=!v;
    ui.langBtn.setAttribute("aria-expanded",String(v));
    if(v){var a=ui.menu.querySelector('[aria-checked="true"]');if(a)a.focus()}
  }
  ui.langBtn.addEventListener("click",function(e){e.stopPropagation();open(ui.menu.hidden)});
  ui.menu.addEventListener("click",function(e){
    var b=e.target.closest("[data-lang]");if(!b)return;
    setLang(b.dataset.lang);open(false);ui.langBtn.focus();
  });
  ui.menu.addEventListener("keydown",function(e){
    var items=[].slice.call(ui.menu.querySelectorAll("button"));
    var i=items.indexOf(document.activeElement);
    if(e.key==="ArrowDown"){e.preventDefault();items[(i+1)%items.length].focus()}
    else if(e.key==="ArrowUp"){e.preventDefault();items[(i-1+items.length)%items.length].focus()}
    else if(e.key==="Escape"){open(false);ui.langBtn.focus()}
  });
  document.addEventListener("click",function(e){if(!ui.menu.hidden&&!wrap.contains(e.target))open(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!ui.menu.hidden)open(false)});

  ui.theme.addEventListener("click",function(){
    root.classList.add("theme-anim");
    setTheme(theme==="dark"?"light":"dark",true);
    setTimeout(function(){root.classList.remove("theme-anim")},350);
  });
}

function syncControls(){
  if(!ui.wrap)return;
  var i=IDX[lang];
  ui.code.textContent=LANGS[i].short;
  ui.langBtn.setAttribute("aria-label",UI.language[i]+": "+LANGS[i].name);
  ui.theme.setAttribute("aria-label",UI.theme[i]);
  ui.theme.setAttribute("title",UI.theme[i]);
  ui.theme.setAttribute("aria-pressed",String(theme==="dark"));
  ui.menu.querySelectorAll("[data-lang]").forEach(function(b){
    b.setAttribute("aria-checked",String(b.dataset.lang===lang));
  });
}

/* ---------- init ---------- */
(function init(){
  var th=store("solen-theme");
  if(th!=="dark"&&th!=="light")th=root.getAttribute("data-theme")==="dark"?"dark":"light";
  setTheme(th,false);
  build();
  obs=new MutationObserver(schedule);
  var l=store("solen-lang");
  if(!(l in IDX))l="en";
  lang=l;
  root.setAttribute("lang",LANGS[IDX[l]].html);
  applyAll();
  loaded=true;
})();

window.SOLEN_I18N={t:t,get lang(){return lang},get theme(){return theme},setLang:setLang,setTheme:setTheme};
})();
