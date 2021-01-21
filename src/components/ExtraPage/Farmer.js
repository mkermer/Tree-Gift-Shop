import React from 'react';
import FarmerContact from './FarmerContact';
// import FarmerFilter from './FarmerFilter'
import FarmerHowTo from './FarmerHowTo';

function Farmer(){
    return(
        <div>

        <h1> Do you want to become a Farmer? </h1>
        <FarmerHowTo />
        <p> Please select a country to see what kind of trees you could plant in your area to help us:</p>
        {/* <FarmerFilter /> */}
        <p> Select a Tree:</p>
        <FarmerContact />

        </div>

    );
}

export default Farmer;