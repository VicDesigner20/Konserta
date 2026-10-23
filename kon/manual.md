# Konserta: como funciona (manual do Kon)

O Konserta organiza a bancada de assistências técnicas, oficinas mecânicas, marcenarias e instaladores de ar-condicionado. Funciona no navegador do computador e do celular (dá para instalar como aplicativo). Endereço: konserta.vercel.app. Teste grátis de 14 dias, sem cartão.

## Quadro e status
- Cada aparelho/veículo/móvel é uma OS (ordem de serviço) num quadro com colunas de status: Fila de Análise, Aguardando Aprovação, Aguardando Peças, Em Bancada, Pronto / Aguardando Retirada, Devolvido sem Reparo e Entregue.
- No computador, todas as colunas aparecem lado a lado (colunas vazias ficam estreitas). No celular, os status viram abas no topo; a aba selecionada fica amarela.
- Para mudar o status: abra a OS (toque no cartão) e toque no status novo em "Status".
- As OS ficam em ordem do número maior para o menor, e as urgentes ficam no topo.
- Filtros por tipo de atendimento: Todos, Particular, Garantia de Fábrica, Garantia da loja e Seguradora (os tipos dependem do ramo, em Conta → Ramo e atendimentos).
- Busca: campo "Buscar cliente, nº da OS, marca…".
- "Meus aparelhos": cada pessoa vê o próprio quadro. Quem tem permissão pode trocar para o quadro de outra pessoa ou "Toda a equipe".
- O cartão mostra: cliente, aparelho e defeito, tipo, há quantos dias está na loja, fotos, valor do orçamento, prioridade e tempo estimado.

## Criar uma OS
- Computador: botão "Nova OS" no topo. Celular: botão + amarelo no meio da barra de baixo → "Nova OS".
- Campos: número da OS (automático se a loja usa a OS completa do Konserta; se a loja já tem outro sistema, digita o número de lá), cliente, telefone/WhatsApp, aparelho, defeito, tipo de atendimento, marca do fabricante (garantia de fábrica), data de chegada, prioridade e status inicial.
- Dentro da OS: tempo estimado (Rápido, Médio, Demorado), prioridade (Baixa, Normal, Alta, Urgente), fotos e vídeos do defeito (até 20 MB por vídeo), peças, orçamento, histórico, PDF e apagar.
- Duas OS do mesmo cliente aparecem ligadas (o cliente tem 2 aparelhos na loja).
- "Cliente quer para": data que o cliente pediu (na criação da OS, ou depois em Dados, dentro da OS). O cartão mostra o prazo; um dia antes aparece no topo do quadro o aviso "Amanhã o cliente vem buscar", dizendo se o aparelho já está pronto. No dia vira "Hoje o cliente vem buscar" e, se passar, "Prazo já passou", em vermelho.

## Peças, estoque e compras
- Na OS, em Peças, adicione cada peça com status: precisa comprar, encomendada, chegou, aplicada. Dá para puxar uma peça do Estoque, e o estoque baixa sozinho.
- Estoque (botão Estoque): cadastre item, quantidade, mínimo para avisar reposição, preço de venda e onde fica. O número vermelho mostra itens abaixo do mínimo.
- Compras (botão Compras): junta todas as peças que precisam ser compradas, encomendadas e que chegaram, de todas as OS, mais os itens do estoque abaixo do mínimo. Tem o botão "Copiar lista para o fornecedor".

## Orçamento (para quem usa a OS completa do Konserta)
- Dentro da OS, em Orçamento, siga 3 passos: 1) Monte o orçamento com "+ Mão de obra" e "+ Peça" (valor aceita 1200, 1.200 ou 1.200,00); 2) Envie para o cliente (tela com logo, CNPJ, itens e total, por WhatsApp, imagem ou PDF); 3) Marque se o cliente aprovou ou recusou.
- Ao enviar, a OS vai sozinha para "Aguardando Aprovação". Ao aprovar, vai para "Em Bancada" (ou "Aguardando Peças" se faltar peça).
- Em "Desconto, prazo e validade" dá para dar desconto e definir validade.
- Comissão: ao lançar mão de obra aparece o campo "Comissão (%)", já preenchido com o percentual do técnico (da ficha dele) ou o padrão da loja.

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

## Agenda de fornecedores
- Botão "Agenda" no topo, + → "Agenda de fornecedores", ou dentro de Compras. Contatos com o que vendem, vendedor, telefones, site, e botões Ligar e WhatsApp. Busca também pela peça.

## Entrar, senha e celular
- Entrar: konserta.vercel.app/entrar (e-mail e senha, ou Google quando estiver ligado). "Esqueci minha senha" manda um link por e-mail.
- Instalar no iPhone: abra no Safari → botão Compartilhar → "Adicionar à Tela de Início". No Android: Chrome → menu ⋮ → "Instalar app" ou "Adicionar à tela inicial".
- Os dados ficam na nuvem e aparecem em todos os aparelhos da equipe na hora.

## Planos
- 14 dias grátis. Depois, para assinar, use o botão "Assinar" no aviso do teste ou fale com o Konserta pelo WhatsApp de vendas.
