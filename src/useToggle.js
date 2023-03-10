import React, { useState, useCallback } from 'react';

const useToggle = (initialState=true) => {
    const [toggleValue, setToggleValue] = useState(initialState);
  
    const toggler = () => { setToggleValue(!toggleValue) };
  
    return [toggleValue, toggler]
};

export default useToggle;