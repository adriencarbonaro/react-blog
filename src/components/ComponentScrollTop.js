import { useEffect } from 'react';
import ComponentAnalylitics   from './ComponentAnalytics';

export default function ComponentScrollTop (props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ComponentAnalylitics
          name={props.name}
          analytics={props.analytics}
          children={props.children} />
    );
}
