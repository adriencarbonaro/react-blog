import ComponentScrollTop     from './ComponentScrollTop';
import Comments               from './Comments';

export default function Article (props) {
    return (
        <>
        <ComponentScrollTop
          name={props.name}
          analytics={props.analytics}
          children={props.children} />
        <Comments
          db={props.db}
          article_key={props.name} />
        </>
    );
}
