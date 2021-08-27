import bool from '@usebool/sdk-js';
import { ListItem, SingleItem } from './components';
import { FeatureFlag } from './types';
import './style.css';

const APP_ID = 'fa41ca19-2fc0-4bc5-92ee-326b8ade7350';

const featureFlags = bool({ appId: APP_ID });

const composeFeatures = async () => {
  const data = await featureFlags.getFeatures();

  const cb = (accumulator: string, currentFeature: FeatureFlag) =>
    accumulator + ListItem(currentFeature);

  return data.reduce(cb, '');
};

const composeSingularFeatures = async () => {
  const keys = [
    {
      key: 'E2E_ENABLED',
      expectedValue: true,
    },
    {
      key: 'E2E_DISABLED',
      expectedValue: false,
    },
    {
      key: 'NON_EXISTANT_FEATURE',
      expectedValue: false,
    },
  ];

  const featureOne = await featureFlags.hasFeature(keys[0].key);
  const featureTwo = await featureFlags.hasFeature(keys[1].key);
  const featureThree = await featureFlags.hasFeature(keys[2].key);

  return [featureOne, featureTwo, featureThree]
    .map((actualValue, i) => SingleItem({ ...keys[i], actualValue }))
    .join('');
};

const render = (targetId: string, html: string) => {
  const target = document.querySelector(`#${targetId}`);

  if (target) {
    target.insertAdjacentHTML('afterbegin', html);
  } else {
    console.error(`Render target (#${targetId}) did not exist!`);
  }
};

(async function init() {
  render('list', await composeFeatures());
  render('tbody', await composeSingularFeatures());
})();
