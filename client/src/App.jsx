import React from "react";
import AuthProviderWrapper from "./Context/AuthProviderWrapper";
import AppRoutes from "./Routes/AppRoutes";
import NetworkStatusComponent from "./BoundaryComponents/Network/NetworkStatusComponent";
import ErrorBoundaryComponent from "./BoundaryComponents/Error/ErrorBoundaryComponent";
import ErrorUI from "./BoundaryComponents/Error/ErrorUI";

const App = () => {
  return (
    <>
      {/* Wrapping the application with NetworkStatusComponent to handle network status */}
      {/* Wrapping the application with ErrorBoundaryComponent to catch errors */}
      {/* Wrapping the application with AuthProviderWrapper to provide authentication context */}
      {/* AppRoutes contains all the routes for the application */} 
      <NetworkStatusComponent>
        <ErrorBoundaryComponent fallback={<ErrorUI />} >
          <AuthProviderWrapper>
            <AppRoutes />
          </AuthProviderWrapper>
        </ErrorBoundaryComponent>
      </NetworkStatusComponent>
    </>
  );
};

export default App;
