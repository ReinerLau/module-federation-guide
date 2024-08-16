/// <reference types="vite/client" />

declare module 'remote/*' {
  export default function bootstrap(el: Element, shareData: Record<string, any>): void
}
