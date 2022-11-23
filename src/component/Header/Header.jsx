import React from 'react'

export default function Header() {
  return (
<>
<div className="container text-center my-5">
  <h4>Sarahah allows you to receive constructive feedback from your friends and co-workers</h4>
  <div className="buttons d-flex justify-content-center align-items-center  flex-column">
    <a href="login.html" className="btn btn-default-outline my-4"><i className="fas fa-user" /> Login</a>
    <a href="register.html" className="btn btn-default-outline"><i className="far fa-edit" /> Register</a>
  </div>
</div>

</>
  )
}
