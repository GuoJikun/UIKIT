import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  setup(props, { slots }) {
    const defaultSlot = slots.default ? slots.default() : "";
    return () => <button>{defaultSlot}</button>;
  },
});
