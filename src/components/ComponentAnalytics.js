import { useEffect }          from 'react';
import { logEvent }           from 'firebase/analytics';

export default function ComponentAnalytics (props) {
    useEffect(() => {
        logEvent(props.analytics, 't_' + props.name);
    });

    return (
        <>
            {props.children}
        </>
    );
}
