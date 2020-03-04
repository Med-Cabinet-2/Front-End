import React, { useEffect, useState } from "react";
import axios from "axios";
import {T} from '../App'
import Searching from './Search'


export default function SearchPage() {

  return(
    <div>
      <T.H1>Search</T.H1>
      <Searching/>
    </div>
  )
}