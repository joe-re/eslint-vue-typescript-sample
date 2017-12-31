declare module 'vue-prop' {
  // NOTE:
  // This is workaround for getting type-safe props. If this PR is merged, we can use 'PropType' instead of it.
  // https://github.com/vuejs/vue/pull/6856
  export type Prop < T > = { (): T } | { new (...args: any[]): T & object }
}
