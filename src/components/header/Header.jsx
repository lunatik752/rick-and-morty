import React from 'react';
import style from './Header.module.scss'
import rick from './../../assets/icons/rick_96136.svg'
import morty from './../../assets/icons/morty_96215.svg'
import {Icon} from "./Icon";
import LinearProgress from "@material-ui/core/LinearProgress";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Icon icon={rick} name={'Rick'}/>
                <div className={style.title}>
                    <h1>Rick & Morty</h1>
                </div>
                <Icon icon={morty} name={'Morty'}/>
            </div>
            <div  className={style.loader}>
                {props.initialized && <LinearProgress color='secondary'/>}
            </div>
        </div>
    );
}

export default Header;


