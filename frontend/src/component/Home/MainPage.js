import React from "react";
import Footer from "../layout/Footer/Footer";
import Ads from "./Ads/Ads";
import AdsFour from "./AdsFour/AdsFour";
import AdsOne from "./AdsOnes/AdsOne";

import "./mainpage.css";
import VariableWidth from "./Carsouel/VariableWidth";

const MainPage = () => {
  return (
    <div>
      {" "}
      <div className="mainpage" id="mainpage" style={{ zIndex: "-1" }}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://ik.imagekit.io/amazon98670/imagess/carsoule/71eBXpqwYXL._SX3000__4BSP5Y_0f.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647956632374"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://ik.imagekit.io/amazon98670/imagess/carsoule/carsouel__3__M2AzIDf3E.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412358536"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://ik.imagekit.io/amazon98670/imagess/carsoule/carsouel__4__6HMtKCRBkQya.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412358978"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://ik.imagekit.io/amazon98670/imagess/carsoule/carsouel__2__lbmLtBFb6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412358187"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="      https://ik.imagekit.io/amazon98670/imagess/carsoule/71atWh8oOnL._SX3000__PykbK4Kjja.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647956606301"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="   https://ik.imagekit.io/amazon98670/imagess/carsoule/61a2e7cIV8L._SX3000____bJxNqcs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648292464226"
                class="d-block w-100 maskimg"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            style={{ height: "240px" }}
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            style={{ height: "240px" }}
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row" style={{ marginBottom: "-366px" }}>
          <div
            className="divwithbox "
            style={{ display: "flex", flexWrap: "wrap", padding: "0 0 0 2vw" }}
          >
            <AdsFour
              heading="Top trending this summer"
              subh="AC | Best Seller"
              subhh="AC New Launch"
              subhhh="Refrigerator Best Seller"
              subhhhh="Refrigerator | Discount Coupon upto 20% off"
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/four__8__v5tdy8ERL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412294697"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__11__cY7u9yPUy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412295601"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__1__wbh6oPh9G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412292133"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__5__7-d4Ue0I5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412293876"
              link="https://www.amazon.in/b?node=27959568031&pf_rd_r=ZM6AVB0TE8T3DW7SMA5F&pf_rd_p=6c7fd5c5-cdbc-4c83-87dd-733278c3004f&pd_rd_r=74ae0edb-d4ef-4e14-928f-894dcf98f878&pd_rd_w=0OBB3&pd_rd_wg=P1OhA&ref_=pd_gw_unk"
              linkk=""
              linkkk="https://www.amazon.in/l/27954298031?pf_rd_r=ZM6AVB0TE8T3DW7SMA5F&pf_rd_p=6c7fd5c5-cdbc-4c83-87dd-733278c3004f&pd_rd_r=74ae0edb-d4ef-4e14-928f-894dcf98f878&pd_rd_w=0OBB3&pd_rd_wg=P1OhA&ref_=pd_gw_unk"
              linkkkk=""
            />
            <AdsFour
              heading="Revamp your home in style"
              subh="Lighting Solution"
              subhh="Home Decoration"
              subhhh="Home Storage"
              subhhhh="Bedsheet Curtains & more"
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/372x232_4_Low._SY116_CB670263840__2gA6uSGYQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647695313344"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/372x232_3_Low._SY116_CB670263840__aiMIV3x-z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647695313091"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/372x232_1_Low._SY116_CB670263840__gy8bVpTD1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647695312730"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/372x232_2_Low._SY116_CB670263840__mgGNC4s1e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647695312855"
            />

            <AdsFour
              heading="Automotive essentials | Up to 60% off"
              subh="Cleaning accessiors"
              subhh="Tyre & rim job"
              subhhh="Helmet "
              subhhhh="Vaccum Cleaner "
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/four__34__035lN7gc0TNX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412290039"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__36__ZPCSyws-V.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412290658"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__39__NdiPywz2s.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412291972"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__38__HaQX4U1KkUt9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412291408"
            />

            <Ads />
            <AdsFour
              heading="   Styles for Men | Up to 70% off + Extra 10% cashback"
              subh="Clothing"
              subhh="Footwear"
              subhhh="Watches "
              subhhhh="Bag & Luggage "
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/four__4__c-AYlArDo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412293299"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__7__8N7ZEyf7uPyz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412294368"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__13__BpoVkbr5A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412296210"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__10__2t5II2Vewb4av.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412295221"
              link="https://www.amazon.in/Samsung-Galaxy-M12-Storage-Processor/dp/B08XJGNQS7/ref=sr_1_1_sspa?crid=INKXG7781HUI&keywords=mobile&qid=1648273569&sprefix=mo%2Caps%2C495&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWU9aOFc4RDVBVU9RJmVuY3J5cHRlZElkPUEwNzA1NTM2MzVESzBCRlhMRFJFVyZlbmNyeXB0ZWRBZElkPUEwOTg5NDY3TEZKTzhVS0E0WEQyJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
            />

            <AdsFour
              heading="Shop by Category"
              subh="Fresh"
              subhh="Mobiles"
              subhhh="Fashion "
              subhhhh="Electronics "
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/Fresh._SY116_CB431401553__28fSuGJWX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647696083991"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/Mobile._SY116_CB431401553__WHID0GYP7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647696084229"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/Fashion._SY116_CB431401553__okS9voL_h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647696083736"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/Electronic._SY116_CB431401553___qnSVxM9X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647696083606"
            />
            <AdsFour
              heading="GamesBest Sellers in Toys & Games
              "
              subh="sd"
              subhh="sd"
              subhhh="sdf "
              subhhhh="sdf "
              img="https://ik.imagekit.io/amazon98670/imagess/twopack/71ML2TRKAUL._AC_SY170__FAC8ptEgL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647696349027"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__14__Esd1ctZ9Jdgi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412296596"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__15__ERWx63xnT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412296626"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack/four__16__RsinRyauA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412296936"
            />
            <AdsOne
              heading={"Up to 50% off | Photography essentials"}
              img="https://ik.imagekit.io/amazon98670/imagess/one__1__nKyvCuNWZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647412196184"
              link="product/623f0104801a2633d395d528"
            />
          </div>
        </div>

        <VariableWidth
          heading="Today's Deal"
          size={6}
          img="https://ik.imagekit.io/amazon98670/imagess/slider/slider__24__eJ2JG1uPS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703301084"
          imgg="https://ik.imagekit.io/amazon98670/imagess/slider/71ZanygHKsL._AC_SY200__TFCn1crDdm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703299222"
          imggg="https://ik.imagekit.io/amazon98670/imagess/slider/51rAlxBiIUL._AC_SY200__dP8RhLZ-K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703297531"
          imgggg="https://ik.imagekit.io/amazon98670/imagess/slider/61gz6yarchL._AC_SY200__asuZ5I5zG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703298751"
          imggggg="https://ik.imagekit.io/amazon98670/imagess/slider/slider__5__uRJZ9rcE8EtW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411827702"
          imgggggg="https://ik.imagekit.io/amazon98670/imagess/slider/slider__29__sAIhaFa6h.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411827034"
          img7="https://ik.imagekit.io/amazon98670/imagess/slider/slider__8__uZ-fMykmeczV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411829011"
          img8="https://ik.imagekit.io/amazon98670/imagess/slider/41sUUaKOVhL._AC_SY200__VmtqILcMA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703296227"
          img9="https://ik.imagekit.io/amazon98670/imagess/slider/slider__6__3_8vE6EcJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411828152"
          img10="https://ik.imagekit.io/amazon98670/imagess/slider/slider__3__iPGFRcHYO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411827315"
          img11="https://ik.imagekit.io/amazon98670/imagess/slider/slider__4__l9-hKmaf3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647411827568"
          img12="https://ik.imagekit.io/amazon98670/imagess/slider/51gAnhXIKFL._AC_SY200__cc-ndA6yX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647703296855"
        />
        <VariableWidth
          heading="Up to 60% off | Tropical hues home furnishing from local shops"
          size={7}
          img="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/71FchDcv8GL._AC_SY200__HEwAUmcIT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758626051"
          imgg="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/51YfQbmCxkL._AC_SY200___1__KRT6kxHR8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758626598"
          imggg="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/51dd76UaaoL._AC_SY200___1__gnctqnNnx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758626304"
          imgggg="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/81617E_QgSS._AC_SY200__oEK2et-fW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758625810"
          imggggg="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/717o4IDuhNS._AC_SY200__oFaF_ebsA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=164775862507727702"
          imgggggg="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/81knvUk_RuL._AC_SY200___1__tbHfA5_lX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758624136"
          img7="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/81rhHK33ncL._AC_SY200___1__4P52a59KI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758624461"
          img8="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/91OTY9rx0tS._AC_SY200__fCgl6Cy4B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758624692"
          img9="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/61hux4k-c8L._AC_SY200__YxhivqEtf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758623471"
          img10="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/71AdDHTEC2L._AC_SY200___1__fbfLKTENX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758623020"
          img11="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/81ic4lA3tDL._AC_SY200__zpNd3Oxd5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758623691"
          img12="https://ik.imagekit.io/amazon98670/imagess/slider/slidercarptet/71GDqWMTEbL._AC_SY200__N9uMqMj2T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647758623269"
        />

        <div className="text-center">
          <img
            className=" my-3"
            src="https://ik.imagekit.io/amazon98670/imagess/2022-03-22_19_28_19-Window_9rYW9fxtK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647957571609"
            alt=""
            srcset=""
          />
        </div>

        <div className="row">
          <div
            className="divwithbox2 "
            style={{ display: "flex", flexWrap: "wrap", padding: "0 0 0 2vw" }}
          >
            <AdsFour
              heading="Shop for your baby by age"
              subh="0-6 months"
              subhh="6-12 months"
              subhhh="12-18 months"
              subhhhh="18-24 months"
              img="https://ik.imagekit.io/amazon98670/imagess/twopack2/6-12_months._SY116_CB667649399__ygk_ZWfCj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759986573"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack2/0-6_months._SY116_CB667649399__InGRFyN7Q.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759986409"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/12-18_months._SY116_CB667649399__139wRWBmy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759981981"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/18-24_months._SY116_CB667649399__gxotRUghs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759982205"
            />

            <AdsFour
              heading="Essentials for Expecting Mothers"
              subh="Pregnancy Supplements"
              subhh="Maternity Sleep | LoungeWear"
              subhhh="Maternity Pillows"
              subhhhh="Maternity Skincare"
              img="https://ik.imagekit.io/amazon98670/imagess/twopack2/Pregnancy_Supplements._SY116_CB667651395__FvcupXoUp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759985950"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Maternity_Sleep__Loungewear._SY116_CB667651395__RLe_syqwN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759985494"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Maternity_pillows._SY116_CB667651395__TFBP5xA4X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759984894"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Maternity_Skin_care._SY116_CB667651395__p-WdZaCOx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759985259"
            />

            <AdsFour
              heading="For the perfect birthday celebration"
              subh="Gift by Interest"
              subhh="Most Gifted"
              subhhh="Gift Cards"
              subhhhh="Decoration"
              img="https://ik.imagekit.io/amazon98670/imagess/twopack2/Artboard_1QC1_1x._SY116_CB663432337__mAs4tEaTc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759982361"
              imgg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Artboard_2QC1_1x._SY116_CB663432337__JtfZgSfXR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759982950"
              imggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Artboard_3QC1_1x._SY116_CB663023402__Xxf9bzHZU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759983276"
              imgggg="https://ik.imagekit.io/amazon98670/imagess/twopack2/Artboard_4QC1_1x._SY116_CB663023402__VzuNV776M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759984455"
            />

            <AdsOne
              heading={"  Up to 70% off | Clearance store"}
              img="https://ik.imagekit.io/amazon98670/imagess/twopack2/Chimney_GW_CC_379x304._SY304_CB427965740__ithz_qmDg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759984680"
            />
          </div>
        </div>

        <VariableWidth
          heading="Up to 60% off | Tropical hues home furnishing from local shops"
          size={7}
          img="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/61upgBIr4tL._AC_SY200__UL_OdRxn7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759044209"
          imgg="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/715mziy0l_S._AC_SY200__lSPRnBRWI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759043259"
          imggg="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/61nPFOUZdEL._AC_SY200__mC12AreyD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=164775904384858626304"
          imgggg="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/61nPFOUZdEL._AC_SY200__mC12AreyD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759043848"
          imggggg="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/618LNfCq9NL._AC_SY200__VykgjlcV4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759042739"
          imgggggg="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/519-SnWLUOL._AC_SY200__HZTnYcJDZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759042557"
          img7="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/511Kz0sLY_L._AC_SY200__N-MFOwLsl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759042227"
          img8="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/71VP7rn4Q9L._AC_SY200__vrnEMdCSo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759041491"
          img9="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/414pkd_0jjL._AC_SY200__1g3oMFYtIA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759041948"
          img10="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/71pVEP6734L._AC_SY200__d0ofhOKHEJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759041247"
          img11="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/61XryboptVL._AC_SY200__68L2Lw04P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759040639"
          img12="https://ik.imagekit.io/amazon98670/imagess/slider/sliderthree/71h9JcXEEvL._AC_SY200__7b8dabmOU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647759040856"
        />
        <VariableWidth
          heading="Up to 50% off on electronic products | Small businesses"
          size={7}
          img="https://ik.imagekit.io/amazon98670/imagess/New_Folder/815AhU-KHOS._AC_SY200__x2s6ux_U-t.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957925144"
          imgg="https://ik.imagekit.io/amazon98670/imagess/New_Folder/71HLfqtJpsL._AC_SY200__-_Copy_F9Z4oZ2Igs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957924012"
          imggg="https://ik.imagekit.io/amazon98670/imagess/New_Folder/71XhAGORxaL._AC_SY200__-_Copy_-_Copy_X0iOziG8K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957924853"
          imgggg="https://ik.imagekit.io/amazon98670/imagess/New_Folder/71uB44C0emL._AC_SY200__-_Copy_-_Copy_zYOtkR-C0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957924563"
          imggggg="https://ik.imagekit.io/amazon98670/imagess/New_Folder/31dPPR2KI2S._AC_SY200__UgtqUhYRn9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957923043"
          imgggggg="https://ik.imagekit.io/amazon98670/imagess/New_Folder/51a0c_d7JkS._AC_SY200__DDyN_PhJm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957923528"
          img7="https://ik.imagekit.io/amazon98670/imagess/New_Folder/41mtPPzobkL._AC_SY200__7wRlVfNUdB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957923268"
          img8="https://ik.imagekit.io/amazon98670/imagess/New_Folder/61Ct-OqYpIL._AC_SY200__hd8wjnJbn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957923735"
          img9="https://ik.imagekit.io/amazon98670/imagess/New_Folder/81ul8tuCASL._AC_SY200___1__yPOTSC_ka.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=164795792229341948"
          img10="https://ik.imagekit.io/amazon98670/imagess/New_Folder/31BK4FeGWzL._AC_SY200__YUl6-FdP5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957922676"
          img11="https://ik.imagekit.io/amazon98670/imagess/New_Folder/71ypkOIaBCL._AC_SY200__LKOKZNMAJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957922084"
          img12="https://ik.imagekit.io/amazon98670/imagess/New_Folder/71ypkOIaBCL._AC_SY200__-_Copy_-_Copy_V4D6c2bUz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647957921698"
        />
        <div className="sendback">
          <a href="#mainpage">Back To Top</a>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
