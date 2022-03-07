import { useHasFeature } from "@usebool/sdk-react";
import { Badge } from './Badge';

export const SingleFeatures = () => {
    const featureOne = useHasFeature('E2E_ENABLED');
    const featureTwo = useHasFeature('E2E_DISABLED');
    const featureThree = useHasFeature('NONEXISTENT_FEATURE');

    return (
        <>
            <tr>
                <td>{featureOne.key}</td>
                <td><Badge value={true}/></td>
                <td><Badge value={featureOne.value}/></td>
            </tr>
            <tr>
                <td>{featureTwo.key}</td>
                <td><Badge value={false}/></td>
                <td><Badge value={featureTwo.value}/></td>
            </tr>
            <tr>
                <td>NONEXISTENT_FEATURE</td>
                <td><Badge value={false}/></td>
                <td><Badge value={featureThree.value}/></td>
            </tr>
        </>
    );
}