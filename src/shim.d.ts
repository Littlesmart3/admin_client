/* eslint-disable */

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    // install(app: App): void
  };
  export default component;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
