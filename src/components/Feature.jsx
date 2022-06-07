import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'

const Feature = () => {
  return (
    <div>
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage} title='Telemedicine' />
                <FeatureBox image={featureimage1} title='Online Pharmacy' />
                <FeatureBox image={featureimage2} title='Electronic Health Record' />
            </div>
        </div>
    </div>
  )
}

export default Feature