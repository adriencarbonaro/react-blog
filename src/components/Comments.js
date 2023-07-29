import React, {
    useEffect,
    useState
}                             from 'react';
import {
    collection,
    addDoc,
    getDocs,
    Timestamp
}                             from 'firebase/firestore';

/* CSS */
import '../css/Comments.css';

const LOCALE                  = "fr";
const COL_COMMENTS            = "comments";
const PLACEHOLDER_NAME        = "🎫 Votre nom";
const PLACEHOLDER_EMAIL       = "📧 Votre email";
const PLACEHOLDER_TEXT        = "✒️ Votre commentaire";
const MAX_LENGTH              = 160;
const EMPTY_STR               = "";
const SUBMIT_TEXT             = "✉️ Envoyer";

function FormTextArea (props) {
    function makeTextArea () {
        return <textarea
            onChange={props.onChange}
            className={`comment-form-info comment-form-${props.name} ${props.wrong}`}
            placeholder={props.placeholder}
            value={props.text}
            maxLength={MAX_LENGTH} />
    }

    return (<>{makeTextArea()}</>);
}

function FormInput (props) {
    function makeInput () {
        return <input
            type={props.type}
            onChange={props.onChange}
            className={`comment-form-info comment-form-${props.name} ${props.wrong}`}
            placeholder={props.placeholder}
            value={props.text}
            maxLength={MAX_LENGTH} />
    }

    return (<>{makeInput()}</>);
}

export default function Comments (props) {
    const [ comments, setComments ]     = useState([]);
    const [ name, setName ]             = useState({ value: EMPTY_STR, wrong: false });
    const [ email, setEmail ]           = useState({ value: EMPTY_STR, wrong: false });
    const [ text, setText ]             = useState({ value: EMPTY_STR, wrong: false });

    function fetchComments () {
        getDocs(collection(props.db, COL_COMMENTS))
        .then(res => {
          const comments_docs = res.docs
          .map(r => r.data())
          .filter(d => d.article_key === props.article_key)
          .sort((a,b) => b.date.seconds - a.date.seconds);
          setComments([ ...comments_docs ]);
        })
        .catch(err => { console.log(err); });
    }

    function sendComment () {
        addDoc(collection(props.db, COL_COMMENTS), {
          name: name.value,
          email: email.value,
          text: text.value,
          article_key: props.article_key,
          replies: [],
          date: new Timestamp(Date.now() / 1000, 0)
        })
        .then(onCommentSent)
        .catch(err => { console.log(err); });
    }

    useEffect(fetchComments, []);

    function onCommentSent (res) {
        clearForm();
        fetchComments();
    }

    function onNameChange (evt) {
        setName({ value: evt.target.value, wrong: evt.target.value === EMPTY_STR });
    }

    function onEmailChange (evt) {
        setEmail({ value: evt.target.value, wrong: evt.target.value === EMPTY_STR });
    }

    function onTextChange (evt) {
        setText({ value: evt.target.value, wrong: evt.target.value === EMPTY_STR });
    }

    function isEmpty () {
        return (
          name.value === EMPTY_STR ||
          email.value === EMPTY_STR ||
          text.value === EMPTY_STR
        );
    }

    function onBtnClick (evt) {
        if (isEmpty()) return;
        sendComment();
    }

    function clearForm () {
        setName({ value: EMPTY_STR, wrong: false });
        setEmail({ value: EMPTY_STR, wrong: false });
        setText({ value: EMPTY_STR, wrong: false });
    }

    function formatDate (timestamp) {
        const date = timestamp.toDate();
        const date_options = {
          day                 : "numeric",
          year                : "numeric",
          month               : "short",
        };
        const time_options = {
          hour12              : false,
          hour                : "2-digit",
          minute              : "2-digit",
        };
        const date_str = date.toLocaleString(LOCALE, date_options);
        const time_str = date.toLocaleString(LOCALE, time_options);
        return `${date_str} à ${time_str}`;
    }

    function makeComment () {
        const comments_elem = comments.map(comment => {
            return (
                <div className="comment">
                    <div className="comment-text-area">
                        <div className="comment-text-elem comment-text-symbol">
                            <svg width="15.315125mm" height="9.8441629mm" viewBox="0 0 15.315125 9.8441629" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg">
                                <g id="layer1" transform="translate(-48.659172,-111.80143)">
                                    <path style={{fill:"#d2dee4",fillOpacity:1,strokeWidth:"0.170479"}} d="m 49.83991,121.39599 c 0,-0.16294 0.19332,-0.44832 0.42961,-0.63418 0.46521,-0.36593 0.93422,-1.15638 0.93422,-1.57448 0,-0.1434 -0.28768,-0.40824 -0.6393,-0.58855 -1.80054,-0.92333 -2.40566,-2.89529 -1.46666,-4.77962 0.7655,-1.53617 2.50294,-2.33308 4.13087,-1.89472 0.94154,0.25352 1.97367,1.19997 2.33208,2.13848 0.39859,1.04366 0.28138,2.7979 -0.26185,3.91913 -0.82646,1.70585 -3.04,3.38574 -4.7664,3.6173 -0.57972,0.0778 -0.69257,0.0446 -0.69257,-0.20336 z m 8.13357,0.0275 c -0.063,-0.16428 0.0575,-0.36542 0.32356,-0.53972 0.49083,-0.32161 1.08813,-1.2333 1.08905,-1.66231 3.5e-4,-0.16917 -0.27189,-0.43462 -0.63866,-0.6227 -1.78595,-0.91584 -2.40501,-2.89659 -1.48335,-4.74612 1.08475,-2.17681 3.76935,-2.72783 5.53193,-1.13545 0.90126,0.81423 1.25073,1.78916 1.16599,3.25276 -0.085,1.46805 -0.60759,2.57845 -1.75393,3.72682 -1.36393,1.36633 -3.96576,2.42727 -4.23459,1.72672 z" id="path6101"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="comment-text-elem comment-text">{comment.text}</div>
                    </div>
                    <div className="comment-author-area">
                        <div className="comment-author-elem comment-author-symbol">
                            <svg width="15.315125mm" height="9.8441629mm" viewBox="0 0 15.315125 9.8441629" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg" style={{transform: "rotate(180deg)"}}>
                                <g id="layer1" transform="translate(-48.659172,-111.80143)">
                                    <path style={{fill:"#d2dee4",fillOpacity:1,strokeWidth:"0.170479"}} d="m 49.83991,121.39599 c 0,-0.16294 0.19332,-0.44832 0.42961,-0.63418 0.46521,-0.36593 0.93422,-1.15638 0.93422,-1.57448 0,-0.1434 -0.28768,-0.40824 -0.6393,-0.58855 -1.80054,-0.92333 -2.40566,-2.89529 -1.46666,-4.77962 0.7655,-1.53617 2.50294,-2.33308 4.13087,-1.89472 0.94154,0.25352 1.97367,1.19997 2.33208,2.13848 0.39859,1.04366 0.28138,2.7979 -0.26185,3.91913 -0.82646,1.70585 -3.04,3.38574 -4.7664,3.6173 -0.57972,0.0778 -0.69257,0.0446 -0.69257,-0.20336 z m 8.13357,0.0275 c -0.063,-0.16428 0.0575,-0.36542 0.32356,-0.53972 0.49083,-0.32161 1.08813,-1.2333 1.08905,-1.66231 3.5e-4,-0.16917 -0.27189,-0.43462 -0.63866,-0.6227 -1.78595,-0.91584 -2.40501,-2.89659 -1.48335,-4.74612 1.08475,-2.17681 3.76935,-2.72783 5.53193,-1.13545 0.90126,0.81423 1.25073,1.78916 1.16599,3.25276 -0.085,1.46805 -0.60759,2.57845 -1.75393,3.72682 -1.36393,1.36633 -3.96576,2.42727 -4.23459,1.72672 z" id="path6101"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="comment-author-elem comment-author-text">
                            <span className="comment-author-name">{comment.name}</span>,<span className="comment-author-date"> le {formatDate(comment.date)}</span>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <>
            <div className="comments-container">
                <div className="comments-header">
                    <span className="comments-header-text">Vous avez aimé l'article ?</span>
                    <span className="comments-header-emphasis">Dites-le nous !</span>
                </div>
                {comments_elem}
                <div className="comment-form">
                    <div className="comment-form-elem">
                        <FormInput onChange={onNameChange} type="text" name="name" placeholder={PLACEHOLDER_NAME} text={name.value} wrong={name.wrong ? "wrong" : EMPTY_STR}/>
                        <FormInput onChange={onEmailChange} type="email" name="email" placeholder={PLACEHOLDER_EMAIL} text={email.value} wrong={email.wrong ? "wrong" : EMPTY_STR}/>
                    </div>
                    <div className="comment-form-elem">
                        <FormTextArea onChange={onTextChange} name="text" placeholder={PLACEHOLDER_TEXT} text={text.value} wrong={text.wrong ? "wrong" : EMPTY_STR}/>
                    </div>
                    <div className="comment-form-elem">
                        <button onClick={onBtnClick} className="comment-form-btn-submit">{SUBMIT_TEXT}</button>
                    </div>
                </div>
            </div>
            </>
        );
    }

    return (
        <>{makeComment()}</>
    )
}
