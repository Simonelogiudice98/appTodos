import { ISVGIconProps } from "./ISVGIconProps";
import React from 'react';

export default function LensIcon(props:ISVGIconProps):JSX.Element{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24.906" height="25" viewBox="0 0 24.906 25">
      <g id="loupe_2_" data-name="loupe (2)" transform="translate(-0.96)">
        <g id="Raggruppa_486" data-name="Raggruppa 486" transform="translate(0.96)">
          <path id="Tracciato_727" data-name="Tracciato 727" d="M25.025,19.7,20.91,15.586A11.351,11.351,0,0,0,22.157,10.6a10.6,10.6,0,1,0-10.6,10.6,11.351,11.351,0,0,0,4.988-1.247l4.115,4.115a3.013,3.013,0,0,0,4.364,0A3.249,3.249,0,0,0,25.025,19.7Zm-13.466-1a8.1,8.1,0,1,1,8.1-8.1A8.089,8.089,0,0,1,11.559,18.7Z" transform="translate(-0.96)" fill={props.color}/>
        </g>
      </g>
    </svg>
  );
}