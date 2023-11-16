import React from "react";
import * as Carbon from '@carbon/pictograms-react'

const Icon = (props) => {
 const iconName = props;
 const Base = Carbon[iconName]

 return <Base />
} 

function RenderPictogram(props) {
    console.log(props)
        const iconName = props.name
        const Base = Carbon[iconName]
        return <Base />
  }

export default function Slice3CP(props) {
    return (
    <RenderPictogram name={props.name}/>

    );
  }