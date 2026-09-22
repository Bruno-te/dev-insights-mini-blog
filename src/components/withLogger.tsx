import { useEffect } from 'react';

function withLogger<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  const ComponentWithLogger: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`[withLogger] ${componentName} mounted`);
      return () => {
        console.log(`[withLogger] ${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  ComponentWithLogger.displayName = `WithLogger(${componentName})`;

  return ComponentWithLogger;
}

export default withLogger;