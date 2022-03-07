import { useGetFeatures } from "@usebool/sdk-react";
import { Badge } from './Badge';

const ItemDetails = ({ featureKey, value}) => {
    return (
        <>
            <dt>{featureKey}</dt>
            <dd>{value}</dd>
        </>
    );
}

const Item = ({ feature }) => {
    return (
        <li className="list-item">
            <strong>{feature.name}</strong>
            <span><Badge value={feature.value} /></span>
            <details>
            <summary>
                Details
            </summary>
            <dl>
                <ItemDetails featureKey="key" value={feature.key} />
                <ItemDetails featureKey="description" value={feature.description} />
                <ItemDetails featureKey="id" value={feature.id} />
                <ItemDetails featureKey="applicationId" value={feature.applicationId} />
            </dl>
            </details>
        </li>
    );
}

export const FeatureList = () => {
    const features = useGetFeatures();

    return (
        <ul id="list">
            {features.map((feature) => (<Item key={feature.key} feature={feature} />))}
        </ul>
    );
}