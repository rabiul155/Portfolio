import React from 'react';
import ContuctMe from '../ContuctMe/ContuctMe';

import Education from '../Education/Education';
import Home from '../Home/Home';
import MyProject from '../MyProject/MyProject';
import MySkill from '../MySkill/MySkill';

const Window = () => {
    return (
        <div>
            <Home></Home>
            <MySkill></MySkill>
            <MyProject></MyProject>
            <Education></Education>
            <ContuctMe></ContuctMe>
        </div>
    );
};

export default Window;