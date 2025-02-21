import { useState, useEffect } from "react";
import { useCustomization } from "../contexts/Customization";
import { addOrder } from "../Firebase/userUtil";
import $ from "jquery";
// import { sendOrderEmail } from "./mail";

let isfabric = false;
let selectedSize = null;
let islinig = false;
let isbutton = false;
let ismonogram = false;
const tablinks = document.querySelectorAll(".tablinks");

const Configurator = ({ takeCanvasScreenshot }) => {
  const {} = useCustomization();
  const [activeTab, setActiveTab] = useState("linigs"); // Default tab is "linigs"

  useEffect(() => {
    tabSwitch(activeTab); // Initialize with the default tab
  }, [activeTab]);

  function hideElements() {
    const elementIds = [
      "monograminitials",
      "monogram-option",
      "lapelContent",
      "lapel-option",
      "lapel-width",
      "shoulder-option",
      "confirmshoulder",
      "confirmmonogram",
      "canvas-option",
      "confirmcanvas",
      "closure-option",
      "confirmclosure",
      "amf-option",
      "confirmamf",
      "collar-option",
      "confirmcolar",
      "waistbandheigth-option",
      "suspenderbutton-option",
      "pocketcontentt",
      "pockett-option",
      "pleat-option",
      "confirmpleat",
      "hemfinishing-option",
      "confirmhemfinishing",
      "button-menut",
      "confirmbuttont",
      "leglinig-option",
      "confirmleglinig",
      "confirmsuspenderbtn",
      "confirmwaistbandheight",
      "waistband-option",
      "confirmwaistband",
      "waistbandcontent",
      "waistcoatoption",
      "waist",
      "confirmlapel",
      "confirmpockett",
    ];

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = "none";
      }
    });
  }

  const sendMail = (name, email, msg, mobNo) => {
    var data = {
      service_id: "service_0wlwdeo",
      template_id: "template_khpicyt",
      user_id: "6kLRNwW_LX6yEoyVJ",
      template_params: {
        from_name: name,
        from_email: email,
        mob_no: mobNo,
        message: msg,
      },
    };

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        alert("Your mail is sent!");
      })
      .fail(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  };

  let isfabricmenu = false;
  const lapelL = document.getElementById("lapel_l");
  const lapelW = document.getElementById("lapel_w");
  const lapelB = document.getElementById("lapel_b");
  const ichestwidth = document.getElementById("ichestwidth");
  const selectyourjacketsize = document.getElementById("selectyourjacketsize");
  const close = document.getElementById("close");
  const finish = document.getElementById("finish");
  const iconchest = document.getElementById("iconchest");
  const iconwaistwidth = document.getElementById("iconwaistwidth");
  const iwaistwidth = document.getElementById("iwaistwidth");
  const iconshoulderwidth = document.getElementById("iconshoulderwidth");
  const ishoulderwidth = document.getElementById("ishoulderwidth");
  const iconsleevelength = document.getElementById("iconsleevelength");
  const isleevelength = document.getElementById("isleevelength");
  const iconjacketlength = document.getElementById("iconjacketlength");
  const ijacketlength = document.getElementById("ijacketlength");
  const iconupperlegwidth = document.getElementById("iconupperlegwidth");
  const iupperlegwidth = document.getElementById("iupperlegwidth");
  const iinsideleg = document.getElementById("iinsideleg");
  const iconinsideleg = document.getElementById("iconinsideleg");
  const iconsleevelengtht = document.getElementById("iconsleevelengtht");
  const isleevelengtht = document.getElementById("isleevelengtht");
  const sizeJguide = document.getElementById("sizeJguide");
  const iwaist = document.getElementById("iwaist");
  const iconwaist = document.getElementById("iconwaist");
  const jacketsize = document.getElementById("jacketsize");
  const sizeoption = document.getElementById("sizeoption");
  const sizeconfirm = document.getElementById("sizeconfirm");
  const jsizechart = document.getElementById("jsizechart");
  const trousersize = document.getElementById("trousersize");
  const selectyourtrousersize = document.getElementById(
    "selectyourtrousersize"
  );
  const closet = document.getElementById("closet");
  const sizetguide = document.getElementById("sizetguide");
  const tsizechart = document.getElementById("tsizechart");
  const Next = document.getElementById("Next");
  // const dropdown_menu = document.getElementById("dropdown-menu")
  const buttonContent = document.getElementById("buttonContent");
  const button_menu = document.getElementById("button-menu");
  const pocketContent = document.getElementById("pocketContent");
  const pocket_menu = document.getElementById("pocket");
  const upper_pocket = document.getElementById("upper_pocket");
  const monogrm = document.getElementById("monogrm");
  const btnm = document.getElementById("btnm");
  const pokt = document.getElementById("pokt");
  const trousr = document.getElementById("trousr");
  const buttontype = document.getElementById("buttontype");
  const sleevetype = document.getElementById("sleevetype");
  const confirmcon = document.getElementById("confirmcon");
  const confrm = document.getElementById("confrm");
  const confirml = document.getElementById("confirml");
  const confrmlining = document.getElementById("confrmlining");
  const sleeve_menu = document.getElementById("sleeve-menu");
  const confirmconbtn = document.getElementById("confrmbtn");
  const confrmpkt = document.getElementById("confrmpkt");
  const linigm = document.getElementById("linigm");
  const tabSwitch = (tabId) => {
    switch (tabId) {
      case "linigs":
        islinig = !islinig;
        isfabric = false;

        // dropdown_menu.style.display = 'none';
        document.getElementById("fabric-type").style.display = "none";
        document.getElementById("lining-menu").style.display = "none";
        document.getElementById("liningcontent").style.display = "none";
        document.getElementById("waist").style.display = "none";
        document.getElementById("confirmwaistcoat").style.display = "none";


        // buttonsContent.style.display='none';
        button_menu.style.display = "none";
        // pocket_menu.style.display='block';
        document.querySelector(".pocket-active").style.display = "none";
        pocketContent.style.display = "none";
        monogrm.style.display = "flex";
        trousr.style.display = "none";
        buttonContent.style.display = "none";
        sleeve_menu.style.display = "none";
        confirmcon.style.display = "none";
        confrm.style.display = "none";
        confrmlining.style.display = "none";
        document.getElementById("confrmpockett").style.display = "none";
        hideElements();

        break;

      case "button":
        isbutton = !isbutton;
        isfabric = false;
        islinig = false;
        hideElements();

        // dropdown_menu.style.display = 'none';
        buttonContent.style.display = "none";
        button_menu.style.display = "none";
        pocket_menu.style.display = "none";
        pocketContent.style.display = "none";
        upper_pocket.style.display = "none";
        monogrm.style.display = "none";
        trousr.style.display = "flex";
        sleeve_menu.style.display = "none";
        confirmcon.style.display = "none";
        confrm.style.display = "none";
        document.getElementById("fabric-type").style.display = "none";
        document.getElementById("lining-menu").style.display = "none";
        document.getElementById("liningcontent").style.display = "none";
        document.getElementById("lining-print").style.display = "none";
        document.getElementById("waistcoatoption").style.display = "none";
        document.getElementById("confirmwaistcoat").style.display = "none";

        document.getElementById("waist").style.display = "none";
        document.getElementById("monograminitials").style.display = "none";
        document.getElementById("monogram-option").style.display = "none";
        document.getElementById("lapelContent").style.display = "none";
        document.getElementById("lapel-option").style.display = "none";
        document.getElementById("lapel-width").style.display = "none";
        document.getElementById("shoulder-option").style.display = "none";
        document.getElementById("confirmshoulder").style.display = "none";
        document.getElementById("confirmmonogram").style.display = "none";
        document.getElementById("canvas-option").style.display = "none";
        document.getElementById("confirmcanvas").style.display = "none";
        document.getElementById("closure-option").style.display = "none";
        document.getElementById("confirmclosure").style.display = "none";
        document.getElementById("amf-option").style.display = "none";
        document.getElementById("confirmamf").style.display = "none";
        document.getElementById("collar-option").style.display = "none";
        document.getElementById("confirmcolar").style.display = "none";
        document.getElementById("waistbandheigth-option").style.display =
          "none";
        document.getElementById("suspenderbutton-option").style.display =
          "none";
        document.getElementById("pocketcontentt").style.display = "none";
        document.getElementById("pockett-option").style.display = "none";
        document.getElementById("pleat-option").style.display = "none";
        document.getElementById("confirmpleat").style.display = "none";
        document.getElementById("hemfinishing-option").style.display = "none";
        document.getElementById("confirmhemfinishing").style.display = "none";
        document.getElementById("button-menut").style.display = "none";
        document.getElementById("confirmbuttont").style.display = "none";
        document.getElementById("leglinig-option").style.display = "none";
        document.getElementById("confirmleglinig").style.display = "none";
        document.getElementById("confirmsuspenderbtn").style.display = "none";
        document.getElementById("confirmwaistbandheight").style.display =
          "none";
          document.getElementById("confirmwaistcoat").style.display = "none";

        document.getElementById("waistband-option").style.display = "none";
        document.getElementById("confirmwaistband").style.display = "none";
        document.getElementById("waistbandcontent").style.display = "none";
        document.getElementById("waistcoatoption").style.display = "none";
        document.getElementById("waist").style.display = "none";
        document.getElementById("waistcoat-closure").style.display = "none";
        document.getElementById("confirmstyle").style.display = "none";
        document.getElementById("confirmpocketw").style.display = "none";
        document.getElementById("waistcoat-backstyle").style.display = "none";
        document.getElementById("confirmbackstyle").style.display = "none";
        document.getElementById("waistcoat-liningcolor").style.display = "none";
        document.getElementById("confirmlinigcolor").style.display = "none";
        document.getElementById("waistcoat-button").style.display = "none";
        document.getElementById("confirmbuttonw").style.display = "none";
        document.getElementById("confirmlapel").style.display = "none";
        document.getElementById("confirmpockett").style.display = "none";
        document.getElementById("lapel-buttonhole").style.display = "none";
        document.getElementById("confrmlining").style.display = "none";

        break;
      case "monogram":
        ismonogram = !ismonogram;
        isfabric = false;
        islinig = false;
        isbutton = false;
        document.getElementById("waist").style.display = "block";


        // dropdown_menu.style.display = 'none';
        document.getElementById("fabric-type").style.display = "none";
        button_menu.style.display = "none";
        pocket_menu.style.display = "none";
        pocketContent.style.display = "none";
        upper_pocket.style.display = "none";
        monogrm.style.display = "none";
        sleeve_menu.style.display = "none";
        trousr.style.display = "none";
        confrm.style.display = "none";
        buttonContent.style.display = "none";
        document.getElementById("confirmpockett").style.display = "none";

        document.getElementById("monograminitials").style.display = "none";
        document.getElementById("monogram-option").style.display = "none";
        document.getElementById("lapelContent").style.display = "none";
        document.getElementById("lapel-option").style.display = "none";
        document.getElementById("lapel-width").style.display = "none";
        document.getElementById("shoulder-option").style.display = "none";
        document.getElementById("confirmshoulder").style.display = "none";
        document.getElementById("confirmmonogram").style.display = "none";
        document.getElementById("canvas-option").style.display = "none";
        document.getElementById("confirmcanvas").style.display = "none";
        document.getElementById("closure-option").style.display = "none";
        document.getElementById("confirmclosure").style.display = "none";
        document.getElementById("amf-option").style.display = "none";
        document.getElementById("confirmamf").style.display = "none";
        document.getElementById("collar-option").style.display = "none";
        document.getElementById("confirmcolar").style.display = "none";
        document.getElementById("waistbandheigth-option").style.display =
          "none";
        document.getElementById("suspenderbutton-option").style.display =
          "none";
        document.getElementById("pocketcontentt").style.display = "none";
        document.getElementById("pockett-option").style.display = "none";
        document.getElementById("pleat-option").style.display = "none";
        document.getElementById("confirmpleat").style.display = "none";
        document.getElementById("hemfinishing-option").style.display = "none";
        document.getElementById("confirmhemfinishing").style.display = "none";
        document.getElementById("button-menut").style.display = "none";
        document.getElementById("confirmbuttont").style.display = "none";
        document.getElementById("leglinig-option").style.display = "none";
        document.getElementById("confirmleglinig").style.display = "none";
        document.getElementById("confirmsuspenderbtn").style.display = "none";
        document.getElementById("confirmwaistbandheight").style.display =
          "none";
        document.getElementById("waistband-option").style.display = "none";
        document.getElementById("confirmwaistband").style.display = "none";
        document.getElementById("waistbandcontent").style.display = "none";
        document.getElementById("waistcoat-closure").style.display = "none";
        document.getElementById("confirmstyle").style.display = "none";
        document.getElementById("confirmpocketw").style.display = "none";
        document.getElementById("waistcoat-backstyle").style.display = "none";
        document.getElementById("confirmbackstyle").style.display = "none";
        document.getElementById("waistcoat-liningcolor").style.display = "none";
        document.getElementById("confirmlinigcolor").style.display = "none";
        document.getElementById("waistcoat-button").style.display = "none";
        document.getElementById("confirmbuttonw").style.display = "none";
        document.getElementById("confirmlapel").style.display = "none";

        break;
      case "fabric":
        isfabric = !isfabric;
        // dropdown_menu.style.display = 'flex';
        document.getElementById("fabric-type").style.display = "flex";
        // buttonsContent.style.display='none';
        button_menu.style.display = "none";
        pocket_menu.style.display = "none";
        // pocketContent.style.display = 'none';
        upper_pocket.style.display = "none";
        monogrm.style.display = "none";
        trousr.style.display = "none";
        sleeve_menu.style.display = "none";
        confrm.style.display = "none";
        document.getElementById("lining-menu").style.display = "none";
        document.getElementById("liningcontent").style.display = "none";
        document.getElementById("confirmwaistcoat").style.display = "none";

        document.getElementById("lining-print").style.display = "none";
        document.getElementById("buttonContent").style.display = "none";
        document.getElementById("confrmbtn").style.display = "none";
        document.getElementById("confrmwaist").style.display = "none";

        document.getElementById("lapel-buttonhole").style.display = "none";
        document.getElementById("pocketContent").style.display = "none";

        hideElements();

        break;
    }
  };
  const removetabLinksClass = () => {
    tablinks.forEach((tab) => {
      const tabId = tab.getAttribute("id");
      tab.classList.remove("active");
      tab.setAttribute("src", `./images/${tabId}.png`);
    });
  };
  tablinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      removetabLinksClass();

      const name = tab.getAttribute("id");
      tab.classList.add("active");
      tabSwitch(name);
    });
  });
  btnm.addEventListener("click", () => {
    buttonContent.style.display = "block";
    button_menu.style.display = "flex";
    trousr.style.display = "none";
    pocket_menu.style.display = "none";
    confirmcon.style.display = "block";
    document.getElementById("confrmbtn").style.display = "block";
    monogrm.style.display = "none";
    buttontype.classList.add("active");
    sleevetype.classList.remove("active");
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.querySelector("#btnm").addEventListener("click", () => {
    buttonContent.style.display = "block";
    button_menu.style.display = "flex";
    trousr.style.display = "none";
    pocket_menu.style.display = "none";
    confirmcon.style.display = "block";
    monogrm.style.display = "none";
  });

  pokt.addEventListener("click", () => {
    pocket_menu.style.display = "flex";
    pocketContent.style.display = "block";
    monogrm.style.display = "none";
    // confrmpkt.style.display='block'
    confrm.style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("upperpocketModel").classList.add("active");
    document.getElementById("lowerpocketmodel").classList.remove("active");
  });
  document.getElementById("upperpocketModel").classList.add("active");
  buttontype.addEventListener("click", () => {
    button_menu.style.display = "flex";
    sleeve_menu.style.display = "none";
  });
  sleevetype.addEventListener("click", () => {
    button_menu.style.display = "none";
    sleeve_menu.style.display = "flex";
  });
  confirmconbtn.addEventListener("click", () => {
    buttonContent.style.display = "none";
    button_menu.style.display = "none";
    // trousr.style.display = 'none'
    // pocket_menu.style.display = 'none';
    confirmcon.style.display = "none";
    monogrm.style.display = "flex";
    sleeve_menu.style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  buttontype.classList.add("active");

  confrmlining.addEventListener("click", () => {
    document.getElementById("liningcontent").style.display = "none";
    document.getElementById("lining-menu").style.display = "none";
    document.getElementById("lining-print").style.display = "none";
    monogrm.style.display = "flex";

    confrmlining.style.display = "none";
    document.getElementById("waist").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("linigtype").addEventListener("click", () => {
    document.getElementById("lining-menu").style.display = "flex";
    document.getElementById("lining-print").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("liningprint").addEventListener("click", () => {
    document.getElementById("lining-print").style.display = "flex";
    document.getElementById("lining-menu").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("color").addEventListener("click", () => {
    document.getElementById("lining-print").style.display = "none";
    document.getElementById("lining-menu").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("collarfelt").addEventListener("click", () => {
    monogrm.style.display = "none";
    document.getElementById("collar-option").style.display = "flex";
    document.getElementById("confirmcolar").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmcollar").addEventListener("click", () => {
    document.getElementById("collar-option").style.display = "none";
    document.getElementById("confirmcolar").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("amf").addEventListener("click", () => {
    document.getElementById("amf-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("confirmamf").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmamf").addEventListener("click", () => {
    document.getElementById("amf-option").style.display = "none";
    document.getElementById("confirmamf").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("closure").addEventListener("click", () => {
    document.getElementById("closure-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("confirmclosure").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmclosure").addEventListener("click", () => {
    document.getElementById("closure-option").style.display = "none";
    document.getElementById("confirmclosure").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("Shawl").addEventListener("click", () => {
    document.getElementById("shawl_option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("confirmshawl").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmshawl").addEventListener("click", () => {
    document.getElementById("shawl_option").style.display = "none";
    document.getElementById("confirmshawl").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("lapel").addEventListener("click", () => {
    document.getElementById("lapelContent").style.display = "block";
    document.getElementById("lapel-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("confirmlapel").style.display = "block";
    // document.getElementById('confrmlapel').style.display = 'block'

    // lapelL.classList.add('active');
  });
  document.getElementById("confrmlapel").addEventListener("click", () => {
    monogrm.style.display = "flex";
    document.getElementById("lapelContent").style.display = "none";
    document.getElementById("lapel-option").style.display = "none";
    document.getElementById("lapel-width").style.display = "none";
    document.getElementById("lapel-buttonhole").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
    // document.getElementById('confrmlapel').style.display = 'none'

    document.getElementById("confirmlapel").style.display = "none";
  });
  // lapelL.classList.add('active');
  document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById("monogram-option").style.display = "flex";
    document.getElementById("monograminitials").style.display = "none";
    document.getElementById("confirmmonogram").style.display = "block";
  });
  document.getElementById("closeButtonu").addEventListener("click", () => {
    document.getElementById("monogram-option").style.display = "flex";
    document.getElementById("monograminitialsu").style.display = "none";
    document.getElementById("confirmmonogram").style.display = "block";
  });
  // document.getElementById('lapel_l').addEventListener('click', () => {
  //   document.getElementById('lapel-option').style.display = 'flex'

  // })
  // document.getElementById('lapel_w').addEventListener('click', () => {
  //   document.getElementById('lapel-option').style.display = 'none'
  //   document.getElementById('lapel-width').style.display = 'flex'

  // })
  // document.getElementById('lapel_b').addEventListener('click', () => {
  //   document.getElementById('lapel-option').style.display = 'none'
  //   document.getElementById('lapel-width').style.display = 'none'
  //   document.getElementById('lapel-buttonhole').style.display = 'flex'
  // })

  document.getElementById("wheight_5mm").addEventListener("click", () => {
    // Save the ID when the div is clicked
    localStorage.setItem("waistbandHeightOptionId", "wheight_5mm");
  });
  document.getElementById("shoulder").addEventListener("click", () => {
    document.getElementById("shoulder-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("confirmshoulder").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmshoulder").addEventListener("click", () => {
    document.getElementById("shoulder-option").style.display = "none";
    document.getElementById("confirmshoulder").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });

   document.getElementById("sleevecuffs").addEventListener("click", () => {
    document.getElementById("sleevecuff-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("confirmsleevecuff").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmsleevecuff").addEventListener("click", () => {
    document.getElementById("sleevecuff-option").style.display = "none";
    document.getElementById("confirmsleevecuff").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("canvas").addEventListener("click", () => {
    document.getElementById("canvas-option").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("confirmcanvas").style.display = "block";
  });
  document.getElementById("confrmcanvas").addEventListener("click", () => {
    document.getElementById("canvas-option").style.display = "none";
    document.getElementById("confirmcanvas").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("monogramid").addEventListener("click", () => {
    document.getElementById("monogram-option").style.display = "flex";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("confirmmonogram").style.display = "block";
  });
  document.getElementById("confrmmonogram").addEventListener("click", () => {
    document.getElementById("monogram-option").style.display = "none";
    document.getElementById("confirmmonogram").style.display = "none";
    monogrm.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("confrm").addEventListener("click", () => {
    document.getElementById("closure-option").style.display = "none";
    document.getElementById("confirmclosure").style.display = "none";
    monogrm.style.display = "flex";
  });
  document.getElementById("insidejacketm").addEventListener("click", () => {
    document.getElementById("monograminitials").style.display = "flex";
    document.getElementById("confirmmonogram").style.display = "none";
    document.getElementById("monogram-option").style.display = "none";
  });
  document.getElementById("undresidecollarm").addEventListener("click", () => {
    document.getElementById("monograminitialsu").style.display = "flex";
    document.getElementById("confirmmonogram").style.display = "none";
    document.getElementById("monogram-option").style.display = "none";
  });
  document.getElementById("waistband").addEventListener("click", () => {
    document.getElementById("waistbandcontent").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("waistband-option").style.display = "flex";
    document.getElementById("confirmwaistband").style.display = "block";
    document.getElementById("waistbandtype").classList.add("active");
    document.getElementById("waistbanddetails").classList.remove("active");
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("waistbandtype").classList.add("active");

  document.getElementById("confrmwaistband").addEventListener("click", () => {
    document.getElementById("waistband-option").style.display = "none";
    document.getElementById("confirmwaistband").style.display = "none";
    document.getElementById("waistbandcontent").style.display = "none";
    document.getElementById("waistband-details").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
    trousr.style.display = "flex";
  });
  document.getElementById("waistbandtype").addEventListener("click", () => {
    document.getElementById("waistbandcontent").style.display = "block";
    document.getElementById("waistband-option").style.display = "flex";
    document.getElementById("confirmwaistband").style.display = "block";
    document.getElementById("waistband-details").style.display = "none";
  });
  document.getElementById("waistbanddetails").addEventListener("click", () => {
    document.getElementById("waistband-details").style.display = "flex";
    document.getElementById("waistbandcontent").style.display = "block";
    document.getElementById("confirmwaistband").style.display = "block";
    document.getElementById("waistband-option").style.display = "none";
  });

  document.getElementById("pockett").addEventListener("click", () => {
    document.getElementById("pocketcontentt").style.display = "block";
    document.getElementById("pockett-option").style.display = "flex";
    document.getElementById("confirmpockett").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("pocketside").classList.add("active");
    document.getElementById("pocketback").classList.remove("active");
    document.getElementById("pocketcoin").classList.remove("active");
    document.getElementById("confrmpockett").style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("pocketside").classList.add("active");

  document.getElementById("confrmpockett").addEventListener("click", () => {
    trousr.style.display = "flex";
    document.getElementById("pockett-option").style.display = "none";
    document.getElementById("confirmpockett").style.display = "none";
    document.getElementById("pocketcontentt").style.display = "none";
    document.getElementById("pockett-back").style.display = "none";
    document.getElementById("pockett-coin").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("pocketside").addEventListener("click", () => {
    document.getElementById("pockett-coin").style.display = "none";
    document.getElementById("pockett-option").style.display = "flex";
    document.getElementById("pockett-back").style.display = "none";
  });
  document.getElementById("pocketback").addEventListener("click", () => {
    document.getElementById("pockett-back").style.display = "flex";
    document.getElementById("pockett-coin").style.display = "none";
    document.getElementById("pockett-option").style.display = "none";
  });
  document.getElementById("pocketcoin").addEventListener("click", () => {
    document.getElementById("pockett-coin").style.display = "flex";
    document.getElementById("pockett-option").style.display = "none";
    document.getElementById("pockett-back").style.display = "none";
  });
  document.getElementById("pleat").addEventListener("click", () => {
    document.getElementById("pleat-option").style.display = "flex";
    document.getElementById("confirmpleat").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmpleat").addEventListener("click", () => {
    document.getElementById("pleat-option").style.display = "none";
    document.getElementById("confirmpleat").style.display = "none";
    trousr.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("hemfinishing").addEventListener("click", () => {
    document.getElementById("hemfinishing-option").style.display = "flex";
    document.getElementById("confirmhemfinishing").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document
    .getElementById("confrmhemfinishing")
    .addEventListener("click", () => {
      document.getElementById("hemfinishing-option").style.display = "none";
      document.getElementById("confirmhemfinishing").style.display = "none";
      trousr.style.display = "flex";
      document.getElementById("tab").style.display = "block";
      document.getElementById("finish").style.display = "block";
    });
  document.getElementById("buttont").addEventListener("click", () => {
    document.getElementById("button-menut").style.display = "flex";
    document.getElementById("confirmbuttont").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmbuttont").addEventListener("click", () => {
    document.getElementById("button-menut").style.display = "none";
    document.getElementById("confirmbuttont").style.display = "none";
    trousr.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  // document.getElementById("waistbandheight").addEventListener("click", () => {
  //   document.getElementById("waistbandheigth-option").style.display = "flex";
  //   document.getElementById("confirmwaistbandheight").style.display = "block";
  //   trousr.style.display = "none";
  //   document.getElementById("tab").style.display = "none";
  //   document.getElementById("finish").style.display = "none";
  // });
  document
    .getElementById("confrmwaistbandheight")
    .addEventListener("click", () => {
      document.getElementById("waistbandheigth-option").style.display = "none";
      document.getElementById("confirmwaistbandheight").style.display = "none";
      trousr.style.display = "flex";
      document.getElementById("tab").style.display = "block";
      document.getElementById("finish").style.display = "block";
    });
  document.getElementById("suspenderbutton").addEventListener("click", () => {
    document.getElementById("suspenderbutton-option").style.display = "flex";
    document.getElementById("confirmsuspenderbtn").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document
    .getElementById("confrmsuspenderbtn")
    .addEventListener("click", () => {
      document.getElementById("suspenderbutton-option").style.display = "none";
      document.getElementById("confirmsuspenderbtn").style.display = "none";
      trousr.style.display = "flex";
      document.getElementById("tab").style.display = "block";
      document.getElementById("finish").style.display = "block";
    });
  document.getElementById("leglinig").addEventListener("click", () => {
    document.getElementById("leglinig-option").style.display = "flex";
    document.getElementById("confirmleglinig").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
  document.getElementById("confrmleglinig").addEventListener("click", () => {
    document.getElementById("leglinig-option").style.display = "none";
    document.getElementById("confirmleglinig").style.display = "none";
    trousr.style.display = "flex";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("confirmwaistcoat").addEventListener("click", () => {
    document.getElementById("leglinig-option").style.display = "none";
    document.getElementById("confirmleglinig").style.display = "none";
    document.getElementById("confirmwaistcoat").style.display = "none";


    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("waist").style.display = "block";
    
  });
  document.getElementById("addwaistcoat").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "flex";
    document.getElementById("confirmwaistcoat").style.display = "block";

    document.getElementById("waist").style.display = "none";
  });

  document.getElementById("doublebreastedvest").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmstyle").style.display = "block";
  });
  document.getElementById("confrmstyle").addEventListener("click", () => {
    document.getElementById("confirmstyle").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document.getElementById("singleBreastedVest").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmpocketw").style.display = "block";
  });
  document.getElementById("confrmpocketw").addEventListener("click", () => {
    document.getElementById("confirmpocketw").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });

 


  document.getElementById("removewaistcoat").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmwaistcoat").style.display = "none";

    document.getElementById("waist").style.display = "block";

  });
  //  //  //  //
  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("initialsInput");
    const charCount = document.getElementById("charCount");
    input.addEventListener("input", function () {
      const currentLength = input.value.length;
      charCount.textContent = `${currentLength}/15 `;
      localStorage.setItem("initials", input.value);
    });
  });

  const initialsInput = document.getElementById("initialsInput");
  const initialsInputu = document.getElementById("initialsInputu");

  const nextButton = document.getElementById("nextButton");
  const nextButtonu = document.getElementById("nextButtonU");

  initialsInput.addEventListener("input", () => {
    const inputValue = initialsInput.value.trim().length;

    if (inputValue > 0) {
      nextButton.classList.add("bg-gray-300"); // Apply gray background
    } else {
      nextButton.classList.remove("bg-gray-300"); // Remove gray background
    }
  });

  initialsInputu.addEventListener("input", () => {
    const inputValueu = initialsInputu.value.trim().length;

    if (inputValueu > 0) {
      nextButtonu.classList.add("bg-gray-300"); // Apply gray background
    } else {
      nextButtonu.classList.remove("bg-gray-300"); // Remove gray background
    }
  });
  nextButton.addEventListener("click", () => {
    const values = initialsInput.value;
    localStorage.setItem("inside jacket", values);
    document.getElementById("monograminitials").style.display = "none";
    document.getElementById("monogram-option").style.display = "flex";
    document.getElementById("confirmmonogram").style.display = "block";
  });
  document.getElementById("nextButtonU").addEventListener("click", () => {
    const values_u = initialsInputu.value;
    localStorage.setItem("Underside collar", values_u);

    document.getElementById("monograminitialsu").style.display = "none";
    document.getElementById("monogram-option").style.display = "flex";
    document.getElementById("confirmmonogram").style.display = "block";
  });
  confrmpkt.addEventListener("click", () => {
    pocket_menu.style.display = "none";
    pocketContent.style.display = "none";
    // trousr.style.display = 'none'
    // pocket_menu.style.display = 'none';
    confirmcon.style.display = "none";
    monogrm.style.display = "flex";
    upper_pocket.style.display = "none";
    confrm.style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  linigm.addEventListener("click", () => {
    document.getElementById("liningcontent").style.display = "flex";
    monogrm.style.display = "none";
    document.getElementById("lining-menu").style.display = "flex";
    confirml.style.display = "block";
    confrmlining.style.display = "block";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });

  iconchest.addEventListener("click", () => {
    ichestwidth.style.display = "block";
    document.getElementById("sizetable").style.display = "none";
    document.getElementById("sizej").style.display = "none";
  });
  document.getElementById("closeichest").addEventListener("click", () => {
    ichestwidth.style.display = "none";
    // document.getElementById('sizetable').style.display='block'
    // document.getElementById('sizej').style.display='block'
    jsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("backchest").addEventListener("click", () => {
    ichestwidth.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
    document.getElementById("sizej").style.display = "block";
  });
  iconwaistwidth.addEventListener("click", () => {
    iwaistwidth.style.display = "block";
    document.getElementById("sizetable").style.display = "none";
    document.getElementById("sizej").style.display = "none";
  });
  document.getElementById("closeiwaist").addEventListener("click", () => {
    iwaistwidth.style.display = "none";
    // document.getElementById('sizetable').style.display='block'
    // document.getElementById('sizej').style.display='block'
    jsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("backwaist").addEventListener("click", () => {
    iwaistwidth.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
    document.getElementById("sizej").style.display = "block";
  });
  iconshoulderwidth.addEventListener("click", () => {
    ishoulderwidth.style.display = "block";
    document.getElementById("sizetable").style.display = "none";
    document.getElementById("sizej").style.display = "none";
  });
  document.getElementById("closeishoulder").addEventListener("click", () => {
    ishoulderwidth.style.display = "none";
    // document.getElementById('sizetable').style.display='block'
    // document.getElementById('sizej').style.display='block'
    jsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("backshoulder").addEventListener("click", () => {
    ishoulderwidth.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
    document.getElementById("sizej").style.display = "block";
  });
  iconsleevelength.addEventListener("click", () => {
    isleevelength.style.display = "block";
    document.getElementById("sizetable").style.display = "none";
    document.getElementById("sizej").style.display = "none";
  });
  document.getElementById("closeisleeve").addEventListener("click", () => {
    isleevelength.style.display = "none";
    // document.getElementById('sizetable').style.display='block'
    // document.getElementById('sizej').style.display='block'
    jsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("backsleeve").addEventListener("click", () => {
    isleevelength.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
    document.getElementById("sizej").style.display = "block";
  });
  iconjacketlength.addEventListener("click", () => {
    ijacketlength.style.display = "block";
    document.getElementById("sizetable").style.display = "none";
    document.getElementById("sizej").style.display = "none";
  });
  document.getElementById("closeijacket").addEventListener("click", () => {
    ijacketlength.style.display = "none";
    // document.getElementById('sizetable').style.display='block'
    // document.getElementById('sizej').style.display='block'
    jsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("backjacket").addEventListener("click", () => {
    ijacketlength.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
    document.getElementById("sizej").style.display = "block";
  });
  iconwaist.addEventListener("click", () => {
    iwaist.style.display = "block";
    document.getElementById("sizetablet").style.display = "none";
    document.getElementById("sizet").style.display = "none";
  });
  document.getElementById("backwaistt").addEventListener("click", () => {
    iwaist.style.display = "none";
    document.getElementById("sizetablet").style.display = "block";
    document.getElementById("sizet").style.display = "block";
  });
  document.getElementById("closewaistt").addEventListener("click", () => {
    iwaist.style.display = "none";
    // document.getElementById('sizetablet').style.display = 'block'
    // document.getElementById('sizet').style.display = 'block'
    tsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  iconupperlegwidth.addEventListener("click", () => {
    iupperlegwidth.style.display = "block";
    document.getElementById("sizetablet").style.display = "none";
    document.getElementById("sizet").style.display = "none";
  });
  document.getElementById("backupperleg").addEventListener("click", () => {
    iupperlegwidth.style.display = "none";
    document.getElementById("sizetablet").style.display = "block";
    document.getElementById("sizet").style.display = "block";
  });
  document.getElementById("closeupperleg").addEventListener("click", () => {
    iupperlegwidth.style.display = "none";
    // document.getElementById('sizetablet').style.display = 'block'
    // document.getElementById('sizet').style.display = 'block'
    tsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  iconinsideleg.addEventListener("click", () => {
    iinsideleg.style.display = "block";
    document.getElementById("sizetablet").style.display = "none";
    document.getElementById("sizet").style.display = "none";
  });
  document.getElementById("backinsideleg").addEventListener("click", () => {
    iinsideleg.style.display = "none";
    document.getElementById("sizetablet").style.display = "block";
    document.getElementById("sizet").style.display = "block";
  });
  document.getElementById("closeinsideleg").addEventListener("click", () => {
    iinsideleg.style.display = "none";
    // document.getElementById('sizetablet').style.display = 'block'
    // document.getElementById('sizet').style.display = 'block'
    tsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });
  iconsleevelengtht.addEventListener("click", () => {
    isleevelengtht.style.display = "block";
    document.getElementById("sizetablet").style.display = "none";
    document.getElementById("sizet").style.display = "none";
  });
  document.getElementById("backsleevelenght").addEventListener("click", () => {
    isleevelengtht.style.display = "none";
    document.getElementById("sizetablet").style.display = "block";
    document.getElementById("sizet").style.display = "block";
  });
  document.getElementById("closesleevelenght").addEventListener("click", () => {
    isleevelengtht.style.display = "none";
    // document.getElementById('sizetablet').style.display = 'block'
    // document.getElementById('sizet').style.display = 'block'
    tsizechart.style.display = "none";
    sizeoption.style.display = "flex";
  });

  const buttons = document.querySelectorAll(".button");
  const nextButtons = document.querySelectorAll(".next-button");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons and next buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      nextButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button and the first next button
      button.classList.add("active");
      nextButtons[0].classList.add("active");
    });
  });

  document.getElementById("Previous").addEventListener("click", function () {
    document.getElementById("sizetable").scrollBy({
      left: -220,
      behavior: "smooth",
    });
  });

  document.getElementById("Next").addEventListener("click", function () {
    document.getElementById("sizetable").scrollBy({
      left: 220,
      behavior: "smooth",
    });
  });
  document.getElementById("Previoust").addEventListener("click", function () {
    document.getElementById("sizetablet").scrollBy({
      left: -100,
      behavior: "smooth",
    });
  });

  document.getElementById("Nextt").addEventListener("click", function () {
    document.getElementById("sizetablet").scrollBy({
      left: 100,
      behavior: "smooth",
    });
  });
  document
    .getElementById("Previousjsizec")
    .addEventListener("click", function () {
      document.getElementById("sizeconversionsj").scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });

  document.getElementById("Nextjsizec").addEventListener("click", function () {
    document.getElementById("sizeconversionsj").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
  document
    .getElementById("Previoustsizec")
    .addEventListener("click", function () {
      document.getElementById("sizeconversionst").scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });

  document.getElementById("Nexttsizec").addEventListener("click", function () {
    document.getElementById("sizeconversionst").scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
  // const mail =()=>{
  //   <>
  //   <sendOrderEmail/>

  //   </>

  // }
  sizeconfirm.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const mobileNo = document.getElementById("mno").value;
    // Check if inputs are not empty
    if (name.trim() === "" || mobileNo.trim() === "") {
      alert("Please enter Name and Mobile No.");
      return;
    }

    // Store values in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("mobileNo", mobileNo);

    sizeoption.style.display = "none";
    monogrm.style.display = "none";
    finish.style.display = "none";
    document.getElementById("customize").style.display = "block";
    document.getElementById("result").style.display = "block";

  // Retrieve saved values from localStorage
  const ButtonPrice = Number(localStorage.getItem("ButtonPrice")) || 0;
  const FabricPrice =
    Number(localStorage.getItem("selectedFabricPrice")) || 0;
  const LiningPrice = Number(localStorage.getItem("LiningColorPrice")) || 0;

  // Calculate the total price
  const TotalPrice = ButtonPrice + FabricPrice + LiningPrice;
    // Prepare order data
    const orderData = {
      name,
      mobileNo,
      ButtonName: localStorage.getItem("ButtonName") || "Default",
      selectedLowerPocket:
        localStorage.getItem("selectedLowerPocket") || "Default",
      selectedFabricName:
        localStorage.getItem("selectedFabricName") || "Default",
      selectedUpperPocket:
        localStorage.getItem("selectedUpperPocket") || "Default",
      selectedLinig: localStorage.getItem("selectedLinig") || "Default",
      liningColorName: localStorage.getItem("LiningColor") || "Default",
      selectedCollar: localStorage.getItem("selectedCollar") || "Default",
      selectedCanvas: localStorage.getItem("selectedCanvas") || "None selected",
      selectedsleevecuff:localStorage.getItem("selectedsleevecuff") || "None selected",
      
      selectedShoulder:
        localStorage.getItem("selectedShoulder") || "None selected",
      selectedPeak: localStorage.getItem("selectedPeak") || "None selected",
      selectedNotch: localStorage.getItem("selectedNotch") || "None selected",
      selectedAmf: localStorage.getItem("selectedAmf") || "None selected",
      selectedSize: localStorage.getItem("selectedSize") || "None selected",
      undersideCollar:
        localStorage.getItem("Underside collar") || "None selected",
      jacketInside: localStorage.getItem("inside jacket") || "None selected",
      selectedWaistband:
        localStorage.getItem("selectedWaistband") || "None selected",
      selectedPleat: localStorage.getItem("selectedpleat") || "None selected",
      selectedTrouserPocket:
        localStorage.getItem("selectedtrouserpocket") || "None selected",
      ButtontName: localStorage.getItem("ButtontName") || "None selected",
      selectedHem: localStorage.getItem("selectedHem") || "None selected",
      savedLeg: localStorage.getItem("legLiningOptionId") || "None selected",
      savedSelection:
        localStorage.getItem("selectedSuspenderOption") || "None selected",
      selectedTrouserSize:
        localStorage.getItem("selectedTrouserSize") || "None selected",
        selectedWaistcoatOption:
        localStorage.getItem("selectedWaistcoatOption") || "None selected",

      TotalPrice: TotalPrice.toFixed(2),
    };

    // Call the function to add the order to Firestore
    await addOrder(orderData);

    // Display the result
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
      resultDiv.innerHTML = `
            <table border="1" cellspacing="0" cellpadding="5" style="width:100%">
                <thead>
                    <tr>
                        <th style="font-size: 24px; text-align: center;">Jacket</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>${name || "None"}</td>
                    </tr>
                    <tr>
                        <td><strong>Mobile No</strong></td>
                        <td>${mobileNo || "None"}</td>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>${orderData.ButtonName}</td>
                    </tr>
                    <tr>
                        <td>Lower-Pocket</td>
                        <td>${orderData.selectedLowerPocket}</td>
                    </tr>
                    <tr>
                        <td>Fabric</td>
                        <td>${orderData.selectedFabricName}</td>
                    </tr>
                    <tr>
                        <td>Upper-Pocket</td>
                        <td>${orderData.selectedUpperPocket}</td>
                    </tr>
                    <tr>
                        <td>Lining</td>
                        <td>${orderData.selectedLinig}</td>
                    </tr>
                    <tr>
                        <td>Lining Color</td>
                        <td>${orderData.liningColorName}</td>
                    </tr>
                    <tr>
                        <td>Collar</td>
                        <td>${orderData.selectedCollar}</td>
                    </tr>
                    <tr>
                        <td>Canvas</td>
                        <td>${orderData.selectedCanvas}</td>
                    </tr>
                    <tr>
                        <td>Shoulder</td>
                        <td>${orderData.selectedShoulder}</td>
                    </tr>
                    <tr>
                        <td>Couser-Peak</td>
                        <td>${orderData.selectedPeak}</td>
                    </tr>
                    <tr>
                        <td>Couser-Notch</td>
                        <td>${orderData.selectedNotch}</td>
                    </tr>
                    <tr>
                        <td>AMF</td>
                        <td>${orderData.selectedAmf}</td>
                    </tr>
                    <tr>
                        <td>Jacket size</td>
                        <td>${orderData.selectedSize}</td>
                    </tr>
                    <tr>
                        <td>Underside Collar</td>
                        <td>${orderData.undersideCollar}</td>
                    </tr>
                    <tr>
                        <td>Inside Jacket</td>
                        <td>${orderData.jacketInside}</td>
                    </tr>
                    <tr>
                        <td>SleeveCuff</td>
                        <td>${orderData.selectedsleevecuff}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table border="1" cellspacing="0" cellpadding="5" style="width:80%">
                <thead>
                    <tr>
                        <th style="font-size: 24px; text-align: center;">Trouser</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Waistband</td>
                        <td>${orderData.selectedWaistband}</td>
                    </tr>
                    <tr>
                        <td>Pleat</td>
                        <td>${orderData.selectedPleat}</td>
                    </tr>
                    <tr>
                        <td>Pocket</td>
                        <td>${orderData.selectedTrouserPocket}</td>
                    </tr>
                    <tr>
                        <td>Button</td>
                        <td>${orderData.ButtontName}</td>
                    </tr>
                    <tr>
                        <td>HemFinish</td>
                        <td>${orderData.selectedHem}</td>
                    </tr>
                    <tr>
                        <td>Leg lining</td>
                        <td>${orderData.savedLeg}</td>
                    </tr>
                    <tr>
                        <td>Suspender Button</td>
                        <td>${orderData.savedSelection}</td>
                    </tr>
                    <tr>
                        <td>Trouser size</td>
                        <td>${orderData.selectedTrouserSize}</td>
                    </tr>
                </tbody>
            </table>
            <table border="1" cellspacing="0" cellpadding="5" style="width:80%">
                <thead>
                    <tr>
                        <th style="font-size: 24px; text-align: center;">Waistcoat</th>
                        <th></th>
                    </tr>
                </thead>
                <tr>
                        <td>Trouser size</td>
                        <td>${orderData.selectedWaistcoatOption}</td>
                    </tr>
                </table>
            <p style="font-size: 20px; font-weight:bold; text-align: start; margin-top: 20px;">Total Price: $${
              orderData.TotalPrice
            }</p>
        `;
      resultDiv.style.display = "block"; // Show the result div

      const orderJson = {
        Jacket: {
          Name: `${name || "None"}`,
          MobileNo: `${mobileNo || "None"}`,
          Button: `${orderData.ButtonName}`,
          LowerPocket: `${orderData.selectedLowerPocket}`,
          Fabric: `${orderData.selectedFabricName}`,
          UpperPocket: `${orderData.selectedUpperPocket}`,
          Lining: `${orderData.selectedLinig}`,
          LiningColor: `${orderData.liningColorName}`,
          Collar: `${orderData.selectedCollar}`,
          Canvas: `${orderData.selectedCanvas}`,
          Shoulder: `${orderData.selectedShoulder}`,
          CouserPeak: `${orderData.selectedPeak}`,
          CouserNotch: `${orderData.selectedNotch}`,
          AMF: `${orderData.selectedAmf}`,
          JacketSize: `${orderData.selectedSize}`,
          UndersideCollar: `${orderData.undersideCollar}`,
          InsideJacket: `${orderData.jacketInside}`,
          selectedsleevecuff: `${orderData.selectedsleevecuff}`,

        },
        Trouser: {
          Waistband: `${orderData.selectedWaistband}`,
          Pleat: `${orderData.selectedPleat}`,
          Pocket: `${orderData.selectedTrouserPocket}`,
          Button: `${orderData.ButtontName}`,
          HemFinish: `${orderData.selectedHem}`,
          LegLining: `${orderData.savedLeg}`,
          SuspenderButton: `${orderData.savedSelection}`,
          TrouserSize: `${orderData.selectedTrouserSize}`,
        },
        Waistcoat:{
          waistcoat:`${orderData.selectedWaistcoatOption}`,
        },

        TotalPrice: `${orderData.TotalPrice}`,
      };

      sendMail(name, "faiz@equanimoustech.com", mobileNo);
    } else {
    }
  });

  function saveButtonId(buttonId) {
    localStorage.setItem("legLiningOptionId", buttonId);
  }

  // Add event listeners to each button
  document.getElementById("full").addEventListener("click", () => {
    saveButtonId("full");
  });

  document.getElementById("half").addEventListener("click", () => {
    saveButtonId("half");
  });

  document.getElementById("unline").addEventListener("click", () => {
    saveButtonId("unline");
  });

  //      //     //
  finish.addEventListener("click", () => {
    
    monogrm.style.display = "none";
    document.getElementById("fabric").style.display = "none";
    document.getElementById("linigs").style.display = "none";
    document.getElementById("button").style.display = "none";
    document.getElementById("monogram").style.display = "none";
    document.getElementById("fabric-type").style.display = "none";
    trousr.style.display = "none";
    selectyourjacketsize.style.display = "none";
    sizeoption.style.display = "flex";
    finish.style.display = "none";
    document.getElementById("waist").style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("liningcontent").style.display = "none";
    document.getElementById("lining-menu").style.display = "none";
    document.getElementById("confrmlining").style.display = "none";
    document.getElementById("lining-print").style.display = "none";
    document.getElementById("buttonContent").style.display = "none";
    document.getElementById("button-menu").style.display = "none";
    document.getElementById("confrmbtn").style.display = "none";
    document.getElementById("confrmwaist").style.display = "none";

    document.getElementById("sleeve-menu").style.display = "none";
    document.getElementById("monogram-option").style.display = "none";
    document.getElementById("confrmmonogram").style.display = "none";
    document.getElementById("lapel-option").style.display = "none";
    document.getElementById("confrmlapel").style.display = "none";
    document.getElementById("lapelContent").style.display = "none";
    document.getElementById("canvas-option").style.display = "none";
    document.getElementById("confrmcanvas").style.display = "none";
    document.getElementById("pocketContent").style.display = "none";
    document.getElementById("pocket").style.display = "none";
    document.getElementById("confrmpkt").style.display = "none";
    document.getElementById("upper_pocket").style.display = "none";
    document.getElementById("closure-option").style.display = "none";
    document.getElementById("confrmclosure").style.display = "none";
    document.getElementById("amf-option").style.display = "none";
    document.getElementById("confrmamf").style.display = "none";
    document.getElementById("collar-option").style.display = "none";
    document.getElementById("confrmcollar").style.display = "none";
  });

  //save canvas option in local
  function storeCanvasOption(id) {
    localStorage.setItem("selectedCanvas", id);
  }

  document.querySelectorAll("#canvas-option > div").forEach((canvasOption) => {
    canvasOption.addEventListener("click", function () {
      storeCanvasOption(this.id);
    });
  });

  const savedCanvas = localStorage.getItem("selectedCanvas");
  if (savedCanvas) {
  }
  //save shoulder option in local

  function storeShoulserOption(id) {
    localStorage.setItem("selectedShoulder", id);
  }

  document
    .querySelectorAll("#shoulder-option > div")
    .forEach((ShoulserOption) => {
      ShoulserOption.addEventListener("click", function () {
        storeShoulserOption(this.id);
      });
    });

  const savedShoulder = localStorage.getItem("selectedShoulder");
  if (savedShoulder) {
  }

  //save amf option in local
  function storeAmfOption(id) {
    localStorage.setItem("selectedAmf", id);
  }

  document.querySelectorAll("#amf-option > div").forEach((AmfOption) => {
    AmfOption.addEventListener("click", function () {
      storeAmfOption(this.id);
    });
  });

  const savedAmf = localStorage.getItem("selectedAmf");
  if (savedAmf) {
  }

  jacketsize.addEventListener("click", () => {
    selectyourjacketsize.style.display = "flex";
    sizeoption.style.display = "none";
    document.getElementById("result").style.display = "none";
  });
  close.addEventListener("click", () => {
    selectyourjacketsize.style.display = "none";
    sizeoption.style.display = "flex";
    // document.getElementById("result").style.display = "block";
  });

  sizeJguide.addEventListener("click", () => {
    jsizechart.style.display = "block";
    selectyourjacketsize.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
  });

  // Select all buttons in the size options
  document
    .querySelectorAll("#selectyourjacketsize .button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        // Get the size from the parent row (first cell)
        const size = button
          .closest("tr")
          .querySelector("td.text-muted-foreground")
          .textContent.trim();
        // Get the number from the button text
        const number = button.textContent.trim();

        // Combine size and number
        const selectedValue = size + number; // e.g., "XXXS30"

        // Store in local storage
        localStorage.setItem("selectedSize", selectedValue);

        // Update the jacket size display
        const jacketSizeDisplay = document.getElementById("jacketsize");
        if (jacketSizeDisplay) {
          jacketSizeDisplay.textContent = `Selected Jacket Size: ${selectedValue}`; // Update with selected size
        }

      });
    });

  // Select all buttons in the trouser size options
  document
    .querySelectorAll("#selectyourtrousersize .button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        // Get the size from the parent row (first cell)
        const size = button
          .closest("tr")
          .querySelector("td.text-muted-foreground")
          .textContent.trim();
        // Get the number from the button text
        const number = button.textContent.trim();

        // Combine size and number
        const selectedValue = size + number; // e.g., "XXXS24"

        // Store in local storage
        localStorage.setItem("selectedTrouserSize", selectedValue);


        // Update the trouser size display
        const trouserSizeDisplay = document.getElementById("trousersize"); // Adjust the ID as needed
        if (trouserSizeDisplay) {
          trouserSizeDisplay.textContent = `Selected Trouser Size: ${selectedValue}`; // Update with selected size
        }
      });
    });

 

  document.getElementById("next").addEventListener("click", () => {

    selectyourjacketsize.style.display = "none";
    sizeoption.style.display = "flex";
  });
  document.getElementById("tnext").addEventListener("click", () => {
    const selectedTrouserSize = localStorage.getItem("selectedTrouserSize");

    // document.getElementById('sizetable').style.display = 'none'
    selectyourtrousersize.style.display = "none";
    // document.getElementById("result").style.display = "block";
    sizeoption.style.display = "flex";
  });

  document.getElementById("closesizechart").addEventListener("click", () => {
    jsizechart.style.display = "none";
    selectyourjacketsize.style.display = "flex";
  });
  document.getElementById("closesize").addEventListener("click", () => {
    tsizechart.style.display = "none";
    selectyourtrousersize.style.display = "flex";
  });
  trousersize.addEventListener("click", () => {
    sizeoption.style.display = "none";
    selectyourtrousersize.style.display = "flex";
    document.getElementById("result").style.display = "none";
  });
  closet.addEventListener("click", () => {
    selectyourtrousersize.style.display = "none";
    sizeoption.style.display = "flex";
  });
  sizetguide.addEventListener("click", () => {
    tsizechart.style.display = "block";
    selectyourtrousersize.style.display = "none";
    document.getElementById("sizetablet").style.display = "block";
  });

  const toggleSwitch = document.getElementById("toggleSwitch");
  const dot = document.querySelector(".dot");
  const measurementTable = document.getElementById("measurementTable");

  // Function to initialize the original values
  function initializeOriginalValues(rows) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = 1; j < cells.length; j++) {
        const originalValue = parseFloat(cells[j].textContent.trim()); // Store original value as a number
        cells[j].setAttribute("data-original-value", originalValue); // Store original value as an attribute
      }
    }
  }

  // Initial setup
  const rows = measurementTable.getElementsByTagName("tr");
  initializeOriginalValues(rows); // Store original values

  // Event listener for toggle switch change
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      dot.textContent = "cm";
      convertToCentimeters(rows); // Convert values to centimeters
    } else {
      dot.textContent = "in";
      convertToInches(rows); // Convert values back to inches
    }
  });

  // Function to convert values to centimeters
  function convertToCentimeters(rows) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = 1; j < cells.length; j++) {
        const originalValue = parseFloat(
          cells[j].getAttribute("data-original-value")
        );
        const convertedValue = originalValue * 2.54; // Convert inches to centimeters
        cells[j].textContent = convertedValue.toFixed(1); // Round to one decimal place
      }
    }
  }

  // Function to convert values back to inches
  function convertToInches(rows) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = 1; j < cells.length; j++) {
        const originalValue = parseFloat(
          cells[j].getAttribute("data-original-value")
        );
        cells[j].textContent = originalValue.toFixed(1); // Display original value as inches
      }
    }
  }
  // toggle for trouser
  const toggleSwitcht = document.getElementById("toggleSwitcht");
  const dott = document.querySelector(".dott");
  const measurementTablet = document.getElementById("measurementTablet");

  // Function to initialize the original values for measurementTablet
  function initializeOriginalValuesTablet(rows) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = 1; j < cells.length; j++) {
        const originalValue = parseFloat(cells[j].textContent.trim()); // Store original value as a number
        cells[j].setAttribute("data-original-value", originalValue); // Store original value as an attribute
      }
    }
  }

  // Function to update table values based on the toggle switcht state
  function updateTabletValues(rows, toCentimeters) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      for (let j = 1; j < cells.length; j++) {
        const originalValue = parseFloat(
          cells[j].getAttribute("data-original-value")
        );
        if (toCentimeters) {
          const convertedValue = originalValue * 2.54; // Convert inches to centimeters
          cells[j].textContent = convertedValue.toFixed(1); // Round to one decimal place
        } else {
          cells[j].textContent = originalValue.toFixed(1); // Display original value as inches
        }
      }
    }
  }

  // Initial setup for measurementTablet
  const rowsTablet = measurementTablet.getElementsByTagName("tr");
  initializeOriginalValuesTablet(rowsTablet); // Store original values

  // Event listener for toggle switcht change for measurementTablet
  toggleSwitcht.addEventListener("change", () => {
    if (toggleSwitcht.checked) {
      dott.textContent = "cm";
      updateTabletValues(rowsTablet, true); // Convert values to centimeters
    } else {
      dott.textContent = "in";
      updateTabletValues(rowsTablet, false); // Display values as inches
    }
  });

  return <></>;
};

export default Configurator;
