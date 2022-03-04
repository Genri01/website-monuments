import React from 'react';
import images from '../../assets/images';
// import ColorTable from '../ColorTable/index';
// import InfoCards from '../InfoCards/index';
// import StatusNetwork from '../StatusNetwork/index';
// import Moment from 'react-moment';
// import moment from 'moment';
// import { convertTimeBd, differentsTimeOff,getRndInteger } from '../../helpers';
// import style from './style.css';

class AboutProduct extends React.Component {

    render(){
      const {
        fill,
        // count,
        arr_temp,
        login,
      } = this.props;

      let objDiff = 0;

      // if (fill.status === 'on') {
       
          // objDiff = differentsTimeOff(moment(fill.offline_time),fill.online_time);
      
      // }

      // if (fill.status === 'off') {
        // objDiff = differentsTimeOff(convertTimeBd(fill.last_update,moment(moment().format("YYYY-MM-DD HH:mm"))));
        // if (fill.toogle_status_off === false) {
        //   objDiff = differentsTimeOff(convertTimeBd(fill.last_update,moment(moment().format("YYYY-MM-DD HH:mm"))));
        // }
        // if (fill.toogle_status_off) {
        //   objDiff = differentsTimeOff(convertTimeBd(fill.last_update,moment(moment().format("YYYY-MM-DD HH:mm"))));
        // } 21-45=====21-38
      // }

      // const objDiffAgo = differentsTimeOff(convertTimeBd(fill.last_update,moment().format("YYYY-MM-DD HH:mm")));

      const lock = images.lock;
      const mess = images.mess;

      return (
        <div className="itemWrapper" style={{backgroundColor: `rgb(241,241,241)`}}>
          <div className="rowItemRig">
            <div className="titleRig">{`sfgs_gd`}</div>
            <div className="infoRig">token <img style={{ marginTop: '5px'}} src={lock} width={14} alt="" /> {'sgv5gfv5d5dxdg'}</div>
            <div className="infoRig">owner <img style={{ marginTop: '5px'}} src={mess} width={14} alt="" /> {login}</div>
            <div className="wrapperVersion">
            <div className="table" style={{backgroundColor:'rgb(42,101,166)',userSelect: 'none'}}>Config ver: 2</div>
              <div style={{width: '10px', height: '10px'}} />
            <div className="table" style={{backgroundColor:'rgb(42,101,166)',userSelect: 'none'}}>Exe ver: 2</div>
            </div>
          </div>
          <div className="rowItemRig">
            <div className="onlineWrapper">
              {/* <StatusNetwork type={'on'} /> */}
            </div>
            <div className="statusWrapper">
              <div className="titleOnline">{'on' === 'on' ? `Online:` : `Offline`}</div>
              <div className="timeOnline">{`${objDiff.days} Days ${objDiff.hours} hours. ${objDiff.minutes} min. ${objDiff.seconds} sec. `}</div>
            </div>
            <div className="updateWrapper">
              <div className="titileUpdate">Last update: </div>
              <div className="momentWrapper">
                {/* <div className="timeUpdate">{moment(convertTimeBd(fill.last_update)).format("YYYY-MM-DD HH:mm")}</div> */}
                {/* <Moment format="YYYY-MM-DD HH:mm" className="timeUpdate" date={convertTimeBd(fill.last_update)} /> */}
                <div style={{margin: "0px 5px"}} />
                <div className="timeUpdate">{
                // `(${objDiffAgo.days !== 0 ? `${objDiffAgo.days} Days`:''} ${objDiffAgo.hours !== 0 ? `${objDiffAgo.hours} hours`:''} ${objDiffAgo.minutes} minutes ago )`
                }</div>
                {/* <Moment className="timeUpdate" fromNow>{convertTimeBd(fill.last_update)}</Moment> */}
              </div>
            </div>
          </div>
          <div className="rowItemRig">
              <div className="colorWrapper">
                {
                  [1,13,433,2].map((item,i) => (
                    <div key={i} style={{display: 'flex', flexDirection: 'row', marginBottom: '2px'}}>
                      <div
                        className="table"
                        style={{
                          backgroundColor: 'on' === 'on' ? item <= 74 ? 'rgb(83,171,83)' : (item >= 75 && item < 80) ? 'rgb(230,161,60)':'rgb(210,60,60)' : 'rgb(165,158,147)',
                          userSelect: 'none'
                          }}>
                        {'GPU'} {'on' === 'on' ? item : `?-?-?-?`} C°
                      </div>
                      <div style={{width: '10px', height: '10px'}} />
                      {/* <ColorTable status={'on'} count={'on' === 'on' ? (item+7) : `?-?-?-?`} type="FANS" /> */}
                     </div>
                  ))
                }
              </div>
          </div>
        </div>
      );
    }
}
export default AboutProduct;