/* Kon no site: tira dúvidas de quem ainda não é cliente (respostas prontas, sem IA) */
(function(){
const norm=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim().replace(/\s+/g," ");
const SCR=document.currentScript||{dataset:{}};const SB_URL=SCR.dataset.sbUrl||"",SB_KEY=SCR.dataset.sbKey||"";
const W=((document.currentScript&&document.currentScript.dataset.whatsapp)||"").replace(/\D/g,"");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function konSVG(cls=""){return `<svg class="kon-svg ${cls}" viewBox="0 0 64 64" aria-hidden="true"><defs><mask id="konNotch${cls}"><rect x="0" y="0" width="64" height="64" fill="#fff"/><rect x="29.3" y="-2" width="5.4" height="7.5" rx="1" fill="#000"/></mask></defs>
<g mask="url(#konNotch${cls})"><circle cx="32" cy="6.5" r="6" fill="#141414"/></g><rect x="30" y="8" width="4" height="9" rx="1.5" fill="#141414"/>
<circle cx="6.5" cy="37" r="3.6" fill="#141414"/><circle cx="57.5" cy="37" r="3.6" fill="#141414"/>
<rect x="6" y="15" width="52" height="44" rx="17" fill="#FFB21E"/><rect x="13" y="22" width="38" height="27" rx="11" fill="#141414"/>
<g class="kon-olhos"><rect x="21" y="29" width="6" height="9.5" rx="3" fill="#FFB21E"/><rect x="37" y="29" width="6" height="9.5" rx="3" fill="#FFB21E"/></g>
<path class="kon-boca" d="M26 42.5q6 4.2 12 0" stroke="#FFB21E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
<circle cx="17" cy="53" r="2.2" fill="#e09a10"/><circle cx="47" cy="53" r="2.2" fill="#e09a10"/></svg>`}


const FAQ=[
 {k:["o que e","oque e","o que faz","pra que serve","para que serve","como funciona","konserta"],r:"O Konserta organiza a bancada de quem conserta: cada aparelho vira um cartão num quadro (fila, aguardando peça, em bancada, pronto), com foto do defeito, peças, orçamento pelo WhatsApp e um botão que mostra o que dá pra liberar hoje pra esvaziar a loja.",a:"como"},
 {k:["preco","precos","valor","quanto custa","quanto e","plano","planos","mensalidade","assinatura","custa"],r:"São 3 planos:\n- **Bancada** R$ 29/mês: organiza a bancada pra quem já tem sistema de OS.\n- **Completo** R$ 49/mês: a OS inteira no app, com orçamento, cotação e PDF.\n- **Equipe** R$ 89/mês: até 5 técnicos, um quadro pra cada um.\nNo plano anual você ganha 2 meses. E dá pra testar tudo 14 dias grátis antes.",a:"planos"},
 {k:["teste","gratis","gratuito","free","testar","experimentar","14 dias"],r:"Você usa tudo por **14 dias grátis**, sem cadastrar cartão. Gostou, escolhe um plano. Não gostou, a conta só para de funcionar, sem cobrança nenhuma.",a:"cadastro"},
 {k:["cartao","credito","cobranca","cobrar","pagar","pagamento","boleto","pix"],r:"Pra testar não precisa de cartão nenhum. Só no fim dos 14 dias, se quiser continuar, você escolhe o plano.",a:"cadastro"},
 {k:["cancelar","cancelamento","fidelidade","multa","contrato"],r:"Sem fidelidade: você cancela quando quiser."},
 {k:["funciona no celular","usar no celular","celular","iphone","android","tablet","aplicativo","app","baixar","instalar","computador"],r:"Funciona no celular, no tablet e no computador, direto no navegador, e dá pra instalar como aplicativo na tela inicial. Foi feito pra usar com o celular na mão, na bancada.",a:"cadastro"},
 {k:["sistema de os","ja tenho sistema","ja uso","sh oficina","outro sistema","largar meu sistema","trocar de sistema"],r:"Não precisa largar o seu sistema. No plano **Bancada**, o Konserta só organiza a bancada e o número da OS continua vindo do sistema que você já usa. Se você não tem sistema, o plano **Completo** faz a OS inteira: número, orçamento e impressão.",a:"planos"},
 {k:["oficina","mecanica","carro","moto","veiculo","ar condicionado","ar-condicionado","split","assistencia de celular","conserto de celular","loja de celular","celulares","smartphone","troca de tela","bateria","celular conserto","eletronica","eletrodomestico","ramo","serve pra"],r:"Serve pra **assistência técnica**, **assistência de celulares**, **mecânica automotiva** e **ar-condicionado**. No cadastro você escolhe o ramo e os campos se ajustam: veículo e placa na oficina, endereço do serviço no ar-condicionado, e assim por diante.",a:"cadastro"},
 {k:["tecnico","funcionario","equipe","usuarios","quantos usuarios","quantas pessoas","varios tecnicos","meu pai","socio"],r:"Sim, a equipe toda pode usar. O dono cadastra cada pessoa no **Painel da Loja** e escolhe a função (gerente, atendente, técnico, financeiro). Cada um entra com o próprio e-mail e senha, e o técnico vê só os aparelhos dele. O plano **Equipe** é pra até 5 técnicos.",a:"planos"},
 {k:["orcamento","whatsapp","enviar orcamento","pdf","imprimir"],r:"Você monta o orçamento em 3 passos e manda pelo WhatsApp como imagem ou PDF, com seu logo e CNPJ. Enviou, a OS já vai pra \"aguardando aprovação\". Tem também PDF da OS de entrada e comprovante de entrega (plano Completo).",a:"cadastro"},
 {k:["estoque","pecas","compras","fornecedor","lista de compras"],r:"Cada OS tem a lista de peças (precisa comprar, encomendada, chegou, aplicada). Puxou do estoque, ele baixa sozinho. E a lista de compras junta as peças de todas as OS pra você mandar pro fornecedor de uma vez."},
 {k:["foto","video","defeito","risco"],r:"Na entrada você tira foto ou grava vídeo do aparelho direto pela câmera. Protege você naquela conversa de \"esse risco já estava aí\" e ajuda no diagnóstico."},
 {k:["seguro","seguranca","dados","backup","perder","nuvem","privacidade"],r:"Os dados ficam na nuvem, não no celular: trocou ou perdeu o aparelho, entra de novo e está tudo lá. Cada loja só vê os próprios dados, e cada funcionário só vê o que a função dele permite."},
 {k:["internet","offline","sem internet"],r:"O Konserta precisa de internet pra funcionar, porque os dados ficam na nuvem e aparecem na hora pra equipe toda."},
 {k:["importar","planilha","migrar","trazer meus dados","excel"],r:"Ainda não tem importação automática de planilha. Como é rápido cadastrar um aparelho, a maioria começa do zero com o que está na loja hoje."},
 {k:["cadastrar","criar conta","comecar","como faco pra usar","quero usar","assinar","contratar"],r:"É só criar sua conta: leva uns 2 minutos. Você coloca seu nome, o nome da loja, o ramo e se já tem sistema de OS. Já cai direto no app com os 14 dias grátis.",a:"cadastro"},
 {k:["entrar","login","logar","ja tenho conta","acessar","senha"],r:"Se você já tem conta, é só entrar com seu e-mail e senha. Esqueceu a senha? Na tela de entrada tem \"Esqueci minha senha\".",a:"entrar"},
 {k:["suporte","ajuda","falar com alguem","atendimento","contato","whatsapp de vendas","humano"],r:"__SUPORTE__",a:"contato"},
 {k:["sugestao","sugestoes","sugerir","ideia","melhoria","melhorar","feedback","opiniao"],r:"Sua ideia é muito bem-vinda! 💡 Na página **Sugestões** você manda direto pra equipe do Konserta, que lê todas.",a:"sug"},
 {k:["liberar a loja","loja cheia","lotada","espaco"],r:"O **Liberar a loja** mostra o que pode sair hoje (prontos esperando retirada, com aviso no WhatsApp) e quais consertos são rápidos e já têm peça. Você sabe por onde começar o dia e a prateleira esvazia.",a:"cadastro"}
];
const tok=x=>norm(x).replace(/[^\p{L}\p{N} ]/gu," ").split(" ").filter(w=>w.length>1&&!["de","da","do","um","uma","e","eu","me","meu","minha","como","que","pra","para","no","na","em","com","se","ta","to","voces","vcs"].includes(w)).map(w=>w.slice(0,5));
const SUP=W?"Pra falar com uma pessoa do Konserta, é só chamar no WhatsApp. E dentro do app eu continuo te ajudando.":"O atendimento com uma pessoa ainda está sendo montado. Enquanto isso, crie sua conta grátis e me pergunte lá dentro, que eu conheço o app inteiro.";
FAQ.forEach(f=>{if(f.r==="__SUPORTE__"){f.r=SUP;if(!W)f.a="cadastro"}});
function responder(q){const t=new Set(tok(q));let best=null,bs=0;
  for(const f of FAQ){let sc=0;for(const k of f.k){const ws=tok(k);if(ws.length&&ws.every(w=>t.has(w)))sc+=ws.length*2}if(sc>bs){bs=sc;best=f}}
  if(!best||bs<2)return {r:"Essa eu não sei responder daqui. 🔧 Mas posso te contar sobre preços, teste grátis, ramos atendidos, equipe e como funciona. Ou crie sua conta e me pergunte lá dentro, que eu conheço o app inteiro.",a:"cadastro"};
  return best}
const ACOES={cadastro:["Testar 14 dias grátis","/cadastro"],entrar:["Entrar","/entrar"],sug:["Mandar sugestão","/sugestoes"],planos:["Ver os planos","#planos"],como:["Ver como funciona","#como"],
  contato:W?["Falar no WhatsApp","https://wa.me/"+W+"?text="+encodeURIComponent("Oi! Tenho uma dúvida sobre o Konserta.")]:null};
let msgs=[],aberto=false,modo="kon",hum=null,humMsgs=[],ocupado=false,etapa=null;
try{hum=JSON.parse(localStorage.getItem("konserta.humano")||"null")}catch(_){}
async function rpc(fn,args){const r=await fetch(SB_URL+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:SB_KEY,Authorization:"Bearer "+SB_KEY,"Content-Type":"application/json"},body:JSON.stringify(args)});const j=await r.json().catch(()=>null);if(!r.ok)throw new Error((j&&j.message)||"erro");return j}
const fab=document.createElement("button");fab.type="button";fab.className="ks-fab";fab.setAttribute("aria-label","Tirar dúvidas com o Kon");fab.innerHTML=konSVG("sfab");
const dica=document.createElement("div");dica.className="ks-dica";dica.hidden=true;dica.textContent="Dúvidas? Pergunta pro Kon!";
const box=document.createElement("section");box.className="ks";box.hidden=true;box.setAttribute("aria-label","Kon, assistente do Konserta");
box.innerHTML=`<div class="ks-h">${konSVG("shead")}<div><b>Kon</b><small class="ks-st">tira dúvidas sobre o Konserta</small></div><button type="button" class="ks-hum">Falar com uma pessoa</button><button type="button" class="ks-x" aria-label="Fechar">✕</button></div>
<div class="ks-msgs" aria-live="polite"></div><div class="ks-sug"></div>
<form class="ks-f" autocomplete="off"><input placeholder="Pergunte ao Kon…" aria-label="Sua pergunta" maxlength="300"><button type="submit" aria-label="Enviar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg></button></form>`;
document.body.append(fab,dica,box);
const $m=box.querySelector(".ks-msgs"),$s=box.querySelector(".ks-sug"),$i=box.querySelector("input");
function fmt(m){let h=esc(m.r).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");const A=m.a&&ACOES[m.a];if(A)h+=`<a class="ks-acao" href="${esc(A[1])}"${/^https/.test(A[1])?' target="_blank" rel="noopener"':""}>${esc(A[0])} →</a>`;return h}
function render(digitando){
  box.querySelector(".ks-hum").textContent=modo==="humano"?"← Kon":"Falar com uma pessoa";
  if(modo==="humano"){humRender(digitando);return}
  box.querySelector(".ks-st").textContent="tira dúvidas sobre o Konserta";$i.placeholder="Pergunte ao Kon…";
  $m.innerHTML=msgs.map(m=>m.eu?`<div class="ks-m ks-eu"><div class="ks-b">${esc(m.eu)}</div></div>`:`<div class="ks-m"><span class="ks-av">${konSVG("smini")}</span><div class="ks-b">${fmt(m)}</div></div>`).join("")+(digitando?`<div class="ks-m"><span class="ks-av">${konSVG("smini")}</span><div class="ks-b ks-dig"><i></i><i></i><i></i></div></div>`:"");
  $s.innerHTML=msgs.filter(m=>m.eu).length<3?["Quanto custa?","Como é o teste grátis?","Preciso largar meu sistema de OS?","Serve pra oficina?","Meus técnicos conseguem usar?","Falar com uma pessoa"].map(s=>`<button type="button">${esc(s)}</button>`).join(""):"";
  $m.scrollTop=$m.scrollHeight}
function abrir(){aberto=true;box.hidden=false;dica.hidden=true;document.body.classList.add("ks-on");try{localStorage.setItem("konserta.kon.site","1")}catch(_){}
  if(!msgs.length)msgs.push({r:"Oi! Eu sou o **Kon**, o ajudante do Konserta. 🔧\nPosso te explicar como o app funciona, os planos e o teste grátis. Pergunta aí!"});
  render();if(matchMedia("(min-width:761px)").matches)setTimeout(()=>$i.focus(),50)}
function fechar(){aberto=false;box.hidden=true;document.body.classList.remove("ks-on")}
function perguntar(q){q=String(q||"").trim().slice(0,1000);if(!q)return;
  if(modo==="humano"){humEnviar(q);return}
  if(/\b(humano|pessoa|atendente|vendedor|consultor|suporte|falar com alguem|falar com voces)\b/.test(norm(q))){msgs.push({eu:q});humEntrar();return}msgs.push({eu:q});render(true);setTimeout(()=>{msgs.push(responder(q));render()},500)}
fab.onclick=()=>aberto?fechar():abrir();box.querySelector(".ks-x").onclick=fechar;
$s.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.textContent==="Falar com uma pessoa"){humEntrar();return}perguntar(b.textContent)});
box.querySelector(".ks-hum").onclick=()=>modo==="humano"?(modo="kon",render()):humEntrar();
box.querySelector("form").addEventListener("submit",e=>{e.preventDefault();const v=$i.value;$i.value="";perguntar(v)});
box.addEventListener("submit",e=>{if(!e.target.classList.contains("ks-ctt"))return;e.preventDefault();const f=e.target;const n=f.querySelector("[name=n]").value.trim(),c=f.querySelector("[name=c]").value.trim();
  if(!n||c.length<6){f.querySelector(".ks-err").textContent="Coloque seu nome e um WhatsApp ou e-mail pra gente te responder.";return}
  etapa={nome:n,contato:c};try{localStorage.setItem("konserta.humano.ctt",JSON.stringify(etapa))}catch(_){}render();$i.focus()});
box.addEventListener("click",e=>{const a=e.target.closest(".ks-acao");if(a&&a.getAttribute("href").startsWith("#")&&!matchMedia("(min-width:761px)").matches)fechar()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&aberto)fechar()});
let visto=false;try{visto=!!localStorage.getItem("konserta.kon.site")}catch(_){}
if(!visto)setTimeout(()=>{if(!aberto){dica.hidden=false;setTimeout(()=>dica.hidden=true,10000)}},6000);

/* ---- Falar com uma pessoa ---- */
try{etapa=JSON.parse(localStorage.getItem("konserta.humano.ctt")||"null")}catch(_){}
function quando(t){return new Date(t).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}
function humRender(dig){
  box.querySelector(".ks-st").textContent="equipe Konserta";$i.placeholder="Escreva para a equipe…";$s.innerHTML="";
  const wa=W?`<a class="ks-acao" href="https://wa.me/${W}?text=${encodeURIComponent("Oi! Tenho uma dúvida sobre o Konserta.")}" target="_blank" rel="noopener">Ou chamar no WhatsApp →</a>`:"";
  let h=`<div class="ks-m"><span class="ks-av">${konSVG("smini")}</span><div class="ks-b">${hum?"Esta é a sua conversa com a <b>equipe do Konserta</b>. As respostas aparecem aqui, e também mandamos no contato que você deixou.":"Claro! Uma pessoa da <b>equipe do Konserta</b> vai te responder. Deixa seu nome e um WhatsApp ou e-mail, e depois escreve sua dúvida."}${wa}</div></div>`;
  if(!hum&&!etapa)h+=`<form class="ks-ctt"><input name="n" placeholder="Seu nome" maxlength="80" autocomplete="name"><input name="c" placeholder="WhatsApp ou e-mail" maxlength="120" autocomplete="email"><div class="ks-err"></div><button type="submit">Continuar</button></form>`;
  h+=humMsgs.map(m=>m.de==="konserta"?`<div class="ks-m"><span class="ks-av ks-eq">K</span><div class="ks-b ks-hb"><small>Equipe Konserta · ${quando(m.em)}</small>${esc(m.texto).replace(/\n/g,"<br>")}</div></div>`:`<div class="ks-m ks-eu"><div class="ks-b">${esc(m.texto).replace(/\n/g,"<br>")}</div></div>`).join("");
  if(hum&&hum.status==="fechado")h+=`<div class="ks-fim">Atendimento encerrado. Se escrever de novo, abrimos outro.</div>`;
  if(dig)h+=`<div class="ks-m ks-eu"><div class="ks-b ks-dig"><i></i><i></i><i></i></div></div>`;
  $m.innerHTML=h;$m.scrollTop=$m.scrollHeight;
  box.querySelector(".ks-f").hidden=!hum&&!etapa;
}
async function humCarregar(){if(!hum)return;try{const d=await rpc("humano_ver",{p_id:hum.id,p_token:hum.token});if(d){hum.status=d.status;humMsgs=d.msgs||[]}else{hum=null;humMsgs=[];try{localStorage.removeItem("konserta.humano")}catch(_){}}}catch(_){}fab.classList.remove("tem-resposta")}
async function humEntrar(){modo="humano";if(!aberto)abrir();render();await humCarregar();render()}
async function humEnviar(q){
  if(ocupado)return;ocupado=true;render(true);
  try{
    if(!hum||hum.status==="fechado"){const d=await rpc("humano_abrir",{p_nome:(etapa&&etapa.nome)||"",p_contato:(etapa&&etapa.contato)||"",p_texto:q,p_empresa:null});hum={id:d.id,token:d.token,status:"aberto"};try{localStorage.setItem("konserta.humano",JSON.stringify(hum))}catch(_){}}
    else await rpc("humano_enviar",{p_id:hum.id,p_token:hum.token,p_texto:q});
    await humCarregar();
  }catch(e){humMsgs.push({de:"konserta",texto:/muit/.test(e.message)?"Muitas mensagens agora. Espere um pouco e tente de novo.":"Não consegui enviar agora. Tente de novo em instantes.",em:Date.now()})}
  ocupado=false;render();
}
async function humChecar(){if(!hum)return;try{const n=await rpc("humano_novas",{p_id:hum.id,p_token:hum.token});
  if(aberto&&modo==="humano"){await humCarregar();render()}else if(n>0){fab.classList.add("tem-resposta");if(!aberto){dica.textContent="A equipe Konserta te respondeu!";dica.hidden=false}}}catch(_){}}
if(hum)setTimeout(humChecar,2500);
setInterval(()=>{if(document.visibilityState==="visible"&&hum&&(aberto&&modo==="humano"||!humChecar._t||Date.now()-humChecar._t>60000)){humChecar._t=Date.now();humChecar()}},15000);
})();
