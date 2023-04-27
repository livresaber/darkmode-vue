<script setup>
const props = defineProps(['disableCopy'])

function copyText ({ target: { textContent }}) {
  navigator.clipboard.writeText(textContent);
  alert(`código copiado basta colar \n${textContent}`)
}
</script>

<template>
  <code class="code" :class="{'disableCopy': disableCopy }" @click="(e) => disableCopy ? null : copyText(e)">
    <slot></slot>
  </code>
</template>

<style>
code {
  padding: 1rem;
  margin-top: 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dm-color-primary);
  white-space: pre-wrap;
  background: #000;
}
code.disableCopy {
  background: transparent;
}
</style>
