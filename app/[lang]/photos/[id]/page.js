import React from "react";
import PhotoDetails from "./../../../../components/PhotoDetails";

export default function PhotoDetailsPage({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
