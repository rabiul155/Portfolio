import React from 'react';
import ContuctMe from '../ContuctMe/ContuctMe';
import Home from '../Home/Home';
import MyProject from '../MyProject/MyProject';
import MySkill from '../MySkill/MySkill';

const Window = () => {
    return (
        <div>
            <Home></Home>
            <MySkill></MySkill>
            <MyProject></MyProject>
            <ContuctMe></ContuctMe>
        </div>
    );
};

export default Window;