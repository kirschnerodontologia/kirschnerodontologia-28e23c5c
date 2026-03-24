
Objetivo: eliminar os bloqueios de build/deploy na Hostinger e corrigir falhas de carregamento em desktop e mobile.

1) Diagnóstico consolidado
- Do I know what the issue is? Sim.
- `vite.config.ts` e `public/.htaccess` já estão corretos para Vite + SPA.
- Há falha funcional em `src/components/Results.tsx`: usa `/result-1.png`, `/result-2.png`, `/result-3.png`, mas esses arquivos não existem em `public/`.
- Há alto risco de falha na Hostinger por lockfiles: `package-lock.json` e `bun.lock` contêm `resolved` para registry interno (`europe-west1-npm.pkg.dev/lovable-core-prod/...`) e ainda existem 2 lockfiles (ambiguidade de gerenciador).

2) Plano de correção (implementação)
- Padronizar instalação/deploy:
  - Remover `bun.lock`.
  - Remover `package-lock.json` atual (ou substituir por lock gerado fora do ambiente Lovable com registry público).
  - Em `package.json`, manter Vite fixo (`vite: 5.4.19`, `@vitejs/plugin-react: 4.3.4`) e adicionar:
    - `packageManager: "npm@10"`
    - `engines.node: ">=18 <23"` (compatível com Hostinger).
- Corrigir “Resultados Reais”:
  - Criar `src/assets/results/` com as 3 imagens finais enviadas.
  - Trocar paths literais por imports estáticos em `src/components/Results.tsx`.
  - Incluir fallback visual simples no `img` (onError -> placeholder local) para evitar seção quebrada.
- Blindar assets críticos (evitar 404 no publicado):
  - Migrar imagens de seções principais que hoje usam string (`/hero-*.jpg`, `/clinic-room.jpg`, cards de tratamento) para import estático progressivamente.
- Ajustes mobile/dispositivo:
  - Revisar overflow e quebra de linha (TopBar, CTAs e carrossel) para 320px/375px sem corte horizontal.

3) Arquivos previstos
- `package.json`
- `src/components/Results.tsx`
- `src/components/Hero.tsx` (se migrar imagens para import)
- `src/components/Differentials.tsx` (se migrar imagem para import)
- `src/components/Treatments.tsx` (se migrar imagens para import)
- `src/assets/results/*`
- Remoção de `bun.lock` e `package-lock.json` problemáticos

4) Validação fim-a-fim
- Build local sem erro.
- Sem 404 de imagens no preview/publicado.
- Deploy Hostinger sem erro de “framework incompatível/estrutura inválida”.
- Teste real em `/`, `/politica-de-privacidade`, `/redirect` e visual em mobile (320/375), tablet e desktop.
