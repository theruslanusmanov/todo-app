import React from 'react';
import {ReactComponent as FavoriteBorderIcon} from '../../assets/svg/favorite_border-24px.svg'
import {ReactComponent as AccessTimeIcon} from '../../assets/svg/access_time-24px.svg'
import {ReactComponent as EastIcon} from '../../assets/svg/east-24px.svg'
import './Task.scss';

export const Task = () => (
    <div className="wrapper">
        <input type="text" placeholder="New..." className="input__new" routerLink="new"/>
        <section>
            <div className="section-title">Today</div>
            <div className="item">
                <div className="text">Homework</div>
                <div className="buttons">
                    <FavoriteBorderIcon />
                    <AccessTimeIcon />
                </div>
            </div>
        </section>
        <section>
            <div className="section-title">Soon</div>
            <div className="item">
                <div className="text">Homework</div>
                <div className="buttons">
                    <FavoriteBorderIcon />
                    <AccessTimeIcon />
                </div>
            </div>
            <div className="item item--activated">
                <div className="text">2 days remaining...</div>
                <div className="buttons">
                    <EastIcon />
                </div>
            </div>
        </section>
        <section>
            <div className="section-title">Favourites</div>
            <div className="item">
                <div className="text">Homework</div>
                <div className="buttons">
                    <FavoriteBorderIcon />
                    <AccessTimeIcon />
                </div>
            </div>
        </section>
    </div>
);