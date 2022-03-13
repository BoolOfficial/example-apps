<template>
  <dt>{{ keyName }}</dt>
  <dd :test-id="`details-item-${keyName}`">{{ value }}</dd>
</template>

<script setup lang="ts">
type Props = {
  keyName: string;
  value?: string;
};

defineProps<Props>();
</script>
