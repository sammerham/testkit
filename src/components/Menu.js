import React from 'react'
import { AhiButton, AhiInput, AhiMenu, AhiMenuItem, AhiDivider } from "@azaleahealth/azalea-kit-ui/dist/react";
const Menu = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
    <AhiMenu>
      <AhiMenuItem value="undo">Undo</AhiMenuItem>
      <AhiMenuItem value="redo">Redo</AhiMenuItem>
      <AhiDivider></AhiDivider>
      <AhiMenuItem value="cut">Cut</AhiMenuItem>
      <AhiMenuItem value="copy">Copy</AhiMenuItem>
      <AhiMenuItem value="paste">Paste</AhiMenuItem>
      <AhiMenuItem value="delete">Delete</AhiMenuItem>
    </AhiMenu>
  </div>
  )
}

export default Menu