import { FeatureFlag } from './types';

export const Badge = (value: FeatureFlag['value']) => {
  const text = value ? 'Enabled' : 'Disabled';
  const cn = value ? 'badge__enabled' : 'badge__disabled';

  return `<small class="${cn}">${text}</small>`;
};

export const DetailsItem = (key: string, value?: string) => `
  <dt>${key}</dt>
  <dd test-id="details-item-${key}">${value}</dd>
`;

export const ListItem = ({
  name,
  value,
  key,
  id,
  description,
  applicationId,
}: FeatureFlag) => `
  <li class="list-item" test-id="list-item-${key}">
    <strong test-id="list-item-name">${name}</strong>
    <span test-id="list-item-value">${Badge(value)}</span>
    <details>
      <summary>
        Details
      </summary>
      <dl>
        ${DetailsItem('key', key)}
        ${DetailsItem('description', description)}
        ${DetailsItem('id', id)}
        ${DetailsItem('applicationId', applicationId)}
      </dl>
    </details>
  </li>
 `;

export const SingleItem = ({
  key,
  expectedValue,
  actualValue,
}: {
  key: string;
  expectedValue: boolean;
  actualValue: boolean;
}) => `
  <tr>
    <td>${key}</td>
    <td test-id="${key}-expectedValue">${Badge(expectedValue)}</td>
    <td test-id="${key}-actualValue">${Badge(actualValue)}</td>
  </tr>
`;
