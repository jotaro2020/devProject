import React, { Component } from 'react'
import './window.css'

export default props => {
    const youHaveCoins = props.coins;
    const youNeedCoins = 15 - props.coins;
    return (
        <div className='wrapper'>
            <div className='window'>
                <div className='window__header'>Target Indicator Demo</div>
                <div className='window__main'>
                    <div className='window__main__inner-block'>
                        <h3 className='left-text'>Reached:</h3>
                        <div className='blue-line'>
                            <div className='price-moving-block'>
                                <div className='container' style={{ left: youHaveCoins * 8 }}>
                                    <h5 className='price'>{`$${youHaveCoins}`}</h5>
                                    <span className='arrow'></span>
                                </div>
                            </div>
                        </div>
                        <div className='price-static-block'>
                            <h5 className='price-static-block__text-large'>Target</h5>
                            <h3 className='price-static-block__text-small'>$15</h3>
                        </div>
                        <div className='footer'>
                            <p><i className="fa fa-info-circle" aria-hidden="true"></i>
                                {`You need ${youNeedCoins} more to reach you target`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='buttonPull' onClick={() => props.flipCoin()}><img src='https://image.flaticon.com/icons/svg/218/218156.svg' />PULL!</button>
        </div>
    )
}