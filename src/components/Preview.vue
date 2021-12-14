<template>
  <div class="preview">
    <section>
      <slot></slot>
    </section>
    <transition name="fade">
      <div v-show="codeVisible" class="source-code">
        <pre
          class="language-html"
        ><code class="language-html">{{previewSourceCode}}</code></pre>
      </div>
    </transition>
    <div class="preview-bottom">
      <span name="Code" @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Prism from "prismjs";
import "../assets/prism.css";
const isDev = import.meta.env.MODE === "development";
export default defineComponent({
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: "",
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: "",
      require: true,
    },
  },
  data() {
    return {
      sourceCode: "",
      codeVisible: false,
    };
  },
  computed: {
    previewSourceCode() {
      const code = this.sourceCode.replace(
        /'\.\.\/\.\.\/index'/g,
        `@tencent/my-kit`
      );
      console.log(code);
      return code;
    },
  },
  async mounted() {
    if (this.compName && this.demoName) {
      if (isDev) {
        this.sourceCode = (
          await import(
            /* @vite-ignore */ `../../packages/${this.compName}/docs/${this.demoName}.vue?raw`
          )
        ).default;
      } else {
        this.sourceCode = await fetch(
          `${isDev ? "" : "/UIKIT"}/packages/${this.compName}/docs/${
            this.demoName
          }.vue`
        ).then((res) => res.text());
      }
    }
    await this.$nextTick();
    Prism.highlightAll();
  },
  methods: {
    async copyCode() {
      // this.$copyText(this.sourceCode);
    },
    showSourceCode() {
      this.codeVisible = !this.codeVisible;
    },
  },
});
</script>

<style lang="scss">
pre {
  line-height: 0;
}
.preview {
  border-radius: 4px;
  border: 1px dashed #e7e7e7;
  border-bottom: 1px dashed #e7e7e7;
  section {
    margin: 12px;
  }
}
.source-code {
  max-height: 500px;
  padding: 0 12px;
  border-radius: 4px;
}
.language-html {
  margin: 0;
  border-radius: 4px;
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
}
span[name="Code"] {
  cursor: pointer;
  display: inline-flex;
}
</style>
