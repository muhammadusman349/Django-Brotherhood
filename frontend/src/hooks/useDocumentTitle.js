import { useEffect } from 'react';

const SITE_NAME = 'Brother Sports';

export const useDocumentTitle = (pageTitle) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${SITE_NAME}`;
    } else {
      document.title = SITE_NAME;
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
};

export default useDocumentTitle;
