import { Grid } from "@material-ui/core"
import * as React from "react"
import logo from '../images/logo.jpg'
import '../styles/global.css'


// markup
const IndexPage = () => {
  return (
    <main className='background'>
      <Grid direction='column' className='center-grid' item>
        <div className='center-grid__container'>
          <div className='center-grid__container-title'>
          </div>
          <div className='logo'>
            <img src={logo} style={{ maxHeight: '250px' }} />
            <div className='contact'>Have questions? Contact us at <a href="mailto:admin@shellharbourrv.com">here</a></div>
          </div>
        </div>
      </Grid>
    </main>
  )
}

export default IndexPage
