import React, { useEffect, useState } from "react";
import axios from "axios";
import {T} from '../App'
import Searching from './SearchFirstVersion'


export default function SearchPage() {

  return(
    <div>
      <T.H1 style={{Maxwidth:'35%'}}>Strain Search</T.H1>
      <Searching />
    </div>
  )
}