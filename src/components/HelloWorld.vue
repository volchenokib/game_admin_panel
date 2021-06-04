<template>
  <div class="hello">
    <h1 class="h1">
      {{ greetingText }}
    </h1>
    <h1 class="custom-headline">Custom Headline</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    greetingText: {
      type: String,
      default: '',
    },
  },
  computed: {},

  methods: {},
}
</script>

<style scoped lang="scss"></style>
