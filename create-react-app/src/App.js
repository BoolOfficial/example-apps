import { FeatureFlagProvider } from '@usebool/sdk-react';
import { FeatureList } from './FeatureList';
import { SingleFeatures } from './SingleFeatures';
import './App.css';

const APP_ID = 'fa41ca19-2fc0-4bc5-92ee-326b8ade7350';

function App() {
  return (
    <FeatureFlagProvider applicationId={APP_ID}>
      <div id="app">
        <h1>Feature flags!</h1>
        <main>
          <article>
            <p>Below is a list of features, enabled or disabled.</p>
            <FeatureList />
          </article>

          <article>
            <p>Below we fetch singular features by their keys.</p>

            <table>
              <thead>
                <tr>
                  <th>Key</th>
                  <th className="align-right">Expected</th>
                  <th className="align-right">Actual</th>
                </tr>
              </thead>
              <tbody id="tbody">
                <SingleFeatures />
              </tbody>
            </table>
          </article>
        </main>
    </div>
    </FeatureFlagProvider>
  );
}

export default App;
