import { useState, useEffect } from "react";
import { useCustomization } from "../contexts/Customization";

let isfabric = false;
let selectedSize = null;
let islinig = false;
let isbutton = false;
let ismonogram = false;
const tablinks = document.querySelectorAll(".tablinks");

const Configurator = () => {
  const {} = useCustomization();
  useEffect(() => {
    tabSwitch("linigs"); // Set "linigs" tab as the default open tab
  }, []);

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
        document.getElementById("lining-color").style.display = "none";

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
        document.getElementById("waistcoatoption").style.display = "none";
        document.getElementById("waist").style.display = "none";
        document.getElementById("waistcoat-closure").style.display = "none";
        document.getElementById("confirmclosurew").style.display = "none";
        document.getElementById("waistcoat-style").style.display = "none";
        document.getElementById("confirmstyle").style.display = "none";
        document.getElementById("waistcoat-pocket").style.display = "none";
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
        document.getElementById("confirmclosurew").style.display = "none";
        document.getElementById("waistcoat-style").style.display = "none";
        document.getElementById("confirmstyle").style.display = "none";
        document.getElementById("waistcoat-pocket").style.display = "none";
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
        document.getElementById("lining-color").style.display = "none";
        document.getElementById("buttonContent").style.display = "none";
        document.getElementById("confrmbtn").style.display = "none";
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
    document.getElementById("lining-color").style.display = "none";
    monogrm.style.display = "flex";
    confrmlining.style.display = "none";
    document.getElementById("waist").style.display = "none";
    document.getElementById("tab").style.display = "block";
    document.getElementById("finish").style.display = "block";
  });
  document.getElementById("linigtype").addEventListener("click", () => {
    document.getElementById("lining-menu").style.display = "flex";
    document.getElementById("lining-color").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("liningcolor").addEventListener("click", () => {
    document.getElementById("lining-color").style.display = "flex";
    document.getElementById("lining-menu").style.display = "none";
    monogrm.style.display = "none";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("collarfelt").addEventListener("click", () => {
    console.log("click");
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
  document.getElementById("waistbandheight").addEventListener("click", () => {
    document.getElementById("waistbandheigth-option").style.display = "flex";
    document.getElementById("confirmwaistbandheight").style.display = "block";
    trousr.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("finish").style.display = "none";
  });
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
  document.getElementById("addwaistcoat").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "flex";
    document.getElementById("waist").style.display = "none";
  });
  document.getElementById("closure-waistcoat").addEventListener("click", () => {
    document.getElementById("waistcoat-closure").style.display = "flex";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmclosurew").style.display = "block";
  });
  document.getElementById("confrmclosurew").addEventListener("click", () => {
    document.getElementById("waistcoat-closure").style.display = "none";
    document.getElementById("confirmclosurew").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document.getElementById("style-waistcoat").addEventListener("click", () => {
    document.getElementById("waistcoat-style").style.display = "flex";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmstyle").style.display = "block";
  });
  document.getElementById("confrmstyle").addEventListener("click", () => {
    document.getElementById("waistcoat-style").style.display = "none";
    document.getElementById("confirmstyle").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document.getElementById("pocket-waistcoat").addEventListener("click", () => {
    document.getElementById("waistcoat-pocket").style.display = "flex";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmpocketw").style.display = "block";
  });
  document.getElementById("confrmpocketw").addEventListener("click", () => {
    document.getElementById("waistcoat-pocket").style.display = "none";
    document.getElementById("confirmpocketw").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document
    .getElementById("backstyle-waistcoat")
    .addEventListener("click", () => {
      document.getElementById("waistcoat-backstyle").style.display = "flex";
      document.getElementById("waistcoatoption").style.display = "none";
      document.getElementById("confirmbackstyle").style.display = "block";
    });
  document.getElementById("confrmbackstyle").addEventListener("click", () => {
    document.getElementById("waistcoat-backstyle").style.display = "none";
    document.getElementById("confirmbackstyle").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document
    .getElementById("linigcolor-waistcoat")
    .addEventListener("click", () => {
      document.getElementById("waistcoat-liningcolor").style.display = "flex";
      document.getElementById("waistcoatoption").style.display = "none";
      document.getElementById("confirmlinigcolor").style.display = "block";
    });
  document.getElementById("confrmlinigcolor").addEventListener("click", () => {
    document.getElementById("waistcoat-liningcolor").style.display = "none";
    document.getElementById("confirmlinigcolor").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document.getElementById("button-waistcoat").addEventListener("click", () => {
    document.getElementById("waistcoat-button").style.display = "flex";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("confirmbuttonw").style.display = "block";
  });
  document.getElementById("confrmbuttonw").addEventListener("click", () => {
    document.getElementById("waistcoat-button").style.display = "none";
    document.getElementById("confirmbuttonw").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "flex";
  });
  document.getElementById("removewaistcoat").addEventListener("click", () => {
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("waist").style.display = "block";
  });

  document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("initialsInput");
    const charCount = document.getElementById("charCount");

    input.addEventListener("input", function () {
      const currentLength = input.value.length;
      charCount.textContent = `${currentLength}/15 (${input.value})`;
    });
  });

  const initialsInput = document.getElementById("initialsInput");
  const nextButton = document.getElementById("nextButton");

  initialsInput.addEventListener("input", () => {
    const inputValue = initialsInput.value.trim().length;

    if (inputValue > 0) {
      nextButton.classList.add("bg-gray-300"); // Apply gray background
    } else {
      nextButton.classList.remove("bg-gray-300"); // Remove gray background
    }
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
      left: -100,
      behavior: "smooth",
    });
  });

  document.getElementById("Next").addEventListener("click", function () {
    document.getElementById("sizetable").scrollBy({
      left: 100,
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
  sizeconfirm.addEventListener("click", () => {
    sizeoption.style.display = "none";
    document.getElementById("result").style.display = "none";
    monogrm.style.display = "flex";
    // document.getElementById("tab").style.display = "flex";
    finish.style.display = "none";
    // document.getElementById("fabric").style.display = "flex";
    // document.getElementById("linigs").style.display = "flex";
    // document.getElementById("button").style.display = "flex";
    // document.getElementById("monogram").style.display = "flex";
    document.getElementById("customize").style.display = "block";
    document.getElementById("result").style.display = "block";
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
    // Check if 'finish' element is working
    // console.log('Finish button clicked!');

    // Hide various elements
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
    // document.getElementById('dropdown-menu').style.display = 'none';
    document.getElementById("tab").style.display = "none";
    document.getElementById("waistcoatoption").style.display = "none";
    document.getElementById("liningcontent").style.display = "none";
    document.getElementById("lining-menu").style.display = "none";
    document.getElementById("confrmlining").style.display = "none";
    document.getElementById("lining-color").style.display = "none";
    document.getElementById("buttonContent").style.display = "none";
    document.getElementById("button-menu").style.display = "none";
    document.getElementById("confrmbtn").style.display = "none";
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

    // Check for the existence of values in localStorage
    const ButtonName = localStorage.getItem("ButtonName");
    const selectedLowerPocket = localStorage.getItem("selectedLowerPocket");
    const selectedFabricName = localStorage.getItem("selectedFabricName"); // Example, adjust if needed
    const selectedUpperPocket = localStorage.getItem("selectedUpperPocket");
    const selectedLinig = localStorage.getItem("selectedLinig");
    const selectedCollar = localStorage.getItem("selectedCollar");
    const selectedCanvas = localStorage.getItem("selectedCanvas");
    const selectedShoulder = localStorage.getItem("selectedShoulder");
    const selectedPeak = localStorage.getItem("selectedPeak");
    const selectedNotch = localStorage.getItem("selectedNotch");
    const selectedAmf = localStorage.getItem("selectedAmf");
    const selectedWaistband = localStorage.getItem("selectedWaistband");
    const selectedpleat = localStorage.getItem("selectedpleat");
    const selectedtrouserpocket = localStorage.getItem("selectedtrouserpocket");
    const ButtontName = localStorage.getItem("ButtontName");
    const selectedHem = localStorage.getItem("selectedHem");
    const savedId = localStorage.getItem("waistbandHeightOptionId");
    const savedleg = localStorage.getItem("legLiningOptionId");

    // To retrieve the ID later
    // Display retrieved values in the UI (if available)
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
      resultDiv.innerHTML = `
        <table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <tr>
              <th>Jacket</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Button </td>
              <td>${ButtonName || "Default"}</td>
            </tr>
            <tr>
              <td>Lower-Pocket </td>
              <td>${selectedLowerPocket || "Default"}</td>
            </tr>
            <tr>
              <td>Fabric </td>
              <td>${selectedFabricName || "Default"}</td>
            </tr>
            <tr>
              <td>Upper-Pocket </td>
              <td>${selectedUpperPocket || "Default"}</td>
            </tr>
            <tr>
              <td>Lining </td>
              <td>${selectedLinig || "Default"}</td>
            </tr>
            <tr>
              <td>Collar </td>
              <td>${selectedCollar || "Default"}</td>
            </tr>
            <tr>
              <td>Canvas </td>
              <td>${selectedCanvas || "None selected"}</td>
            </tr>
            <tr>
              <td>Shoulder </td>
              <td>${selectedShoulder || "None selected"}</td>
            </tr>
            <tr>
              <td>Couser-Peak </td>
              <td>${selectedPeak || "None selected"}</td>
            </tr>
            <tr>
              <td>Couser-Notch </td>
              <td>${selectedNotch || "None selected"}</td>
            </tr>
            <tr>
              <td>AMF </td>
              <td>${selectedAmf || "None selected"}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <tr>
              <th>Trouser</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Waistband </td>
              <td>${selectedWaistband || "None selected"}</td>
            </tr>
              <tr>
              <td>Pleat</td>
              <td>${selectedpleat || "None selected"}</td>
            </tr>
             <tr>
              <td>Pocket</td>
              <td>${selectedtrouserpocket || "None selected"}</td>
            </tr>
            <tr>
              <td>Button</td>
              <td>${ButtontName || "None selected"}</td>
            </tr>
            <tr>
              <td>HemFinish</td>
              <td>${selectedHem || "None selected"}</td>
            </tr>
             <tr>
              <td>Waistband Height</td>
              <td>${savedId || "None selected"}</td>
            </tr>
             <tr>
              <td>Leg linig</td>
              <td>${savedleg || "None selected"}</td>
            </tr>
          </tbody>
        </table>
      `;
      resultDiv.style.display = "block"; // Show the result div
    } else {
      console.log("Result div not found");
    }
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
    console.log("Previously selected canvas:", savedCanvas);
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
    console.log("Previously selected canvas:", savedShoulder);
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
    console.log("Previously selected canvas:", savedAmf);
  }

  jacketsize.addEventListener("click", () => {
    selectyourjacketsize.style.display = "flex";
    sizeoption.style.display = "none";
    document.getElementById("result").style.display = "none";
  });
  close.addEventListener("click", () => {
    selectyourjacketsize.style.display = "none";
    sizeoption.style.display = "flex";
  });

  sizeJguide.addEventListener("click", () => {
    jsizechart.style.display = "block";
    selectyourjacketsize.style.display = "none";
    document.getElementById("sizetable").style.display = "block";
  });
  // document.getElementById('next').addEventListener('click',()=>{
  //   document.getElementById('sizetable').style.display = 'none'
  //   document.getElementById('selectedSizeDisplay').style.display='block'
  //   selectyourjacketsize.style.display = 'none'
  //   if (selectedSize) {
  //     // Update the content of the display div with the selected size
  //     document.getElementById('selectedSizeText').textContent = selectedSize;
  // } else {
  //     document.getElementById('selectedSizeText').textContent = 'None'; // Handle the case where no size is selected
  // }

  // })
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
