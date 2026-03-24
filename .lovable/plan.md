
Objetivo: corrigir a seção “Resultados Reais” para as fotos carregarem no preview e no publicado.

1) Diagnóstico da causa raiz
- O componente `src/components/Results.tsx` referencia:
  - `/result-7.png`
  - `/result-8.png`
  - `/result-9.png`
- Esses arquivos não existem hoje em `public/`, por isso ocorre 404 e as imagens não aparecem.

2) Plano de correção
- Recolocar as 3 fotos anexadas em um local estável do projeto com nomes simples e consistentes.
- Trocar a estratégia de path literal (`"/result-7.png"`) por import estático no `Results.tsx` (mais robusto para build/publicação).
- Manter o carrossel atual (compacto) e manter o CTA de WhatsApp como está.
- Limpar imports não usados em `Results.tsx` (ex.: `ChevronLeft`, `ChevronRight`) para evitar ruído.

3) Ajustes técnicos propostos
- Arquivos:
  - criar pasta `src/assets/results/` com as 3 imagens finais
  - editar `src/components/Results.tsx`
- Estrutura:
```text
src/assets/results/
  result-1.png
  result-2.png
  result-3.png
```
- No componente:
```text
import result1 from "@/assets/results/result-1.png";
import result2 from "@/assets/results/result-2.png";
import result3 from "@/assets/results/result-3.png";

const photos = [result1, result2, result3];
```
- Resultado esperado: se faltar arquivo, o problema aparece no build (não em produção), evitando publicar seção quebrada.

4) Validação (fim-a-fim)
- Conferir no preview desktop e mobile:
  - as 3 imagens carregam no carrossel
  - navegação do carrossel funciona
  - botão “Agendar consulta” continua indo para `/redirect?url=...` e depois WhatsApp
- Conferir publicado:
  - requests das 3 imagens respondendo 200
  - sem erro visual na seção “Resultados”.

5) Dependência para concluir
- Se os anexos anteriores não estiverem mais disponíveis no workspace, vou precisar que você reenvie as 3 fotos finais para eu fixar com os imports estáticos.
