import { useHasFeature } from '@usebool/sdk-react';
import { Badge } from './Badge';

export const SingleFeatures = () => {
  const featureOne = useHasFeature('E2E_ENABLED');
  const featureTwo = useHasFeature('E2E_DISABLED');
  const featureThree = useHasFeature('NONEXISTENT_FEATURE');

  return (
    <>
      <tr>
        <td>E2E_ENABLED</td>
        <td>
          <Badge value={true} />
        </td>
        <td>
          <Badge value={featureOne} />
        </td>
      </tr>
      <tr>
        <td>E2E_DISABLED</td>
        <td>
          <Badge value={false} />
        </td>
        <td>
          <Badge value={featureTwo} />
        </td>
      </tr>
      <tr>
        <td>NONEXISTENT_FEATURE</td>
        <td>
          <Badge value={false} />
        </td>
        <td>
          <Badge value={featureThree} />
        </td>
      </tr>
    </>
  );
};
