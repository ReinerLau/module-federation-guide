/// <reference types="vite/client" />

declare module 'remote/bootstrap' {
  export default function bootstrap(el: Element, shareData: Record<string, any>): void
}

declare module 'remote/stores' {
  export const pinia: any
  export const useCounterStore: any
}

declare module 'remote/Test' {}
