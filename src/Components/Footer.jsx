import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
class Footer extends Component {
  render() {
    return (
      <div>
        <BottomNavigation class="footerstyle">
          <div class="row col-sm-12">
            <div class="col-sm-3"></div>

            <div class="col-sm-3 pt-4">
              <img src="/images/image21.png" alt="" />
              <div style={{ color: "white", fontSize: "14px" }}>
                Since 2012 Covenant Wealth Financial Services has been providing
                holistic financial planning advice to families, independent
                contractors as well as business owners.
              </div>
            </div>

            <div class="col-sm-2 pt-4   ">
              <h6
                style={{
                  color: "#E0A329",
                  fontSize: "20px",
                }}
              >
                SERVICES
              </h6>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#FFFFFF",
                    
                  }}
                >
                  INDIVIDUAL & FAMILY
                </p>
                <ul>
                  <div style={{ color: "white" }}>
                    <li>Insurance</li>
                    <li>Wealth</li>
                    <li>Cashflow</li>
                  </div>
                </ul>
              </div>
            </div>

            <div class="col-sm-2 pt-4">
              <h6
                style={{
                  color: "#E0A329",
                  fontSize: "20px",
                }}
              >
                STAY CONNECTED
              </h6>
              <FacebookIcon /> <InstagramIcon /> <LinkedInIcon />{" "}
              <TwitterIcon /> <YouTubeIcon />
              <div class="pt-2">
                <button type="button" class="btn btn-primary ">
                  Get a Quote
                </button>
                <div class="pt-4">
                <img src="/images/image22.png" alt="image22" />
                </div>
                <div style={{display:'flex', paddingBottom:"20px"}}>
                <img class="pt-3" src="/images/image23.png" alt="image22" />
                <img class="pt-3 pl-3" src="/images/image24.png" alt="image22" />
                </div>
              </div>
            </div>

            <div class="col-sm-2"> </div>
          </div>
        </BottomNavigation>
      </div>
    );
  }
}

export default Footer;
