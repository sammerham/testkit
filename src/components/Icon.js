import React from "react";
import { AhiIcon } from "@azaleahealth/azalea-kit-ui/dist/react";
import { AzaleaIcons } from "@azaleahealth/azalea-kit-ui";
import { userIcon } from "@azaleahealth/azalea-kit-ui";
import { settingsIcon } from "@azaleahealth/azalea-kit-ui";

const Icon = () => {
  AzaleaIcons.addIcons(userIcon, settingsIcon);

  return (
    <>
      <AhiIcon name="user" />
      <AhiIcon name="settings" />
    </>
  );
};

export default Icon;