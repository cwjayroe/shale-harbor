import { Grid } from "@material-ui/core"
import * as React from "react"
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

// styles
const title = {
  color: "#232129",
  fontSize: "50px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center"
}

const page = {
  textAlign: 'center'
}

const img = {
  maxWidth: '100%',
  maxHeight: '1000px'
}

const titleBanner = {
  maxHeight: '1000px',
  minHeight: '600px',
  marginTop: '300px'
}

// markup
const IndexPage = () => {
  return (
    <main>
      <Grid direction='column' style={page} item>
        <div>
          <div style={titleBanner}>
            <div style={{marginTop: 'auto'}}>
              <div style={title}>
                Shell Harbour
              </div>
              <div>
                Coming Soon!
              </div>
              <div>
                Have questions? Contact us at <a href="mailto:admin@shellharbourrv.com">here</a>
              </div>
            </div>
          </div>
          <div>
            <img src={img1} style={img} />
          </div>
          <div>
            <img src={img2} style={img} />
          </div>
          <div>
            <img src={img3} style={img} />
          </div>
          <div>
            <img src={img4} style={img} />
          </div>
        </div>
      </Grid>
    </main>
  )
}

export default IndexPage
