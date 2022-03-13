<script setup lang="ts">
import type { FeatureFlag } from '../types';
import Badge from './Badge.vue';
import DetailsItem from './DetailsItem.vue';

type Props = {
  features: FeatureFlag[];
};

defineProps<Props>();
</script>

<template>
  <ul id="list">
    <li
      v-for="feature in features"
      class="list-item"
      :test-id="`list-item-${feature.key}`"
    >
      <strong test-id="list-item-name">{{ feature.name }}</strong>

      <span test-id="list-item-value">
        <Badge :value="feature.value" />
      </span>

      <details>
        <summary>Details</summary>

        <dl>
          <DetailsItem keyName="key" :value="feature.key" />
          <DetailsItem keyName="description" :value="feature.description" />
          <DetailsItem keyName="id" :value="feature.id" />
          <DetailsItem keyName="applicationId" :value="feature.applicationId" />
        </dl>
      </details>
    </li>
  </ul>
</template>
