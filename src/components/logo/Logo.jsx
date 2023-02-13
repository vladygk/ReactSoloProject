
import React from 'react'

export default function Logo(props) {

  const {type = 'default'} = props;

  return (
    <>
    {type==='default' && <img src="/images/logo.svg" alt="" />}
    {type==='muted'  && <img src="/images/logo-muted.svg" alt="" />}
    </>
  )
}

