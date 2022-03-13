<template>
  <small :class="value ? 'badge__enabled' : 'badge__disabled'">{{
    value ? 'Enabled' : 'Disabled'
  }}</small>
</template>

<script setup lang="ts">
import type { FeatureFlag } from '../types';

type Props = {
  value: FeatureFlag['value'];
};

const props = defineProps<Props>();

const text = props.value ? 'Enabled' : 'Disabled';
</script>
