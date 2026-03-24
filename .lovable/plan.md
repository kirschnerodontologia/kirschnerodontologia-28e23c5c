

## Problema

A Hostinger espera que o projeto Vite tenha o diretório de saída padrão (`dist`) e que o `index.html` esteja na raiz desse diretório. Atualmente o `vite.config.ts` não define explicitamente o `base` nem o `outDir`, o que pode causar incompatibilidade na detecção do framework pela Hostinger.

## Plano de Correção

### 1. Atualizar `vite.config.ts`

Adicionar as propriedades `base` e `build.outDir` explicitamente para que a Hostinger reconheça a estrutura Vite:

```ts
export default defineConfig(({ mode }) => ({
  base: "/",
  build: {
    outDir: "dist",
  },
  server: { ... },
  plugins: [ ... ],
  resolve: { ... },
}));
```

### 2. Criar arquivo `.htaccess` em `public/`

Para que o roteamento SPA (React Router) funcione na Hostinger (Apache), adicionar um `.htaccess` que redirecione todas as rotas para `index.html`:

```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Detalhes Técnicos

- `base: "/"` garante que todos os caminhos de assets usem a raiz como referência
- `outDir: "dist"` é o padrão do Vite, mas declarar explicitamente ajuda a Hostinger a detectar o framework
- O `.htaccess` é copiado automaticamente para `dist/` no build pois está em `public/`
- Na Hostinger, o diretório público deve apontar para a pasta `dist` gerada pelo `npm run build`

