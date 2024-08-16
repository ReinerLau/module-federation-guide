/// <reference types="vite/client" />

declare module 'remote/*' {
  export default function bootstrap(el: Element): void
}
