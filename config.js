// Configuração pública do Konserta (estas chaves são feitas para ficar no navegador; a segurança está nas regras do banco).
window.KONSERTA = {
  url: "https://zmukthcmbjphfyxzasme.supabase.co",
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWt0aGNtYmpwaGZ5eHphc21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MjM0MjcsImV4cCI6MjEwODE5OTQyN30.ZzNmON9NR_ppBYNup3pTbFf00dGEQNe5kdtJt7ZDD_M",
  // WhatsApp de vendas da Konserta, só números com 55 + DDD (ex.: "5541999999999"). Vazio = botão de assinar fica escondido.
  whatsapp: ""
};
window.sb = supabase.createClient(KONSERTA.url, KONSERTA.key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
