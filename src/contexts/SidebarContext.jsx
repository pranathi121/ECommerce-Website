import React, { useState,createContext } from 'react'

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    // sidebar state

    const [isOpen, setIsOpen] = useState(false)
    const [cost, setCost] = useState(0);//total cost
    //sidebar open cart symbol
    // const handleOpen = () => {
    //     setBagOpen(true);
    // };
    //side bar close arrowforeward 
    const handleClose = () => {
        setIsOpen(false);
    };
    
    return (
        <SidebarContext.Provider 
        value = {{isOpen,
                  setIsOpen,
                  handleClose,            
                  cost,
                  setCost,
                 }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider
