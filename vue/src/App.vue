<script setup lang="ts">
import { ref } from 'vue';
import bool from '@usebool/sdk-js';
import { onMounted } from 'vue';
import FeatureList from './components/FeatureList.vue';
import SingleFeature from './components/SingleFeature.vue';
import FeatureListVue from './components/FeatureList.vue';

const APP_ID = 'fa41ca19-2fc0-4bc5-92ee-326b8ade7350';

const featureFlags = bool({ appId: APP_ID });

const ready = ref(false);
const data = ref([]);
const flagEnabled = ref(false);
const flagDisabled = ref(false);
const flagNonexistent = ref(false);

onMounted(async () => {
  data.value = await featureFlags.getFeatures();
  flagEnabled.value = await featureFlags.hasFeature('E2E_ENABLED');
  flagDisabled.value = await featureFlags.hasFeature('E2E_DISABLED');
  flagNonexistent.value = await featureFlags.hasFeature('NONEXISTENT_FEATURE');
  ready.value = true;
});
</script>

<template>
  <div>
    <h1>Feature flags!</h1>

    <main v-if="ready">
      <article>
        <p>Below is a list of features, enabled or disabled.</p>

        <FeatureList :features="data" />
      </article>

      <article>
        <p>Below we fetch singular features by their keys.</p>

        <table>
          <thead>
            <th>Key</th>

            <th class="align-right">Expected</th>

            <th class="align-right">Actual</th>
          </thead>

          <tbody id="tbody">
            <SingleFeature
              key-name="E2E_ENABLED"
              :expected-value="true"
              :actual-value="flagEnabled"
            />
            <SingleFeature
              key-name="E2E_DISABLED"
              :expected-value="false"
              :actual-value="flagDisabled"
            />
            <SingleFeature
              key-name="NONEXISTENT_FEATURE"
              :expected-value="false"
              :actual-value="flagNonexistent"
            />
          </tbody>
        </table>
      </article>
    </main>
  </div>
</template>

<style>
@import './assets/style.css';
</style>
