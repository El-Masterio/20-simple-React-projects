import { createContext, useEffect, useState } from 'react';
import fetureFlagsDataServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await fetureFlagsDataServiceCall();

      if (response) {
        setEnabledFlags(response);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
      throw new Error(e); // this will throw an error on the browser screen
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

/* if we wanted to use this feature flag globaly then will we have to wrap the main App with the feature flag to be applied to all other components */
