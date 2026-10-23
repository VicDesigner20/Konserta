# Konserta: como funciona (manual do Kon)

O Konserta organiza a bancada de assistências técnicas, assistências de celulares, oficinas mecânicas e instaladores de ar-condicionado. Funciona no navegador do computador e do celular (dá para instalar como aplicativo). Endereço: konserta.vercel.app. Teste grátis de 14 dias, sem cartão.

## Quadro e status
- Cada aparelho/veículo/móvel é uma OS (ordem de serviço) num quadro com colunas de status: Fila de Análise, Aguardando Aprovação, Aguardando Peças, Em Bancada, Pronto / Aguardando Retirada, Devolvido sem Reparo e Entregue.
- No computador, todas as colunas aparecem lado a lado (colunas vazias ficam estreitas). No celular, os status viram abas no topo; a aba selecionada fica amarela.
- Para mudar o status: abra a OS (toque no cartão) e toque no status novo em "Status".
- As OS ficam em ordem do número maior para o menor, e as urgentes ficam no topo.
- Filtros por tipo de atendimento: Todos, Particular, Garantia de Fábrica, Garantia da loja e Seguradora (os tipos dependem do ramo, em Conta → Ramo e atendimentos).
- Coluna "Entregue": mostra só as OS entregues nos últimos 7 dias. As mais antigas ficam no "Histórico de entregues" (botão no fim da coluna Entregue), com busca e separadas por mês. A busca do quadro também encontra as antigas. Nada é apagado.
- Busca: campo "Buscar cliente, nº da OS, marca…".
- "Meus aparelhos": cada pessoa vê o próprio quadro. Quem tem permissão pode trocar para o quadro de outra pessoa ou "Toda a equipe".
- O cartão mostra: cliente, aparelho e defeito, tipo, há quantos dias está na loja, fotos, valor do orçamento, prioridade e tempo estimado.

## Criar uma OS
- Computador: botão "Nova OS" no topo. Celular: botão + amarelo no meio da barra de baixo → "Nova OS".
- Campos: número da OS (automático se a loja usa a OS completa do Konserta; se a loja já tem outro sistema, digita o número de lá), cliente, telefone/WhatsApp, aparelho, defeito, tipo de atendimento, marca do fabricante (garantia de fábrica), data de chegada, prioridade e status inicial.
- Dentro da OS: tempo estimado (Rápido, Médio, Demorado), prioridade (Baixa, Normal, Alta, Urgente), fotos e vídeos do defeito (até 20 MB por vídeo), peças, orçamento, histórico, PDF e apagar.
- Duas OS do mesmo cliente aparecem ligadas (o cliente tem 2 aparelhos na loja).
- "Cliente quer para": data que o cliente pediu (na criação da OS, ou depois em Dados, dentro da OS). O cartão mostra o prazo; um dia antes aparece no topo do quadro o aviso "Amanhã o cliente vem buscar", dizendo se o aparelho já está pronto. No dia vira "Hoje o cliente vem buscar" e, se passar, "Prazo já passou", em vermelho.

## Agenda de atendimentos
- Para marcar dia e hora com o cliente: garantias de fábrica, visitas na casa do cliente, particulares que ligam. Abre pelo botão "Agenda" no topo (computador) ou pelo + → "Agenda" / "Novo agendamento".
- No agendamento: dia, horário, duração, tipo (garantia de fábrica com marca e protocolo, garantia da loja, seguradora, particular), onde (na loja ou na casa do cliente, com endereço), cliente, telefone, aparelho, defeito, quem vai atender e observações.
- A página tem calendário do mês (com a quantidade de atendimentos em aberto por dia) e as abas Hoje, Amanhã, Próximos 7 dias, Atrasados e Histórico. "Só os meus" filtra pelos seus.
- Ao marcar Atendido, Não compareceu ou Cancelado, o atendimento sai das listas e vai para o Histórico (separado por mês, com busca por cliente, telefone, aparelho ou protocolo). Para trazer de volta, abra e mude o "Como foi?" para Agendado.
- Em cada atendimento: "Confirmar no WhatsApp" (manda a confirmação e marca como Confirmado), Ligar, Ver no mapa, "📅 Lembrar no meu celular" (adiciona ao calendário do celular com alarme 1 dia antes e 1 hora antes, toca mesmo com o app fechado; no Android use "Google Agenda"), "Como foi?" (Agendado, Confirmado, Atendido, Não compareceu, Cancelado), "Criar OS com estes dados" e "Editar / remarcar".
- No topo do quadro aparece "Hoje na agenda" com os horários do dia, e os avisos de amanhã e de atendimentos passados sem resposta. Com o app aberto, ele avisa 1 hora e 15 minutos antes; em "🔔 Avisar neste aparelho" dá para liberar a notificação do navegador.
- O técnico vê só os atendimentos dele (e os sem responsável); quem vê todas as OS vê a agenda toda.

## Peças, estoque e compras
- Na OS, em Peças, adicione cada peça com status: precisa comprar, encomendada, chegou, aplicada. Dá para puxar uma peça do Estoque, e o estoque baixa sozinho.
- Estoque (botão Estoque): cadastre item, quantidade, mínimo para avisar reposição, preço de venda e onde fica. O número vermelho mostra itens abaixo do mínimo.
- Compras (botão Compras): junta todas as peças que precisam ser compradas, encomendadas e que chegaram, de todas as OS, mais os itens do estoque abaixo do mínimo. Tem o botão "Copiar lista para o fornecedor".

## Estoque completo (página própria)
- Abre em Estoque → "Estoque completo" (ou em Conta). A tela rápida de Estoque continua igual; as duas mostram os mesmos itens.
- Cada peça tem: código (gerado automático, tipo P-0001, pode trocar), nome, categoria, "serve em" (compatibilidade), local, código de barras do fabricante, quantidade, mínimo, custo, preço de venda, margem, fornecedor e observações.
- No topo: itens cadastrados, peças em estoque, valor em estoque (custo), valor de venda, lucro se vender tudo e itens abaixo do mínimo. Filtros por categoria e local, busca e ordem. "Exportar planilha" baixa um arquivo que abre no Excel.
- Custo e margem só aparecem para quem gerencia o estoque ou as finanças. Só quem gerencia o estoque edita.
- Etiquetas: marque as peças, toque em "Etiquetas", escolha quantas de cada, a folha (Pimaco Carta 6180, 6181, 6182; Pimaco A4 A4251, A4256, A4260, A4262, A4263; A4 comum para recortar; ou personalizada com as medidas), o que vai na etiqueta (nome, código, código de barras, local, preço) e em qual etiqueta começar (para aproveitar folha já usada). Imprima em "Tamanho real / 100%". Antes de usar uma folha nova, imprima a "Página de teste" em papel comum e confira contra a luz; se sair deslocado, use o "Ajuste fino".

## Orçamento (para quem usa a OS completa do Konserta)
- Dentro da OS, em Orçamento, siga 3 passos: 1) Monte o orçamento com "+ Mão de obra" e "+ Peça" (valor aceita 1200, 1.200 ou 1.200,00); 2) Envie para o cliente (tela com logo, CNPJ, itens e total, por WhatsApp, imagem ou PDF); 3) Marque se o cliente aprovou ou recusou.
- Ao enviar, a OS vai sozinha para "Aguardando Aprovação". Ao aprovar, vai para "Em Bancada" (ou "Aguardando Peças" se faltar peça).
- Em "Desconto, prazo e validade" dá para dar desconto e definir validade.
- Comissão: ao lançar mão de obra aparece o campo "Comissão (%)", já preenchido com o percentual do técnico (da ficha dele) ou o padrão da loja.

## Valor final e Relatório do mês
- Toda OS tem o campo "Valor final" (quanto foi cobrado do cliente), dentro da OS. Serve principalmente para quem usa o Konserta só como organizador de bancada, sem o orçamento detalhado. Na OS completa, se o campo ficar vazio, vale o total do orçamento aprovado.
- Ao tocar em "Finalizar OS — cliente retirou", o app pergunta "Quanto foi cobrado?". Se foi garantia, toque em "Garantia — finalizar sem valor" (fica em destaque nas OS de garantia de fábrica e garantia da loja). Também dá para "Finalizar sem valor (coloco depois)"; essas aparecem no relatório como "sem valor" para completar.
- Dentro da OS, ao lado do Valor final, o botão "Garantia (sem valor)" marca ou desmarca a OS como garantia. No relatório, garantias aparecem contadas à parte e não entram no ticket médio.
- Relatório do mês: no menu + (Relatório do mês), no Histórico de entregues ou no Painel da Loja. Mostra quantos aparelhos foram entregues, quanto faturou, o ticket médio, a comparação com o mês anterior, os entregues sem valor (para completar), o total por tipo de atendimento e por técnico, e a lista do mês. Tem "Baixar planilha do mês". Dá para ver meses anteriores.
- O Relatório do mês e o "Faturado no mês" só aparecem para quem tem a permissão Finanças (por padrão: dono, gerente e financeiro). Técnico e atendente podem registrar o valor final ao entregar, mas não veem o relatório nem os totais. O dono pode mudar isso em Painel da Loja → Acessos → Editar função.

## Cotações
- Para quando o cliente quer saber o preço antes de deixar o aparelho. Botão "Cotações" no topo, ou + → "Nova cotação".
- Monte os itens, envie em PDF ou WhatsApp. Se o cliente aprovar, a cotação vira OS com um toque.

## Imprimir e PDF
- Dentro da OS, em "Imprimir / PDF": OS de entrada, Orçamento e comprovante de entrega. Garantia, prazo de retirada e termo ficam em Conta → OS impressa.

## Liberar a loja
- Cartão escuro "Liberar a loja" no topo do quadro, botão "Ver o que fazer". Mostra o que pode sair já (prontos e devolvidos esperando retirada, com botão para avisar o cliente no WhatsApp) e sugere consertos rápidos para fazer primeiro e liberar espaço na prateleira.

## Conta (botão com seu nome no computador, "Conta" no celular)
- Seu nome, sair, assinatura/teste grátis.
- Perfil da empresa: logo (a cor do app pode vir do logo), cor, nome, CNPJ, telefone, e-mail, endereço e horário.
- OS impressa: garantia, prazo de retirada e termo.
- Ramo e atendimentos, "Já tem sistema de OS?" e marcas que atende.
- Zerar OS: apagar as próprias OS ou todas as da empresa (pede para digitar APAGAR).

## Painel da Loja (dono, e quem tem a permissão "Gerenciar a equipe")
- Abre pelo botão "Painel da Loja" no topo (computador) ou pelo cartão escuro no topo de Conta (celular).
- Abas: Resumo (números da loja, quem está fora hoje, carga de cada técnico, aniversariantes), Acessos, Funcionários, Férias e folgas, Comissões.
- Acessos → "Adicionar pessoa": nome, e-mail, função e permissões. A pessoa recebe o acesso por convite por e-mail (mais seguro: ela cria a própria senha) ou por senha provisória para mandar no WhatsApp. A senha provisória vale só 5 minutos e, no primeiro acesso, o Konserta obriga a criar uma senha nova. Se venceu, gere outra em "Nova senha".
- Também dá para convidar pelo código da equipe: a pessoa cria a conta em konserta.vercel.app/cadastro → "Entrar numa equipe" e aparece em "Pedidos para entrar".
- Funções: Dono (pode tudo), Gerente (equipe, estoque, valores e configurações), Atendente (abre OS, orçamento e cotação, vê todas as OS), Técnico (vê só as próprias OS, usa peças do estoque), Financeiro (vê OS e valores, finanças). As permissões podem ser ajustadas uma por uma em "Editar função".
- Remover alguém passa as OS da pessoa para quem removeu.
- Funcionários: ficha com cargo, telefone, CPF, admissão, aniversário, comissão e observações (quem não usa o app também pode ter ficha).
- Férias e folgas: lançar férias, folga, atestado ou falta com datas.
- Comissões: total do mês por técnico, das OS entregues com mão de obra. Comissão padrão da loja fica nessa aba.

## Fornecedores
- No menu + → "Fornecedores", ou dentro de Compras. Contatos com o que vendem, vendedor, telefones, site, e botões Ligar e WhatsApp. Busca também pela peça.

## Entrar, senha e celular
- Entrar: konserta.vercel.app/entrar (e-mail e senha, ou Google quando estiver ligado). "Esqueci minha senha" manda um link por e-mail.
- Instalar no iPhone: abra no Safari → botão Compartilhar → "Adicionar à Tela de Início". No Android: Chrome → menu ⋮ → "Instalar app" ou "Adicionar à tela inicial".
- Os dados ficam na nuvem e aparecem em todos os aparelhos da equipe na hora.

## Planos
- 14 dias grátis. Depois, para assinar, use o botão "Assinar" no aviso do teste ou fale com o Konserta pelo WhatsApp de vendas.
