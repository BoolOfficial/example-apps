<template>
  <tr>
    <td>{{ keyName }}</td>
    <td :test-id="`${keyName}-expectedValue`">
      <Badge :value="expectedValue" />
    </td>
    <td :test-id="`${keyName}-actualValue`">
      <Badge :value="actualValue" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import Badge from './Badge.vue';
type Props = {
  keyName: string;
  expectedValue: boolean;
  actualValue: boolean;
};

defineProps<Props>();
</script>

<style scoped></style>
