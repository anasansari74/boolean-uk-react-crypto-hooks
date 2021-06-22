import { useEffect, useState } from "react";
import { CRIPTO_LIST } from "../constants";

export default function useEffectForCryptoList(){
    const [cryptoList, setCryptoList] = useState([]);
    
    useEffect(() => {
        fetch(CRIPTO_LIST)
          .then((resp) => resp.json())
          .then(setCryptoList);
      }, [setCryptoList]);

    return [cryptoList, setCryptoList]
}