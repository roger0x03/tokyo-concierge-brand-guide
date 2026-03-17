/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_ENVIRONMENT?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
