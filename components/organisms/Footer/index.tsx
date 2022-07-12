import Image from 'next/image'
import FooterItem from './FooterItem'
import FooterTitle from './FooterTitle'

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterTitle title="Company" />
                  <ul className="list-unstyled">
                    <FooterItem text="About Us" />
                    <FooterItem text="Press Release" />
                    <FooterItem text="About Us" />
                    <FooterItem text="Terms of Use" />
                    <FooterItem text="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterTitle title="Support" />
                  <ul className="list-unstyled">
                    <FooterItem text="Refund Policy" />
                    <FooterItem text="Unlock Rewards" />
                    <FooterItem text="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <FooterTitle title="Connect" />
                  <ul className="list-unstyled">
                    <FooterItem text="hi@store.gg" href="mailto: hi@store.gg" />
                    <FooterItem
                      text="team@store.gg"
                      href="mailto: team@store.gg"
                    />
                    <FooterItem
                      text="Pasific 12, Jakarta Selatan"
                      href="http://maps.google.com/?q=Pasific 12,
                                    Jakarta Selatan"
                    />
                    <FooterItem
                      text="021 - 1122 - 9090"
                      href="tel: 02111229090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
