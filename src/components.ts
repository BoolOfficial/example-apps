import { FeatureFlag } from './types';

export const Badge = (value: FeatureFlag['value']) => {
  const text = value ? 'Enabled' : 'Disabled';
  const cn = value ? 'badge__enabled' : 'badge__disabled';

  return `<small class="${cn}">${text}</small>`;
};

export const ListItem = ({ name, value, key }: FeatureFlag) => `
  <li class="list-item">
    ${name}
    ${Badge(value)}
    <em class="list-item-key">${key}</em>
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
    <td>${Badge(expectedValue)}</td>
    <td>${Badge(actualValue)}</td>
  </tr>
`;
