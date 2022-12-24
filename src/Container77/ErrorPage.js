import React from 'react'

export default function ErrorPage() {
  return (
    //This is fallback UI
    <div style={{ backgroundColor: 'green', marginTop: '30px',margingBottom:'30px', marginLeft: '50px',marginRight:'50px' }}>
        <h1>Oops... Something went wrong</h1>
        <p>Please contact admin for more information</p>
    </div>
  )
}
