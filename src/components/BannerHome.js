import React                  from 'react';
import { Button }             from './Button';

/* Assets */
import { Strings }            from '../assets/Strings';
import { Banner }             from './Banner';

/* CSS */
import '../css/App.css';
import '../css/Banner.css';
import '../css/BannerHome.css';

export default function BannerHome(props) {
    return (
        <Banner
          colorKey="home"
          title={props.title}
          back={
            <>
                <video className='banner-elem banner-hero-video' src={`https://nid-de-poule.s3.eu-west-3.amazonaws.com/videos/${props.video}.mp4`} type="video/mp4" autoPlay loop muted />
            </>
          }
          extra={
            <>
                <div className='banner-hero-desc'>{Strings.banner_msg}</div>
                <div className='banner-hero-btns'>
                    <Button
                      className='btns'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                      link='/auvergne'
                    > {Strings.banner_btn} </Button>
                </div>
            </>
          }
        />
    );
}
