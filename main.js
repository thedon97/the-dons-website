const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const contactEmail = "thedonjewelersandjewelry@gmail.com";
const phoneDisplay = "(484) 761-2008";
const phoneHref = "tel:+14847612008";
const asset = (name) => `./assets/${name}`;
const instagramHandle = "@los_thejeweler";
const stripePaymentLink = "https://buy.stripe.com/14A5kEeX9aYgfrKfCw5kk00";
const stripeBuyButtonId = "buy_btn_1TfNEEIDIi8H65y0hnHFXCUe";
const stripePublishableKey = "pk_live_51No8sUIDIi8H65y0N5kZTFrlxTiNwt6K6fwrwHMgEN8Ar0Lia9sz9WB6DesqkaZW3PLKbb644frIhDg8AaBpxjYc00Y4RkLz2k";

const baseCarats = [
  ["1 carat", 1900],
  ["1.5 carat", 2160],
  ["2 carat", 2420],
  ["2.5 carat", 2680],
  ["3 carat", 2940],
  ["3.5 carat", 3200],
  ["4 carat", 3460],
  ["4.5 carat", 3720],
  ["5 carat", 3980],
  ["5.5 carat", 4240],
  ["6 carat", 4500],
];
const lunaCarats = [
  ["1 carat", 2200],
  ["1.5 carat", 2460],
  ["2 carat", 2720],
  ["2.5 carat", 2980],
  ["3 carat", 3240],
  ["3.5 carat", 3500],
  ["4 carat", 3760],
  ["4.5 carat", 4020],
  ["5 carat", 4280],
  ["5.5 carat", 4540],
  ["6 carat", 4800],
];
const ovalCarats = [
  ["1 carat", 1600],
  ["1.5 carat", 1860],
  ["2 carat", 2120],
  ["2.5 carat", 2380],
  ["3 carat", 2640],
  ["3.5 carat", 2900],
  ["4 carat", 3160],
  ["4.5 carat", 3420],
  ["5 carat", 3680],
  ["5.5 carat", 3940],
  ["6 carat", 4200],
];
const tennisBraceletPointers = [
  ["10 pointers / approx. 5.5 carats", 1499],
  ["15 pointers", 2399],
  ["20 pointers", 3299],
  ["25 pointers", 4199],
  ["30 pointers", 5099],
  ["35 pointers", 5999],
  ["40 pointers", 6899],
];
const earringCarats = [
  ["1 carat", 650],
  ["1.5 carat", 925],
  ["2 carat", 1300],
  ["2.5 carat", 1675],
  ["3 carat", 2050],
  ["3.5 carat", 2425],
  ["4 carat", 2800],
  ["4.5 carat", 3175],
  ["5 carat", 3550],
  ["5.5 carat", 3925],
  ["6 carat", 4300],
];
const monarchRingCarats = [
  ["1 carat", 1950],
  ["1.5 carat", 2325],
  ["2 carat", 2700],
  ["2.5 carat", 3075],
  ["3 carat", 3450],
  ["3.5 carat", 3825],
  ["4 carat", 4200],
  ["4.5 carat", 4575],
  ["5 carat", 4950],
  ["5.5 carat", 5325],
  ["6 carat", 5700],
];
const queenAureliaCarats = [
  ["1 carat", 2600],
  ["1.5 carat", 3000],
  ["2 carats", 3400],
  ["2.5 carats", 3800],
  ["3 carats", 4200],
  ["3.5 carats", 4600],
  ["4 carats", 5000],
  ["4.5 carats", 5400],
  ["5 carats", 5800],
  ["5.5 carats", 6200],
  ["6 carats", 6600],
];
const ringSizes = ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"];
const metals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"];
const braceletMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"];
const pendantMetals = ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"];
const shapes = ["Round", "Cushion", "Emerald", "Asscher", "Oval", "Pear", "Marquise", "Radiant", "Custom Shape"];
const engagementRingMetalSurcharges = {
  "18K Yellow Gold": 375,
  "18K White Gold": 375,
  "18K Rose Gold": 375,
  Platinum: 625,
};
const diamondTypeOptions = ["Natural Diamond", "Lab-Grown Diamond"];
const quoteMetals = ["14K White Gold", "14K Yellow Gold", "14K Rose Gold", "18K White Gold", "18K Yellow Gold", "18K Rose Gold", "Platinum"];
const quoteCategories = ["Custom Engagement Ring Request", "Custom Tennis Bracelet Request", "Custom Pendant Request", "Custom Chain Request", "Custom Grillz Request", "Custom CAD Project Request", "General Contact Form", "Product Inquiry Form", "Request Custom Design Form"];
const quoteQualityOptions = ["VVS", "VS", "SI", "DE Color", "Natural diamond quote", "Lab-grown diamond quote", "Not sure yet"];
const importedDiamondQualityOptions = ["VVS", "VS"];

const products = [
  {
    id: "queen-aurelia-oval-marquise-ring",
    category: "Engagement Rings",
    name: "Queen Aurelia Oval Marquise Ring",
    price: 2600,
    estimate: 2600,
    image: "queen-aurelia-oval-marquise-ring.jpeg",
    alt: "Oval center diamond engagement ring with marquise side stones and carved band details",
    lede: "A regal oval center diamond engagement ring with marquise side stones set along a carved band, designed with a crown-like basket and elegant side detail for a princess or queen.",
    cta: "Message Us for Custom Queen Aurelia Design",
    fields: [
      ["Diamond Size", queenAureliaCarats],
      ["Center Stone Shape", ["Oval", "Marquise"]],
      ["Side Stone Shape", ["Marquise side stones"]],
      ["Band Detail", ["Carved marquise-side band"]],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Metal", metals],
      ["Ring Size", ringSizes],
    ],
  },
  {
    id: "luna-solitaire",
    category: "Engagement Rings",
    name: "Radiant Cut Diamond Ring with Tapered Baguettes",
    price: 2200,
    estimate: 2200,
    image: "engagement-ring-feature.png",
    alt: "Radiant diamond engagement ring on hand",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    note: "Look below for video preview.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [
      ["Diamond Size", lunaCarats],
      ["Stone Shape", shapes],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Metal", metals],
      ["Ring Size", ringSizes],
    ],
  },
  {
    id: "wedding-band",
    category: "Wedding Bands",
    name: "Classic Plain Wedding Band",
    price: 1800,
    estimate: 1900,
    image: "gold-engagement-rings.png",
    alt: "Gold wedding bands in a black jewelry box",
    lede: "Choose your band metal and exact ring size for a clean classic plain wedding band request.",
    cta: "Message Us for Custom Band Design",
    fields: [["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "ready-engagement-ring-4662",
    category: "Engagement Rings",
    name: "Classic Oval Engagement Ring",
    price: 1600,
    estimate: 1600,
    image: "ready-made-engagement-ring-4662.jpg",
    alt: "Ready-made diamond engagement ring",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", ovalCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "classic-marquise-engagement-ring",
    category: "Engagement Rings",
    name: "Classic Marquise Engagement Ring",
    price: 1600,
    estimate: 1600,
    image: "classic-marquise-engagement-ring.jpeg",
    alt: "Classic marquise diamond engagement ring in jewelry box",
    lede: "Select a diamond size, marquise stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", ovalCarats], ["Stone Shape", ["Marquise"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "gold-halo-engagement-ring",
    category: "Engagement Rings",
    name: "Eternal Marquise Halo Ring",
    price: 1900,
    estimate: 1900,
    image: "gold-halo-engagement-ring.jpeg",
    alt: "Gold diamond halo engagement ring with diamond band",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Marquise", "Oval", "Round"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "pink-oval-engagement-ring",
    category: "Engagement Rings",
    name: "Monarch Pink\u2122 Diamond Ring",
    price: 1950,
    estimate: 1950,
    image: "pink-oval-engagement-ring.jpeg",
    alt: "Pink oval center stone engagement ring in black jewelry box",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", monarchRingCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "yellow-oval-diamond-ring",
    category: "Engagement Rings",
    name: "Monarch Canary Oval Ring",
    price: 1950,
    estimate: 1950,
    image: "yellow-oval-diamond-ring.jpeg",
    alt: "Yellow oval diamond engagement ring with pave diamond band",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", monarchRingCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "radiant-solitaire-engagement-ring",
    category: "Engagement Rings",
    name: "The Classic Radiant Ring",
    price: 2200,
    estimate: 2200,
    image: "radiant-solitaire-engagement-ring.jpeg",
    alt: "Radiant cut diamond solitaire engagement ring on a gold band",
    lede: "Select a diamond size, radiant stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", lunaCarats], ["Stone Shape", ["Radiant"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "emerald-accent-engagement-ring",
    category: "Engagement Rings",
    name: "Infinity Eclipse Ring",
    price: 1900,
    estimate: 1900,
    image: "emerald-accent-engagement-ring.jpeg",
    alt: "Round diamond engagement ring with green emerald accent stones",
    lede: "Select a diamond size, stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Round", "Oval", "Radiant"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "imperial-bloom-engagement-ring",
    category: "Engagement Rings",
    name: "Imperial Bloom Engagement Ring",
    price: 1900,
    estimate: 1900,
    image: "imperial-bloom-engagement-ring.jpeg",
    alt: "Oval diamond engagement ring with floral diamond accents on a gold band",
    lede: "Select a diamond size, oval stone shape, diamond color, clarity, metal, and exact ring size. Your luxury engagement ring summary updates instantly.",
    cta: "Message Us for Custom Design / Custom Stone Size",
    fields: [["Diamond Size", baseCarats], ["Stone Shape", ["Oval"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Ring Size", ringSizes]],
  },
  {
    id: "celeste-halo",
    category: "Earrings",
    name: "Princess Diamond Studs",
    price: 650,
    estimate: 650,
    image: "princess-diamond-earrings.png",
    alt: "Princess cut diamond earrings held with a white glove",
    lede: "Select total diamond weight, diamond color, clarity, metal, and earring type for a premium earring quote.",
    cta: "Message Us for Custom Earrings",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "round-diamond-studs",
    category: "Earrings",
    name: "Round Diamond Stud Earrings",
    price: 650,
    estimate: 650,
    image: "round-diamond-studs.jpeg",
    alt: "Round diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, metal, and stud setting for a custom round diamond earring quote.",
    cta: "Message Us for Custom Round Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "round-martini-diamond-studs",
    category: "Earrings",
    name: "Round Martini Set Diamond Studs",
    price: 650,
    estimate: 650,
    image: "round-martini-diamond-studs.png",
    alt: "Round martini set diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round martini set diamond stud quote.",
    cta: "Message Us for Custom Martini Set Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "yellow-canary-diamond-studs",
    category: "Earrings",
    name: "Yellow Canary Diamond Studs",
    price: 750,
    estimate: 750,
    image: "yellow-canary-diamond-studs.jpeg",
    alt: "Yellow canary diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Yellow Canary Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "pink-monarch-diamond-studs",
    category: "Earrings",
    name: "Pink Monarch Diamond Studs",
    price: 750,
    estimate: 750,
    image: "pink-monarch-diamond-studs.jpeg",
    alt: "Pink monarch diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Pink Monarch Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "blue-monarch-diamond-studs",
    category: "Earrings",
    name: "Blue Monarch Diamond Studs",
    price: 750,
    estimate: 750,
    image: "blue-monarch-diamond-studs.jpeg",
    alt: "Blue monarch diamond stud earrings",
    lede: "Select total diamond weight, diamond color, clarity, and metal for a custom round colored diamond stud quote.",
    cta: "Message Us for Custom Blue Monarch Diamond Studs",
    metalSurcharges: {
      "18K Yellow Gold": 325,
      "18K White Gold": 325,
      "18K Rose Gold": 325,
      Platinum: 600,
    },
    fields: [["Total Diamond Weight", earringCarats], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", metals], ["Type of Earring", ["Stud"]]],
  },
  {
    id: "marquise-arc",
    category: "Necklaces",
    name: "Red Ruby Diamond Halo Necklace",
    price: 1250,
    estimate: 1250,
    image: "red-diamond-necklace.png",
    alt: "Red ruby diamond halo necklace pendant on a jewelry glove",
    lede: "One-size ruby diamond halo necklace with a 7-carat ruby, approximately 1 carat of diamonds around the halo and bail, and a 14K chain included.",
    cta: "Message Us for Custom Necklace Design",
    metalSurcharges: {
      "18K Yellow Gold": 375,
      "18K White Gold": 375,
      "18K Rose Gold": 375,
      Platinum: 600,
    },
    fields: [
      ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"]],
      ["Ruby Size", ["7-carat ruby"]],
      ["Diamond Halo", ["Approx. 1 carat of diamonds in halo and bail"]],
      ["Diamond Color", ["D", "E", "F"]],
      ["Clarity", ["VVS", "VS"]],
      ["Necklace Style", ["Ruby diamond halo pendant necklace"]],
      ["Chain Included", ["14K chain included"]],
    ],
  },
  {
    id: "silver-cross-chain",
    category: "Chains",
    name: "Silver Cross + Chain",
    price: 925,
    estimate: 1245,
    image: "silver-cross-chain.png",
    alt: "Silver cross pendant and chain with blue stones",
    lede: "Choose chain size, stone type, diamond color, clarity, and chain style for this Silver Cross + Chain request.",
    cta: "Message Us for Custom Chain Design",
    extraCta: "Contact and Make a Special Request",
    fields: [["Chain Size", ["18 in", "20 in", "22 in", "24 in", "26 in", "30 in"]], ["Metal", ["Silver"]], ["Stone Type", ["Emerald", "Ruby", "Sapphire", "Diamond", "Aquamarine", "Tourmaline", "Topaz", "Amethyst", "Peridot"]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Chain Style", ["Rope", "Cuban", "Tennis", "Box", "Figaro", "Mooncut", "Franco"]]],
  },
  {
    id: "thirty-pointer-diamond-cross",
    category: "Pendants / Charms",
    name: "30-Pointer Diamond Cross",
    price: 1375,
    estimate: 1375,
    image: "thirty-pointer-diamond-cross.jpeg",
    alt: "Diamond cross pendant charm",
    lede: "Made to order diamond cross pendant with 11 stones, all 30-pointers, an iced-out bail, approximately 4.87 grams of gold, and approximately 2.3 carats of VVS diamonds.",
    cta: "Message Us for Custom Pendant / Charm Design",
    metalSurcharges: {
      "18K Yellow Gold": 375,
      "18K White Gold": 375,
      "18K Rose Gold": 375,
      Platinum: 625,
      Silver: 0,
    },
    fields: [["Diamond Size", [["30 pointers", 1375]]], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Metal", pendantMetals], ["Pendant Style", ["Iced-Out Bail Cross"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "ever-band",
    category: "Bracelets",
    name: "Build Your Own Diamond Tennis Bracelet",
    price: 1499,
    estimate: 1499,
    image: "diamond-bracelet.png",
    alt: "Diamond tennis bracelet displayed on a white glove",
    lede: "Choose bracelet length, metal, pointer size, diamond color, clarity, and tennis bracelet style for a custom bracelet quote.",
    cta: "Message Us for Custom Bracelet Design",
    fields: [["Bracelet Size", ["Starting at 7 inches", "7.5 inches", "Custom Size - Message Request"]], ["Metal", braceletMetals], ["Diamond Size", tennisBraceletPointers], ["Diamond Color", ["D", "E", "F"]], ["Clarity", ["VVS", "VS"]], ["Bracelet Style", ["Tennis"]]],
  },
  {
    id: "triple-row-diamond-tennis-bracelet",
    category: "Chains",
    name: "30-Pointer Diamond Tennis Chain",
    price: 8200,
    estimate: 8200,
    image: "triple-row-diamond-tennis-bracelet.jpeg",
    alt: "30 pointer diamond tennis chain on white tissue",
    lede: "A 22-inch 30-pointer diamond tennis chain with approximately 126 stones. At 0.30 carats per stone, the approximate total diamond weight is 37.8 carats.",
    cta: "Message Us for 30-Pointer Tennis Chain Quote",
    fields: [["Chain Length", ["16 in", "18 in", "20 in", "22 in", "24 in"]], ["Metal", pendantMetals], ["Diamond Size", ["30 pointers"]], ["Stone Count", ["Approx. 126 stones at 22 inches"]], ["Approx. Total Carat Weight", ["37.8 carats at 22 inches"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E"]], ["Chain Style", ["Tennis chain"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "yellow-gold-diamond-cuban-link-ring",
    category: "Rings",
    name: "Yellow Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "yellow-gold-diamond-cuban-link-ring.jpeg",
    alt: "Yellow gold diamond Cuban link ring in black jewelry box",
    lede: "A bold Miami Cuban link ring with diamond-set links, built as a custom statement ring in your selected metal, width, diamond weight, and ring size.",
    cta: "Message Us for Cuban Link Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
      Silver: -1700,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum", "Silver"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
  {
    id: "white-gold-diamond-cuban-link-bracelet",
    category: "Rings",
    name: "White Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "white-gold-diamond-cuban-link-bracelet.jpeg",
    alt: "White gold diamond Cuban link ring on black background",
    lede: "A white gold Miami Cuban link ring with diamond-set link faces, made to order by ring size, metal, diamond weight, and setting style.",
    cta: "Message Us for Diamond Cuban Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
      Silver: -1700,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K White Gold", "14K Yellow Gold", "14K Rose Gold", "18K White Gold", "18K Yellow Gold", "18K Rose Gold", "Platinum", "Silver"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
  {
    id: "gemstone-leaf-wedding-band-set",
    category: "Rings",
    name: "Royal Flora Ruby & Sapphire Diamond Ring",
    price: 1350,
    estimate: 1350,
    image: "gemstone-leaf-wedding-band-set.jpeg",
    alt: "Gold floral filigree rings with ruby and sapphire accents",
    lede: "A filigree floral design ring with diamond accents and your choice of ruby, emerald, or sapphire gemstones. Choose a single ring or pair of rings in 14K, 18K, or platinum.",
    cta: "Message Us for Floral Gemstone Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 375,
      "18K White Gold": 375,
      "18K Rose Gold": 375,
      Platinum: 625,
    },
    fields: [["Ring Option", [["Single Ring", 1350], ["Pair of Rings", 2450]]], ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"]], ["Ring Size", ringSizes], ["Center Gemstone", ["Ruby", "Emerald", "Sapphire"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Ring Style", ["Filigree floral design"]], ["Production", ["Made to Order"]]],
  },
  {
    id: "yellow-gold-diamond-cuban-link-bracelet",
    category: "Rings",
    name: "Yellow Gold Diamond Cuban Link Ring",
    price: 2800,
    estimate: 2800,
    image: "yellow-gold-diamond-cuban-link-bracelet.jpeg",
    alt: "Yellow gold diamond Cuban link ring on black background",
    lede: "A yellow gold Miami Cuban link ring with diamond-set link faces, made to order by ring size, metal, diamond weight, and setting style.",
    cta: "Message Us for Diamond Cuban Ring Quote",
    metalSurcharges: {
      "18K Yellow Gold": 425,
      "18K White Gold": 425,
      "18K Rose Gold": 425,
      Platinum: 850,
    },
    fields: [["Diamond Weight", [["6mm / approx. 1.50 ctw", 2800], ["8mm / approx. 2.50 ctw", 3950], ["10mm / approx. 4.00 ctw", 5650], ["12mm / approx. 5.50 ctw", 7250], ["14mm / approx. 7.00 ctw", 9250]]], ["Metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Platinum"]], ["Ring Size", ringSizes], ["Diamond Cut", ["Round"]], ["Diamond Quality", ["VVS", "VS"]], ["Diamond Color", ["D", "E", "F"]], ["Setting", ["Prong", "Micro pave", "Two row pave"]], ["Gram Weight Estimate", ["Light ring build", "Medium ring build", "Heavy ring build", "Request exact gram quote"]], ["Production Time", ["Made to Order - 10 to 15 business days"]]],
  },
];

const diamondOriginByProduct = {
  "queen-aurelia-oval-marquise-ring": "LGD",
  "luna-solitaire": "LGD",
  "ready-engagement-ring-4662": "LGD",
  "classic-marquise-engagement-ring": "LGD",
  "gold-halo-engagement-ring": "LGD",
  "pink-oval-engagement-ring": "LGD",
  "yellow-oval-diamond-ring": "LGD",
  "radiant-solitaire-engagement-ring": "LGD",
  "emerald-accent-engagement-ring": "LGD",
  "imperial-bloom-engagement-ring": "LGD",
  "celeste-halo": "LGD",
  "round-diamond-studs": "LGD",
  "round-martini-diamond-studs": "LGD",
  "yellow-canary-diamond-studs": "LGD",
  "pink-monarch-diamond-studs": "LGD",
  "blue-monarch-diamond-studs": "LGD",
  "marquise-arc": "LGD",
  "ever-band": "LGD",
  "thirty-pointer-diamond-cross": "LGD",
  "triple-row-diamond-tennis-bracelet": "LGD",
  "yellow-gold-diamond-cuban-link-ring": "LGD",
  "white-gold-diamond-cuban-link-bracelet": "LGD",
  "gemstone-leaf-wedding-band-set": "LGD",
  "yellow-gold-diamond-cuban-link-bracelet": "LGD",
};

function storedImportProducts() {
  try {
    return JSON.parse(localStorage.getItem("donApprovedInstagramProducts") || "[]").map((product) => ({
      ...product,
      category: normalizeImportCategory(product.category),
    }));
  } catch {
    return [];
  }
}

function allProducts() {
  return [...products, ...storedImportProducts(), ...approvedPreviewProducts];
}

function productImageSrc(product) {
  if (product.imageUrl) return product.imageUrl;
  if (product.image && String(product.image).startsWith("/")) return product.image;
  return asset(product.image || "don-logo.jpg");
}

function cartImageSrc(item) {
  if (!item.image) return asset("don-logo.jpg");
  if (String(item.image).startsWith("/") || String(item.image).startsWith("data:")) return item.image;
  return asset(item.image);
}

function productName(product) {
  const origin = diamondOriginByProduct[product.id];
  return origin ? `${product.name} (${origin})` : product.name;
}

function htmlSafe(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function safeExternalUrl(value) {
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function selectedLiveDiamondFor(productId) {
  try {
    return JSON.parse(localStorage.getItem(`donLiveDiamond:${productId}`) || "null");
  } catch {
    return null;
  }
}

function liveDiamondLabel(diamond) {
  if (!diamond) return "No live diamond selected yet";
  if (!diamond.shape && diamond.details) return diamond.details;
  return `${diamond.shape || "Diamond"} ${diamond.carat ? `${diamond.carat}ct` : ""} ${diamond.color ? `${diamond.color} color` : ""} ${diamond.clarity || ""}`.replace(/\s+/g, " ").trim();
}

async function loadApprovedProducts() {
  approvedPreviewProducts = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
}

function diamondOriginNote(product) {
  if (!diamondOriginByProduct[product.id]) return "";
  return `<p class="diamond-origin-note">Items marked <strong>(LGD)</strong> use lab-grown diamonds. Items marked <strong>(N)</strong> use natural diamonds. All items on this website are made to order.</p>`;
}

function engagementCertificationNote(product) {
  if (product.category !== "Engagement Rings") return "";
  return `<p class="diamond-origin-note">All engagement rings include IGI or GIA certified diamond paperwork and an appraisal for the ring itself.</p>`;
}

function productFields(product) {
  if (!diamondOriginByProduct[product.id]) return product.fields;
  return [["Diamond Type", diamondTypeOptions], ...product.fields];
}

function startingText(product) {
  if (product.priceLabel) return product.priceLabel;
  if (product.price === "Request Pricing" || product.estimate === null) return "Request Pricing";
  const pricedGroup = (product.fields || []).find(([, values]) => values.every(Array.isArray));
  if (!pricedGroup) return `Starting at ${money.format(product.price)}`;
  const [label, values] = pricedGroup;
  const [option, basePrice] = values[0];
  const price = basePrice + (product.estimate - basePrice);
  const context = label.toLowerCase().includes("diamond") ? option : `${label.toLowerCase()} ${option}`;
  return `Starting at ${money.format(price)} for ${context}`;
}

const categories = [
  ["rings", "Rings", "yellow-gold-diamond-cuban-link-ring.jpeg"],
  ["engagement-rings", "Engagement Rings", "engagement-ring-feature.png"],
  ["select-diamond", "Live Diamond Selection", "diamond-banner.jpg"],
  ["wedding-bands", "Wedding Bands", "gold-engagement-rings.png"],
  ["necklaces", "Necklaces", "red-diamond-necklace.png"],
  ["chains", "Chains", "silver-cross-chain.png"],
  ["pendants-charms", "Pendants / Charms", "silver-cross-chain.png"],
  ["earrings", "Earrings", "princess-diamond-earrings.png"],
  ["bracelets", "Bracelets", "diamond-bracelet.png"],
  ["custom-orders", "Custom Orders", "don-logo.jpg"],
];

let cart = JSON.parse(localStorage.getItem("donCart") || "[]");
let selections = {};
let approvedPreviewProducts = [];
const splashStartedAt = Date.now();
let liveDiamondInventory = [];
let diamondRetryTimer = null;
const allowedDiamondColors = new Set(["D", "E", "F"]);
const allowedDiamondClarities = new Set(["VS1", "VS2", "VVS1", "VVS2"]);

function hideSplashScreen() {
  const splash = document.getElementById("site-splash");
  if (!splash) return;
  const minimumVisibleMs = 1800;
  const remaining = Math.max(0, minimumVisibleMs - (Date.now() - splashStartedAt));
  window.setTimeout(() => {
    splash.classList.add("is-hiding");
    window.setTimeout(() => splash.remove(), 900);
  }, remaining);
}

function navLinks() {
  return `
    <a href="#/">Home</a>
    <a href="#/category/rings">Rings</a>
    <a href="#/category/engagement-rings">Engagement Rings</a>
    <a href="#/select-diamond">Live Diamond Selection</a>
    <a href="#/category/wedding-bands">Wedding Bands</a>
    <a href="#/category/necklaces">Necklaces</a>
    <a href="#/category/chains">Chains</a>
    <a href="#/category/pendants-charms">Pendants / Charms</a>
    <a href="#/category/earrings">Earrings</a>
    <a href="#/category/bracelets">Bracelets</a>
    <a class="nav-highlight" href="#/custom-orders">Custom Orders</a>
    <a href="#/cart">Cart <span class="cart-pill">${cart.length}</span></a>
  `;
}

function shell(main) {
  document.getElementById("app").innerHTML = `
    <header class="site-header">
      <button class="brand brand-menu-button" type="button" id="sidebar-open" aria-label="Open site menu" aria-controls="site-sidebar" aria-expanded="false">
        <span class="brand-mark" aria-hidden="true">TD</span>
        <span class="brand-copy"><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">${navLinks()}</nav>
    </header>
    <div class="sidebar-backdrop" id="sidebar-backdrop" hidden></div>
    <aside class="site-sidebar" id="site-sidebar" aria-label="Site menu" aria-hidden="true">
      <div class="sidebar-head">
        <span class="sidebar-brand"><span class="brand-mark" aria-hidden="true">TD</span><span><strong>The Don Jewelers & Jewelry</strong><small>Luxury custom jewelry</small></span></span>
        <button class="sidebar-close" type="button" id="sidebar-close" aria-label="Close site menu">Close</button>
      </div>
      <nav class="sidebar-links" aria-label="Sidebar navigation">${navLinks()}</nav>
    </aside>
    ${main}
    ${footer()}
  `;
  wireSidebar();
}

function footer() {
  return `
    <footer class="site-footer">
      <div>
        <strong>The Don Jewelers & Jewelry</strong>
        <p>Luxury jewelry discovery, custom previews, and future-ready checkout architecture.</p>
      </div>
      <div class="footer-contact">
        <strong>Contact for quotes</strong>
        <a href="${phoneHref}">${phoneDisplay}</a>
        <a href="mailto:${contactEmail}">${contactEmail}</a>
        <span>Call, text, or email for custom orders and additional questions.</span>
      </div>
      <div class="footer-links">
        <a href="#/products">Shop Now</a>
        <a href="#/request/contact">General Contact</a>
        <a href="#/admin">Admin Dashboard</a>
        <a href="#/checkout">Checkout</a>
        <a href="#/terms">Terms and Conditions</a>
        <a href="https://peoplesartist.org/2026/carlos-gonzalez">People's Artist</a>
        <span class="deploy-version">Updated Render build v85 - custom request routing</span>
      </div>
    </footer>
  `;
}

function wireSidebar() {
  const sidebar = document.getElementById("site-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const open = () => {
    sidebar.classList.add("is-open");
    sidebar.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
    document.getElementById("sidebar-open").setAttribute("aria-expanded", "true");
  };
  const close = () => {
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
    document.getElementById("sidebar-open").setAttribute("aria-expanded", "false");
  };
  document.getElementById("sidebar-open").addEventListener("click", open);
  document.getElementById("sidebar-close").addEventListener("click", close);
  backdrop.addEventListener("click", close);
  sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
}

function productCard(product) {
  return `
    <article class="product-card">
      <a href="#/product/${product.id}" class="product-image-link" aria-label="Customize ${productName(product)}">
        <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}" loading="lazy">
      </a>
      <div class="product-card-body">
        <p class="eyebrow">${product.category}</p>
        <h3>${productName(product)}</h3>
        <p class="muted">${startingText(product)}</p>
        <div class="card-actions"><a class="button button-dark" href="#/product/${product.id}">${product.imported ? "View Details" : "Shop Item"}</a></div>
      </div>
    </article>
  `;
}

function pageHero(eyebrow, heading, body = "", action = "") {
  return `
    <section class="page-hero compact">
      <img class="page-hero-logo" src="${asset("don-logo.jpg")}" alt="The Don Jewelers and Jewelry logo">
      <p class="eyebrow">${eyebrow}</p>
      <h1>${heading}</h1>
      ${body ? `<p class="product-description">${body}</p>` : ""}
      ${action}
    </section>
  `;
}

function aboutUs() {
  return `
    <section class="about-us">
      <p class="eyebrow">About Us</p>
      <h2>Made for a better jewelry search</h2>
      <p>
        At The Don Jewelers & Jewelry, we are striving to give every client the best experience possible
        while searching for a piece that feels personal, memorable, and true to them. We work hard to make
        sure you feel supported from first look to final selection, whether your new jewelry marks a special
        moment, completes a style, or becomes part of your identity.
      </p>
    </section>
  `;
}

function customOrderBand() {
  return `
    <section class="custom-order-band">
      <div>
        <p class="eyebrow">Custom Orders</p>
        <h2>Looking for something 1-of-1?</h2>
        <p>Message us for custom designs, custom stone sizes, custom shapes, and full custom jewelry projects. For quotes or additional questions, call or text ${phoneDisplay} or email ${contactEmail}.</p>
      </div>
      <div class="custom-order-actions">
        <a class="button button-gold" href="#/custom-orders">Start Custom Order</a>
        <a class="button button-light" href="#/custom-orders">Message Us for Custom Design</a>
        <a class="button button-dark" href="#/request/contact">General Contact</a>
      </div>
    </section>
  `;
}

function home() {
  shell(`
    <main>
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow">Luxury engagement rings and custom jewelry</p>
          <h1>The Don Jewelers & Jewelry</h1>
          <p>Build your engagement ring, select high-end diamond jewelry, or start a one-of-one custom order with a premium client experience from first idea to final piece.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#/build-engagement-ring">Build Your Engagement Ring</a>
            <a class="button button-ghost" href="#/custom-orders">Message Us for Custom Design</a>
          </div>
        </div>
      </section>
      <section class="section engagement-feature">
        <div>
          <p class="eyebrow">Engagement Rings</p>
          <h2>Start with the ring</h2>
          <p>Select diamond size, stone shape, color, clarity, metal, and exact ring size. Built for serious buyers who want a clear luxury quote before moving forward.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#/build-engagement-ring">Build Your Engagement Ring</a>
            <a class="button button-light" href="#/category/engagement-rings">View Engagement Rings</a>
          </div>
        </div>
        <div class="ring-showcase" aria-label="Featured engagement rings">
          ${["queen-aurelia-oval-marquise-ring", "pink-oval-engagement-ring", "yellow-oval-diamond-ring", "gold-halo-engagement-ring"].map((id) => productCard(allProducts().find((product) => product.id === id))).join("")}
        </div>
      </section>
      <section class="section">
        <div class="section-heading">
          <p class="eyebrow">Luxury Categories</p>
          <h2>Browse by jewelry type</h2>
        </div>
        <div class="collection-grid">
          ${categories.map(([slug, name, image]) => `
            <a class="collection-tile" href="#/${slug === "custom-orders" || slug === "select-diamond" ? slug : `category/${slug}`}">
              <img src="${asset(image)}" alt="${name}">
              <span>${name}</span>
            </a>
          `).join("")}
        </div>
      </section>
      ${customOrderBand()}
      <section class="trust-band" aria-label="Trust badges">
        <div><strong>Secure browsing</strong><span>Checkout handoff ready</span></div>
        <div><strong>Curated luxury pieces</strong><span>Custom options on every item</span></div>
        <div><strong>Custom sizing</strong><span>Sizes tailored by item type</span></div>
      </section>
      ${aboutUs()}
    </main>
  `);
}

function productGrid(list, title, body = "", action = "") {
  shell(`
    <main>
      ${pageHero("Jewelry Marketplace", title, body, action)}
      <section class="product-grid">${list.map(productCard).join("")}</section>
      ${aboutUs()}
    </main>
  `);
}

function category(slug) {
  if (slug === "select-diamond") return diamondInventoryPage();
  const categoryLabels = {
    "tennis-bracelets": "Tennis Bracelets",
    pendants: "Pendants / Charms",
    grillz: "Grillz",
    watches: "Watches",
    "custom-jewelry": "Custom Jewelry",
    "gold-buying-services": "Gold Buying / Services",
  };
  if (slug === "rings") {
    productGrid(allProducts().filter((p) => ["Rings", "Engagement Rings", "Wedding Bands"].includes(p.category)), "Browse all rings from The Don", "Explore Cuban link rings, floral gemstone rings, engagement rings, and wedding bands in one place.");
    return;
  }
  const names = {
    "engagement-rings": "Build your engagement ring with The Don",
    "select-diamond": "Live Diamond Selection",
    "wedding-bands": "Shop Wedding Bands with The Don",
    necklaces: "Shop Necklaces with The Don",
    chains: "Shop Chains with The Don",
    earrings: "Shop Earrings with The Don",
    bracelets: "Shop Bracelets with The Don",
    "pendants-charms": "Shop Pendants / Charms with The Don",
  };
  const label = categories.find(([id]) => id === slug)?.[1] || categoryLabels[slug];
  const list = slug === "pendants-charms"
    ? allProducts().filter((p) => ["Pendants / Charms", "Pendants"].includes(p.category) || ["silver-cross-chain", "marquise-arc"].includes(p.id))
    : slug === "bracelets"
      ? allProducts().filter((p) => ["Bracelets", "Tennis Bracelets"].includes(p.category))
      : allProducts().filter((p) => p.category === label);
  const action = slug === "engagement-rings" ? `<a class="button button-gold" href="#/build-engagement-ring">Build Your Engagement Ring</a>` : "";
  const body = slug === "engagement-rings" ? "All engagement rings include IGI or GIA certified diamond paperwork and an appraisal for the ring itself." : "";
  productGrid(list, names[slug] || `Shop ${label || "All Luxury Jewelry"} with The Don`, body, action);
}

function diamondSpecs(diamond) {
  return [
    diamond.shape,
    diamond.carat ? `${diamond.carat} ct` : "",
    diamond.color ? `${diamond.color} color` : "",
    diamond.clarity,
    diamond.cut,
    diamond.certificate ? `${diamond.certificate} certified` : "",
    diamond.reportNumber ? `Report ${diamond.reportNumber}` : "",
    diamond.measurements ? `Measurements ${diamond.measurements}` : "",
    diamond.availability ? `Availability ${diamond.availability}` : "",
  ].filter(Boolean).join(" | ");
}

function diamondMediaLinks(diamond) {
  const vendorLinks = Array.isArray(diamond.mediaLinks) ? diamond.mediaLinks.map((link) => [link.label || "View Vendor Link", link.url, link.type || "media"]) : [];
  const directLinks = [
    ["View Diamond Photo", diamond.imageUrl || diamond.mediaUrl, "image"],
    ["View Diamond Video", diamond.videoUrl, "video"],
    ["View IGI Report", diamond.reportUrl, "report"],
  ];
  const seen = new Set();
  const links = [...directLinks, ...vendorLinks].filter(([, url]) => {
    const safeUrl = safeExternalUrl(url);
    if (!safeUrl || seen.has(safeUrl)) return false;
    seen.add(safeUrl);
    return true;
  });
  return links.length
    ? `<div class="diamond-media-links">${links.map(([label, url, type]) => `<a class="button button-light" href="${htmlSafe(url)}" data-direct-media="${htmlSafe(url)}" data-media-type="${htmlSafe(type)}">${htmlSafe(label)}</a>`).join("")}</div>`
    : `<p class="quote-note">Vendor image, video, and grading report links will show here when provided by the live API feed.</p>`;
}

function showDiamondMediaModal({ url, type = "media", label = "Diamond media" }) {
  const safeUrl = safeExternalUrl(url);
  if (!safeUrl) return;
  document.querySelector(".diamond-media-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "diamond-media-modal";
  const isImage = type === "image" || /\.(jpe?g|png|webp|gif)(\?|$)/i.test(safeUrl);
  const isVideoFile = /\.(mp4|webm|mov)(\?|$)/i.test(safeUrl);
  const reportMatch = safeUrl.match(/([A-Z]{1,4}\d{5,})/i);
  const reportNumber = reportMatch ? reportMatch[1].toUpperCase() : "";
  const media = isImage
    ? `<img class="diamond-media-preview-image" src="${htmlSafe(safeUrl)}" alt="${htmlSafe(label)}">`
    : isVideoFile
      ? `<video class="diamond-media-preview-video" src="${htmlSafe(safeUrl)}" controls playsinline></video>`
      : `<iframe class="diamond-media-preview-frame" src="${htmlSafe(safeUrl)}" title="${htmlSafe(label)}"></iframe>`;
  modal.innerHTML = `
    <div class="diamond-media-dialog" role="dialog" aria-modal="true" aria-label="${htmlSafe(label)}">
      <button class="natural-diamond-close" type="button" aria-label="Close media preview">Close</button>
      <p class="eyebrow">Live Diamond Media</p>
      <h2>${htmlSafe(label)}</h2>
      ${type === "report" && reportNumber ? `<p class="diamond-report-number">IGI Report Number: <strong>${htmlSafe(reportNumber)}</strong></p>` : ""}
      <div class="diamond-media-preview">${media}</div>
      <p class="quote-note">If the vendor blocks the preview, open the original vendor link below.</p>
      <div class="builder-actions">
        <a class="button button-gold" href="${htmlSafe(safeUrl)}" target="_blank" rel="noopener">Open Original Link</a>
        <a class="button button-light" href="${htmlSafe(safeUrl)}">Open in This Tab</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".natural-diamond-close")?.addEventListener("click", close);
}

function diamondInventoryCard(diamond) {
  const imageUrl = safeExternalUrl(diamond.imageUrl || diamond.mediaUrl);
  return `
    <article class="diamond-inventory-card" data-diamond-id="${htmlSafe(diamond.id)}" data-shape="${htmlSafe(diamond.shape)}" data-carat="${htmlSafe(diamond.carat || "")}" data-color="${htmlSafe(diamond.color)}" data-clarity="${htmlSafe(diamond.clarity)}" data-certificate="${htmlSafe(diamond.certificate)}" data-report-number="${htmlSafe(diamond.reportNumber || "")}" data-measurements="${htmlSafe(diamond.measurements || "")}" data-availability="${htmlSafe(diamond.availability || "")}">
      ${imageUrl ? `<img class="diamond-inventory-image" src="${htmlSafe(imageUrl)}" alt="${htmlSafe(`${diamond.shape || "Lab-grown"} diamond`)}">` : ""}
      <div>
        <p class="eyebrow">Lab-Grown Diamond</p>
        <h3>${htmlSafe(diamond.shape)} ${diamond.carat ? `${diamond.carat}ct` : ""} Diamond</h3>
        <p class="muted">${htmlSafe(diamondSpecs(diamond))}</p>
        ${diamond.reportNumber ? `<p class="diamond-report-pill">IGI Report # ${htmlSafe(diamond.reportNumber)}</p>` : ""}
      </div>
      ${diamondMediaLinks(diamond)}
      <div class="builder-actions">
        <button class="button button-gold" type="button" data-select-diamond="${diamond.id}">Select Diamond</button>
      </div>
    </article>
  `;
}

function diamondInventoryPage(initialParams = new URLSearchParams()) {
  const selectedShape = initialParams.get("shape") || "all";
  const selectedColor = initialParams.get("color") || "all";
  const selectedClarity = initialParams.get("clarity") || "all";
  const option = (value, selected) => `<option value="${htmlSafe(value)}" ${String(value).toLowerCase() === String(selected).toLowerCase() ? "selected" : ""}>${htmlSafe(value === "all" ? "All shapes" : value)}</option>`;
  shell(`
    <main>
      ${pageHero("Live Diamond Inventory", "Select your lab-grown diamond", "Browse live lab-grown diamond specs, images, video links, and grading reports from the vendor feed. Diamond pricing is not shown online.")}
      <section class="diamond-inventory-section">
        <form class="diamond-filter-bar" id="diamond-filter-form">
          <label>Shape
            <select name="shape">
              ${["all", "Round", "Oval", "Marquise", "Radiant", "Emerald", "Pear", "Cushion", "Princess", "Asscher"].map((shape) => option(shape, selectedShape)).join("")}
            </select>
          </label>
          <label>Minimum carat<input name="minCarat" type="number" min="1" step="0.1" placeholder="Over 1" value="${htmlSafe(initialParams.get("minCarat") || "1")}"></label>
          <label>Maximum carat<input name="maxCarat" type="number" min="0" step="0.1" placeholder="6" value="${htmlSafe(initialParams.get("maxCarat") || "")}"></label>
          <label>Color
            <select name="color">
              <option value="all" ${selectedColor === "all" ? "selected" : ""}>D, E, F only</option>
              ${["D", "E", "F"].map((color) => option(color, selectedColor)).join("")}
            </select>
          </label>
          <label>Clarity
            <select name="clarity">
              <option value="all" ${selectedClarity === "all" ? "selected" : ""}>VS1, VS2, VVS1, VVS2 only</option>
              ${["VVS1", "VVS2", "VS1", "VS2"].map((clarity) => option(clarity, selectedClarity)).join("")}
            </select>
          </label>
          <button class="button button-dark" type="submit">Search Diamonds</button>
        </form>
        <div class="diamond-api-note" id="diamond-api-note">Loading diamond inventory...</div>
        <div class="diamond-inventory-grid" id="diamond-inventory-grid"></div>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Diamond Request</p>
          <h2>Request this diamond or a custom match</h2>
        </div>
        ${customRequestForm({ formId: "diamond-inventory-form", requestType: "Product Inquiry Form", productCategory: "Lab-Grown Diamond Inventory", productName: "Selected lab-grown diamond" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireDiamondInventory(initialParams);
  wireRequestForm("diamond-inventory-form", "Thank you for your submission. Your diamond request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

async function loadDiamondInventory(params = new URLSearchParams()) {
  const note = document.getElementById("diamond-api-note");
  const grid = document.getElementById("diamond-inventory-grid");
  if (!grid || !note) return;
  if (diamondRetryTimer) {
    window.clearInterval(diamondRetryTimer);
    diamondRetryTimer = null;
  }
  note.textContent = "Loading live lab-grown diamond inventory...";
  grid.innerHTML = "";
  const minCarat = Math.max(1, Number(params.get("minCarat") || 1));
  const maxCarat = Number(params.get("maxCarat") || 99);
  const shape = params.get("shape") || "all";
  const color = params.get("color") || "all";
  const clarity = params.get("clarity") || "all";
  let inventoryMeta = {};
  try {
    const apiParams = new URLSearchParams(params);
    const response = await fetch(`/api/diamonds?${apiParams.toString()}`, { headers: { Accept: "application/json" } });
    const payload = await response.json();
    if (!response.ok || !payload.ok) {
      const apiError = new Error(payload.error || "Diamond API request failed");
      apiError.retryAfterSeconds = payload.retryAfterSeconds || 0;
      throw apiError;
    }
    liveDiamondInventory = Array.isArray(payload.diamonds) ? payload.diamonds : [];
    inventoryMeta = payload;
  } catch (error) {
    const retryAfterSeconds = Number(error.retryAfterSeconds || 0);
    if (retryAfterSeconds > 0) {
      startDiamondRetryTimer(retryAfterSeconds, params);
      return;
    }
    note.textContent = `Live diamond inventory could not load: ${error.message}`;
    grid.innerHTML = `<div class="empty-state">Live inventory is temporarily unavailable. Submit a request for a custom diamond match.</div>`;
    return;
  }
  const diamonds = liveDiamondInventory.filter((diamond) => {
    const diamondShape = String(diamond.shape || "").toUpperCase();
    const diamondColor = String(diamond.color || "").toUpperCase();
    const diamondClarity = String(diamond.clarity || "").toUpperCase();
    const diamondAvailability = String(diamond.availability || "").toUpperCase();
    const shapeMatch = shape === "all" || diamondShape === String(shape).toUpperCase();
    const colorMatch = color === "all" || diamondColor === color;
    const clarityMatch = clarity === "all" || diamondClarity === clarity;
    const allowedMatch = Number(diamond.carat) > 1
      && allowedDiamondColors.has(diamondColor)
      && allowedDiamondClarities.has(diamondClarity)
      && diamondAvailability === "AVAILABLE"
      && Boolean(diamond.imageUrl)
      && Boolean(diamond.reportUrl)
      && Boolean(diamond.reportNumber);
    return allowedMatch && shapeMatch && colorMatch && clarityMatch && diamond.carat > minCarat && diamond.carat <= maxCarat;
  });
  const cacheText = inventoryMeta.cached
    ? ` Showing saved inventory from ${inventoryMeta.fetchedAt ? new Date(inventoryMeta.fetchedAt).toLocaleTimeString() : "the last successful load"} while the vendor API refresh window resets.`
    : "";
  note.textContent = `Live Labgrown Diamond API inventory loaded. Showing ${diamonds.length} available diamonds over 1 carat, D-F color, VS/VVS clarity, with photo and IGI report links. Memo stones are hidden.${cacheText}`;
  grid.innerHTML = diamonds.length
    ? diamonds.map(diamondInventoryCard).join("")
    : `<div class="empty-state">No diamonds matched that search. Submit a request for a custom diamond match.</div>`;
}

function startDiamondRetryTimer(seconds, params) {
  const note = document.getElementById("diamond-api-note");
  const grid = document.getElementById("diamond-inventory-grid");
  if (!note || !grid) return;
  let remaining = Math.max(1, Math.floor(seconds));
  const render = () => {
    const minutes = Math.floor(remaining / 60);
    const secs = String(remaining % 60).padStart(2, "0");
    note.textContent = `The vendor API rate limit is resetting. Inventory will reload automatically in ${minutes}:${secs}.`;
    grid.innerHTML = `<div class="empty-state">Waiting for the Labgrown Diamond API reset. This page will retry automatically.</div>`;
  };
  render();
  diamondRetryTimer = window.setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      window.clearInterval(diamondRetryTimer);
      diamondRetryTimer = null;
      loadDiamondInventory(params);
      return;
    }
    render();
  }, 1000);
}

function wireDiamondInventory(initialParams = new URLSearchParams()) {
  const form = document.getElementById("diamond-filter-form");
  const requestForm = document.getElementById("diamond-inventory-form");
  const returnProduct = initialParams.get("returnProduct") || "";
  const filterParams = () => {
    const params = new URLSearchParams();
    ["shape", "minCarat", "maxCarat", "color", "clarity"].forEach((name) => {
      const value = form?.elements[name]?.value || "";
      if (value) params.set(name, value);
    });
    if (returnProduct) params.set("returnProduct", returnProduct);
    return params;
  };
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    loadDiamondInventory(filterParams());
  });
  form?.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => loadDiamondInventory(filterParams()));
  });
  document.getElementById("diamond-inventory-grid")?.addEventListener("click", (event) => {
    const mediaLink = event.target.closest("[data-direct-media]");
    if (mediaLink) {
      event.preventDefault();
      window.location.href = mediaLink.dataset.directMedia;
      return;
    }
    const button = event.target.closest("[data-select-diamond]");
    if (!button) return;
    const card = button.closest(".diamond-inventory-card");
    const details = card?.innerText?.replace(/\n+/g, " | ") || button.dataset.selectDiamond;
    const diamond = {
      id: button.dataset.selectDiamond,
      shape: card?.dataset.shape || "",
      carat: card?.dataset.carat || "",
      color: card?.dataset.color || "",
      clarity: card?.dataset.clarity || "",
      certificate: card?.dataset.certificate || "",
      reportNumber: card?.dataset.reportNumber || "",
      measurements: card?.dataset.measurements || "",
      availability: card?.dataset.availability || "",
      details,
      selectedAt: new Date().toISOString(),
    };
    if (returnProduct) {
      localStorage.setItem(`donLiveDiamond:${returnProduct}`, JSON.stringify(diamond));
      location.hash = `#/product/${returnProduct}`;
      return;
    }
    if (!requestForm) return;
    requestForm.elements.stoneType.value = "Lab-Grown Diamond";
    requestForm.elements.notes.value = `Selected live inventory diamond: ${details}`;
    requestForm.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  loadDiamondInventory(filterParams());
}

function productDetail(id) {
  const product = allProducts().find((p) => p.id === id) || products[0];
  if (product.imported) return importedProductDetail(product);
  selections = Object.fromEntries(productFields(product).map(([label, values]) => {
    if (label === "Diamond Type") return [label, "Lab-Grown Diamond"];
    return [label, Array.isArray(values[0]) ? values[0][0] : values[0]];
  }));
  shell(`
    <main>
      <section class="product-detail-hero">
        <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}">
        <div>
          <p class="eyebrow">${product.category}</p>
          <h1>${productName(product)}</h1>
          <p class="product-description">${startingText(product)} before diamond, color, size, and style modifiers.</p>
          ${diamondOriginNote(product)}
          ${engagementCertificationNote(product)}
        </div>
      </section>
      <section class="customizer-layout">
        <div class="customizer-panel">
          <p class="eyebrow">Custom Jewelry Builder</p>
          <h2>${productName(product)}</h2>
          <p class="lede">${product.lede}</p>
          ${diamondOriginNote(product)}
          ${engagementCertificationNote(product)}
          ${product.note ? `<p class="video-preview-note">${product.note}</p>` : ""}
          ${productFields(product).map(([label, values]) => optionGroup(label, values, product)).join("")}
          <div class="builder-actions">
            <a class="button button-gold" href="mailto:${contactEmail}?subject=Request%20Quote%20/%20Message%20Us">Request Quote / Message Us</a>
            <a class="button button-dark" href="#/custom-orders">${product.cta}</a>
            ${product.extraCta ? `<a class="button button-light" href="mailto:${contactEmail}?subject=Special%20Jewelry%20Request">${product.extraCta}</a>` : ""}
          </div>
        </div>
        <aside class="summary-panel" id="summary"></aside>
      </section>
      <section class="diamond-video-section">
        <div class="section-heading">
          <p class="eyebrow">Diamond Video</p>
          <h2>Watch Video Preview</h2>
          <p>Watch a close-up video of this diamond or jewelry piece before requesting a quote.</p>
        </div>
        <div class="diamond-video-public"><p class="video-empty">No video posted for this diamond yet.</p></div>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Product Inquiry</p>
          <h2>Ask about ${productName(product)}</h2>
        </div>
        ${customRequestForm({ formId: "product-inquiry-form", requestType: "Product Inquiry Form", productCategory: product.category, productName: productName(product) })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireOptions(product);
  renderSummary(product);
  wireRequestForm("product-inquiry-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function optionGroup(label, values, product) {
  const priceOffset = values.every(Array.isArray) && Number.isFinite(product.estimate) ? product.estimate - values[0][1] : 0;
  return `
    <fieldset class="option-group" data-group="${label}">
      <legend>${label}</legend>
      <div class="option-grid">
        ${values.map((value, index) => {
          const text = Array.isArray(value) ? value[0] : value;
          const price = Array.isArray(value) ? `<small>${money.format(value[1] + priceOffset)}</small>` : "";
          const selected = selections[label] === text || (!selections[label] && index === 0);
          return `<button class="option-button ${selected ? "is-selected" : ""}" type="button" data-value="${text}"><span>${text}</span>${price}</button>`;
        }).join("")}
      </div>
    </fieldset>
  `;
}

function wireOptions(product) {
  document.querySelectorAll(".option-group").forEach((group) => {
    const label = group.dataset.group;
    group.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll(".option-button").forEach((btn) => btn.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selections[label] = button.dataset.value;
        renderSummary(product);
        if (label === "Diamond Type" && button.dataset.value === "Natural Diamond") {
          showNaturalDiamondModal();
        }
      });
    });
  });
}

function showNaturalDiamondModal() {
  document.querySelector(".natural-diamond-modal")?.remove();
  const modal = document.createElement("div");
  modal.className = "natural-diamond-modal";
  modal.innerHTML = `
    <div class="natural-diamond-dialog" role="dialog" aria-modal="true" aria-label="Natural diamond pricing request">
      <button class="natural-diamond-close" type="button" aria-label="Close natural diamond message">Close</button>
      <p class="eyebrow">Natural Diamond Pricing</p>
      <h2>Request a custom quote</h2>
      <p>Please request natural diamond pricing through direct messaging, custom design, custom stone size, or Request Quote so we can price your natural diamond selection accurately.</p>
      <div class="hero-actions">
        <a class="button button-gold" href="mailto:${contactEmail}?subject=Natural%20Diamond%20Quote%20Request">Request Quote</a>
        <a class="button button-dark" href="#/custom-orders">Custom Design / Stone Size</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector(".natural-diamond-close").addEventListener("click", close);
}

function payableCartItems() {
  return cart.filter((item) => Number(item.price) > 0 && !item.pricingNote);
}

function stripeBuyButton(total = 0) {
  const payLabel = Number(total) > 0 ? `Pay Now with Stripe - ${money.format(total)}` : "Pay Now with Stripe";
  return `
    <div class="stripe-buy-button-wrap">
      <a class="button button-gold" href="${stripePaymentLink}">${payLabel}</a>
      <stripe-buy-button
        buy-button-id="${stripeBuyButtonId}"
        publishable-key="${stripePublishableKey}">
      </stripe-buy-button>
      <a class="button button-light" href="${stripePaymentLink}">Open Stripe Checkout</a>
    </div>
  `;
}

function selectedPrice(product) {
  if (selections["Diamond Type"] === "Natural Diamond" || product.price === "Request Pricing" || product.priceLabel === "Request Pricing" || product.estimate === null) return null;
  let basePrice = product.estimate;
  for (const [label, values] of product.fields) {
    if (values.every(Array.isArray)) {
      const found = values.find(([text]) => text === selections[label]);
      if (found) {
        basePrice = found[1] + (product.estimate - values[0][1]);
        break;
      }
    }
  }
  const metalSurcharges = product.metalSurcharges || (product.category === "Engagement Rings" ? engagementRingMetalSurcharges : {});
  const metalSurcharge = metalSurcharges[selections.Metal] || 0;
  return basePrice + metalSurcharge;
}

function renderSummary(product) {
  const price = selectedPrice(product);
  const naturalDiamond = price === null;
  const liveDiamond = selectedLiveDiamondFor(product.id);
  const liveShape = selections["Center Stone Shape"] || selections["Stone Shape"] || "all";
  const liveDiamondHref = `#/select-diamond?shape=${encodeURIComponent(liveShape)}&returnProduct=${encodeURIComponent(product.id)}`;
  document.getElementById("summary").innerHTML = `
    <p class="eyebrow">Live Selection</p>
    <h2>${productName(product)}</h2>
    <dl class="summary-list">
      ${Object.entries(selections).map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}
      <div><dt>Live Diamond</dt><dd>${htmlSafe(liveDiamondLabel(liveDiamond))}</dd></div>
    </dl>
    <a class="button button-gold" href="mailto:${contactEmail}?subject=Request%20Quote%20/%20Message%20Us">Request Quote / Message Us</a>
    <a class="button button-light" href="${liveDiamondHref}">Select Live Diamond</a>
    <div class="price-row"><span>${naturalDiamond ? "Natural diamond pricing" : "Estimated price"}</span><strong>${naturalDiamond ? "Request pricing" : money.format(price)}</strong></div>
    ${naturalDiamond ? `<p class="quote-note">Please message us or submit a request for special pricing on natural diamonds.</p>` : ""}
    ${!naturalDiamond ? stripeBuyButton(price) : ""}
    <button class="button button-dark" id="add-cart" type="button">Add Build Order to Cart</button>
    <p class="quote-note" id="cart-note" hidden>Added to build order.</p>
    <p class="quote-note" id="payment-status" hidden></p>
  `;
  document.getElementById("add-cart").addEventListener("click", () => {
    cart.push({ id: product.id, name: productName(product), image: product.image, price: price || 0, pricingNote: naturalDiamond ? "Request pricing for natural diamond" : "", selections: {...selections, "Live Diamond": liveDiamondLabel(liveDiamond)} });
    localStorage.setItem("donCart", JSON.stringify(cart));
    document.getElementById("cart-note").hidden = false;
  });
}

function importedProductFields(product) {
  const category = product.category;
  if (product.id === "import-img-7970-mpnlzebr") {
    return [
      ["Diamond Type", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"]],
      ["Metal Type", quoteMetals],
      ["Ring Size", ringSizes],
      ["Center Stone Shape", ["Marquise"]],
      ["Side Stone Shape", ["Marquise"]],
      ["Carat Size", [
        ["2 carats", 2450],
        ["2.5 carats", 2775],
        ["3 carats", 3100],
        ["3.5 carats", 3425],
        ["4 carats", 3750],
        ["4.5 carats", 4075],
        ["5 carats", 4400],
        ["5.5 carats", 4725],
        ["6 carats", 5050],
      ]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (product.id === "import-img-4816-mpnlzebr") {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Type", ["Amethyst with lab diamonds"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
    ];
  }
  if (product.id === "import-img-2352-mpnlzebr") {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Type", ["Diamond"]],
      ["Stone Size", [
        ["1 carat", 750],
        ["1.5 carat", 950],
        ["2 carat", 1150],
        ["2.5 carat", 1350],
        ["3 carat", 1550],
        ["3.5 carat", 1750],
        ["4 carat", 1950],
        ["4.5 carat", 2150],
        ["5 carat", 2350],
        ["5.5 carat", 2550],
        ["6 carat", 2750],
      ]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
    ];
  }
  if (["Engagement Rings", "Rings"].includes(category)) {
    return [
      ["Diamond Type", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"]],
      ["Metal Type", quoteMetals],
      ["Ring Size", ringSizes],
      ["Center Stone Shape", ["Round", "Oval", "Emerald", "Radiant", "Marquise", "Pear", "Cushion", "Asscher", "Princess", "Custom Shape"]],
      ["Carat Size", ["1 carat", "1.5 carat", "2 carat", "2.5 carat", "3 carat", "4 carat", "5 carat", "Custom carat size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Engraving Option", ["No engraving", "Inside engraving", "Custom engraving request"]],
      ["Hidden Halo Option", ["No hidden halo", "Add hidden halo", "Discuss with jeweler"]],
      ["Hidden Birthstone Option", ["No hidden birthstone", "Add hidden birthstone", "Discuss with jeweler"]],
    ];
  }
  if (category === "Earrings") {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Size", ["0.5 carat", "1 carat", "1.5 carat", "2 carat", "3 carat", "Custom stone size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Backing Type", ["Screw back"]],
      ["Stone Type", ["Diamond", "Pink gemstone", "Blue gemstone", "Yellow gemstone", "Ruby", "Sapphire", "Emerald", "Custom gemstone"]],
    ];
  }
  if (["Pendants / Charms", "Pendants", "Custom Jewelry / Request Pricing"].includes(category)) {
    return [
      ["Metal Type", quoteMetals],
      ["Stone Option", ["Diamond", "Ruby", "Sapphire", "Emerald", "Colored gemstone", "No stones", "Custom stone request"]],
      ["Custom Engraving", ["No engraving", "Back engraving", "Name engraving", "Custom engraving request"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (category === "Chains") {
    return [
      ["Chain Style", ["Nameplate", "Rope", "Cuban", "Tennis", "Box", "Figaro", "Mooncut", "Franco", "Custom style"]],
      ["Metal Type", quoteMetals],
      ["Length", ["16 in", "18 in", "20 in", "22 in", "24 in", "26 in", "30 in", "Custom length"]],
      ["Width", ["Thin", "Medium", "Wide", "Custom width"]],
      ["Gram Weight Estimate", ["Lightweight", "Medium weight", "Heavy", "Request gram quote"]],
      ["Stone Option", ["Diamond", "Gemstone", "No stones", "Custom stone request"]],
    ];
  }
  if (["Bracelets", "Tennis Bracelets"].includes(category)) {
    return [
      ["Length", ["Starting at 7 inches", "7.5 inches", "8 inches", "Custom length"]],
      ["Metal Type", quoteMetals],
      ["Total Carat Weight", ["5 carats", "6 carats", "7 carats", "8 carats", "10 carats", "Custom carat weight"]],
      ["Stone Size", ["10 pointers", "15 pointers", "20 pointers", "25 pointers", "30 pointers", "Custom stone size"]],
      ["Diamond Quality", importedDiamondQualityOptions],
      ["Approximate Gram Weight", ["Request gram quote", "Lightweight", "Medium weight", "Heavy"]],
    ];
  }
  if (category === "Watches") {
    return [
      ["Brand / Model", ["Rolex", "Cartier", "Audemars Piguet", "Patek Philippe", "Custom model"]],
      ["Custom Diamond Setting", ["Bezel only", "Dial", "Case", "Bracelet", "Fully iced", "Custom setting"]],
      ["Metal / Finish", ["Yellow gold", "White gold", "Rose gold", "Steel", "Two-tone", "Custom finish"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  if (category === "Grillz") {
    return [
      ["Grillz Style", ["Top", "Bottom", "Top and bottom", "Open face", "Iced out", "Custom design"]],
      ["Metal Type", quoteMetals],
      ["Stone Option", ["No stones", "Diamond", "Gemstone", "Custom stone request"]],
      ["Diamond Quality", importedDiamondQualityOptions],
    ];
  }
  return [
    ["Metal Type", quoteMetals],
    ["Stone Option", ["Diamond", "Gemstone", "No stones", "Custom stone request"]],
    ["Diamond Quality", importedDiamondQualityOptions],
  ];
}

function initSelections(fields) {
  selections = Object.fromEntries(fields.map(([label, values]) => [label, Array.isArray(values[0]) ? values[0][0] : values[0]]));
}

function wireImportedOptions(product) {
  document.querySelectorAll(".option-group").forEach((group) => {
    const label = group.dataset.group;
    group.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll(".option-button").forEach((btn) => btn.classList.remove("is-selected"));
        button.classList.add("is-selected");
        selections[label] = button.dataset.value;
        renderImportedSummary(product);
      });
    });
  });
}

function renderImportedSummary(product) {
  const host = document.getElementById("imported-summary");
  if (!host) return;
  const price = importedSelectedPrice(product);
  host.innerHTML = `
    <p class="eyebrow">Selected Options</p>
    <h2>${productName(product)}</h2>
    <dl class="summary-list">
      ${Object.entries(selections).map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}
    </dl>
    <div class="price-row"><span>Pricing</span><strong>${price === null ? "Request Pricing" : money.format(price)}</strong></div>
    <p class="quote-note">Pricing varies depending on metal, diamond quality, stone size, and market availability. Submit a request for final pricing.</p>
    <button class="button button-dark" id="imported-add-inquiry" type="button">Add to Inquiry</button>
    <p class="quote-note" id="imported-cart-note" hidden>Added to inquiry.</p>
  `;
  document.getElementById("imported-add-inquiry")?.addEventListener("click", () => {
    cart.push({ id: product.id, name: productName(product), image: product.imageUrl || product.image, price: 0, pricingNote: "Request Pricing", selections: { ...selections, Product: productName(product), Category: product.category } });
    localStorage.setItem("donCart", JSON.stringify(cart));
    document.getElementById("imported-cart-note").hidden = false;
  });
}

function importedSelectedPrice(product) {
  let price = Number.isFinite(product.price) ? product.price : null;
  const fields = importedProductFields(product);
  for (const [label, values] of fields) {
    if (values.every(Array.isArray)) {
      const found = values.find(([text]) => text === selections[label]);
      if (found) price = found[1];
    }
  }
  if (price === null) return null;
  const metal = selections["Metal Type"] || "";
  if (product.id === "import-img-7970-mpnlzebr") {
    if (metal.startsWith("18K")) price += 375;
    if (metal === "Platinum") price += 625;
    return price;
  }
  if (metal.startsWith("18K")) price += 250;
  if (metal === "Platinum") price += 475;
  return price;
}

function importedProductDetail(product) {
  const fields = importedProductFields(product);
  initSelections(fields);
  shell(`
    <main>
      <section class="product-detail-hero">
        <img src="${productImageSrc(product)}" alt="${product.alt || productName(product)}">
        <div>
          <p class="eyebrow">${product.category}</p>
          <h1>${productName(product)}</h1>
          <p class="product-description">${product.shortDescription || "A luxury custom jewelry piece from The Don Jewelers & Jewelry, available for quote review."}</p>
          <p class="diamond-origin-note">Pricing varies depending on metal, diamond quality, stone size, and market availability. Submit a request for final pricing.</p>
        </div>
      </section>
      <section class="customizer-layout">
        <div class="customizer-panel">
          <p class="eyebrow">Custom Product Builder</p>
          <h2>${productName(product)}</h2>
          <p class="lede">${product.specs || "Request Pricing"}</p>
          ${fields.map(([label, values]) => optionGroup(label, values, product)).join("")}
          <dl class="summary-list">
            <div><dt>Category</dt><dd>${product.category}</dd></div>
            <div><dt>Tags</dt><dd>${(product.tags || []).join(", ") || "Custom Jewelry"}</dd></div>
            <div><dt>Price</dt><dd>${product.priceLabel || "Request Pricing"}</dd></div>
          </dl>
          <div class="builder-actions">
            <a class="button button-gold" href="mailto:${contactEmail}?subject=Custom%20Quote%20Request%20-%20${encodeURIComponent(productName(product))}">Request Custom Quote</a>
            <a class="button button-dark" href="#/custom-orders">Message Us for Custom Design</a>
            <a class="button button-light" href="#/request/contact">Contact The Don Jewelers & Jewelry</a>
          </div>
        </div>
        <aside class="summary-panel" id="imported-summary"></aside>
      </section>
      <section class="custom-form-section">
        <div class="section-heading">
          <p class="eyebrow">Product Inquiry</p>
          <h2>Submit a request for ${productName(product)}</h2>
        </div>
        ${customRequestForm({ formId: "imported-product-inquiry-form", requestType: "Product Inquiry Form", productCategory: product.category, productName: productName(product) })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireImportedOptions(product);
  renderImportedSummary(product);
  wireRequestForm("imported-product-inquiry-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

const importCategories = ["Engagement Rings", "Rings", "Earrings", "Pendants / Charms", "Chains", "Tennis Bracelets", "Bracelets", "Watches", "Grillz", "Custom Jewelry", "Gold Buying / Services", "Custom Jewelry / Request Pricing"];

function normalizeImportCategory(category) {
  const value = String(category || "").trim().toLowerCase();
  if (["engagement ring", "engagement rings", "ring", "rings"].includes(value)) return "Engagement Rings";
  if (["tennis bracelet", "tennis bracelets"].includes(value)) return "Tennis Bracelets";
  if (["bracelet", "bracelets"].includes(value)) return "Bracelets";
  if (["chain", "chains"].includes(value)) return "Chains";
  if (["pendant", "pendants", "charm", "charms", "pendants / charms", "pendants/charms", "pendant / charm", "pendant/charm"].includes(value)) return "Pendants / Charms";
  if (["earring", "earrings", "stud", "studs"].includes(value)) return "Earrings";
  if (["grill", "grillz"].includes(value)) return "Grillz";
  if (["watch", "watches"].includes(value)) return "Watches";
  if (["custom", "custom jewelry"].includes(value)) return "Custom Jewelry";
  if (["custom jewelry / request pricing", "request pricing"].includes(value)) return "Custom Jewelry / Request Pricing";
  if (["gold buying", "gold buying / services", "gold buying/services", "services"].includes(value)) return "Gold Buying / Services";
  return importCategories.includes(category) ? category : "Custom Jewelry";
}

function parseCsvRows(text) {
  const rows = text.split(/\r?\n/).filter(Boolean).map((line) => {
    const cells = [];
    let value = "";
    let quoted = false;
    for (const char of line) {
      if (char === '"') quoted = !quoted;
      else if (char === "," && !quoted) {
        cells.push(value.trim());
        value = "";
      } else value += char;
    }
    cells.push(value.trim());
    return cells;
  });
  if (!rows.length) return [];
  const headers = rows[0].map((header) => header.toLowerCase().replace(/\s+/g, ""));
  return rows.slice(1).map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])));
}

function normalizeFileName(name) {
  return String(name || "").split(/[\\/]/).pop().trim().toLowerCase();
}

function csvRowForFile(rows, fileName) {
  const normalized = normalizeFileName(fileName);
  return rows.find((row) => {
    const candidates = [row.filename, row.file, row.media, row.medianame, row.image, row.video, row.path, row.url].map(normalizeFileName);
    return candidates.includes(normalized);
  }) || {};
}

function inferCategory(text) {
  const value = text.toLowerCase();
  if (/engagement|ring|oval|marquise|radiant|solitaire/.test(value)) return "Engagement Rings";
  if (/tennis|bracelet/.test(value)) return "Tennis Bracelets";
  if (/chain|cuban|rope|franco/.test(value)) return "Chains";
  if (/pendant|charm|cross/.test(value)) return "Pendants / Charms";
  if (/earring|stud|martini/.test(value)) return "Earrings";
  if (/grill|grillz/.test(value)) return "Grillz";
  if (/watch|rolex|cartier/.test(value)) return "Watches";
  if (/gold buying|cash for gold|scrap/.test(value)) return "Gold Buying / Services";
  return "Custom Jewelry";
}

function inferTitle(text, fallback) {
  const clean = text.replace(/https?:\/\/\S+/g, "").replace(/[#@][\w-]+/g, "").trim();
  const firstSentence = clean.split(/[.!?\n]/).find(Boolean)?.trim();
  if (firstSentence && firstSentence.length <= 72) return firstSentence;
  return fallback.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function inferTags(text, category) {
  const tags = new Set([category, "Instagram Import", "Custom Jewelry"]);
  ["LGD", "Natural", "VVS", "VS", "14K", "18K", "Platinum", "Silver", "Gold", "Diamond"].forEach((tag) => {
    if (text.toLowerCase().includes(tag.toLowerCase())) tags.add(tag);
  });
  return [...tags];
}

function inferPrice(text) {
  const match = text.match(/\$\s?[\d,]+/);
  return match ? match[0].replace(/\s/g, "") : "Request Pricing";
}

function normalizePriceLabel(value) {
  const text = String(value || "").trim();
  return text && !/^request pricing$/i.test(text) ? text : "Request Pricing";
}

function priceValueFromLabel(label) {
  const normalized = normalizePriceLabel(label);
  return normalized === "Request Pricing" ? "Request Pricing" : Number(normalized.replace(/[^\d]/g, ""));
}

function makeImportDraft({ caption = "", postLink = "", mediaUrl = "", mediaName = "Instagram product", source = instagramHandle }) {
  const category = normalizeImportCategory(inferCategory(`${caption} ${mediaName}`));
  const title = inferTitle(caption, mediaName);
  const priceLabel = normalizePriceLabel(inferPrice(caption));
  return {
    id: `ig-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    imported: true,
    source,
    postLink,
    category,
    name: title,
    imageUrl: mediaUrl,
    alt: title,
    caption,
    shortDescription: caption ? caption.slice(0, 180) : "Imported product draft from provided Instagram media.",
    specs: caption || "Request Pricing",
    tags: inferTags(caption, category),
    price: priceValueFromLabel(priceLabel),
    priceLabel,
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function videoThumbnail(file) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.src = URL.createObjectURL(file);
    video.addEventListener("loadeddata", () => {
      video.currentTime = Math.min(1, video.duration || 1);
    }, { once: true });
    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth || 900;
      canvas.height = video.videoHeight || 900;
      canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(video.src);
      resolve(canvas.toDataURL("image/jpeg", .86));
    }, { once: true });
    video.addEventListener("error", () => resolve(""), { once: true });
  });
}

function renderImportDrafts(drafts) {
  const host = document.getElementById("import-drafts");
  if (!host) return;
  const escapeField = (value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  host.innerHTML = drafts.length ? drafts.map((draft, index) => `
    <article class="import-draft" data-index="${index}">
      ${draft.imageUrl ? `<img src="${draft.imageUrl}" alt="">` : `<div class="import-media-empty">No media yet</div>`}
      <div class="import-fields">
        <label>Product title<input data-field="name" value="${escapeField(draft.name)}"></label>
        <label>Category<select data-field="category">${importCategories.map((category) => `<option ${category === draft.category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label>Short description<textarea data-field="shortDescription" rows="3">${escapeField(draft.shortDescription)}</textarea></label>
        <label>Specs section<textarea data-field="specs" rows="4">${escapeField(draft.specs)}</textarea></label>
        <label>Tags<input data-field="tags" value="${escapeField((draft.tags || []).join(", "))}"></label>
        <label>Price<input data-field="priceLabel" value="${escapeField(draft.priceLabel || "Request Pricing")}"></label>
        <label>Instagram post link<input data-field="postLink" value="${escapeField(draft.postLink || "")}"></label>
        <div class="builder-actions">
          <button class="button button-gold" type="button" data-approve="${index}">Approve Listing</button>
          <button class="button button-light" type="button" data-remove-draft="${index}">Remove Draft</button>
          <a class="button button-dark" href="mailto:${contactEmail}?subject=Custom%20Quote%20Request%20-%20${encodeURIComponent(draft.name)}">Request Custom Quote</a>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-state">Upload images/videos or paste CSV rows to create draft listings for review.</div>`;
}

function requestEmailSubject(payload) {
  const type = payload.jewelry.requestType || "Website Request";
  const name = payload.customer.fullName || "Customer";
  return `${type} - ${name}`;
}

function requestEmailBody(payload) {
  const rows = [
    "New website request from The Don Jewelers & Jewelry website.",
    "",
    "Customer",
    `Name: ${payload.customer.fullName || "Not provided"}`,
    `Email: ${payload.customer.email || "Not provided"}`,
    `Phone: ${payload.customer.phone || "Not provided"}`,
    "",
    "Request Details",
    `Request type: ${payload.jewelry.requestType || "Not provided"}`,
    `Product category: ${payload.jewelry.productCategory || "Not provided"}`,
    `Product name: ${payload.jewelry.productName || "Not provided"}`,
    `Metal type: ${payload.jewelry.metalType || "Not provided"}`,
    `Diamond shape: ${payload.jewelry.diamondShape || "Not provided"}`,
    `Stone type: ${payload.jewelry.stoneType || "Not provided"}`,
    `Carat weight: ${payload.jewelry.caratWeight || "Not provided"}`,
    `Ring size: ${payload.jewelry.ringSize || "Not provided"}`,
    `Bracelet size: ${payload.jewelry.braceletSize || "Not provided"}`,
    `Chain length: ${payload.jewelry.chainLength || "Not provided"}`,
    `Diamond quality: ${payload.jewelry.diamondQuality || "Not provided"}`,
    `Budget: ${payload.jewelry.budget || "Not provided"}`,
    `Timeline: ${payload.jewelry.timeline || "Not provided"}`,
    "",
    "Notes",
    payload.jewelry.notes || "Not provided",
    "",
    "Uploaded file names",
    payload.files.length ? payload.files.map((file) => `${file.name} (${file.type || "unknown type"}, ${file.size || 0} bytes)`).join("\n") : "No files selected",
    "",
    `Submitted from: ${payload.source}`,
    `Submitted at: ${new Date().toLocaleString()}`,
  ];
  return rows.join("\n");
}

function emailRequest(payload) {
  const subject = encodeURIComponent(requestEmailSubject(payload));
  const body = encodeURIComponent(requestEmailBody(payload));
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

function updateDraftFromForm(drafts, card) {
  const draft = drafts[Number(card.dataset.index)];
  card.querySelectorAll("[data-field]").forEach((field) => {
    const key = field.dataset.field;
    draft[key] = field.value;
  });
  draft.tags = String(draft.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean);
  draft.priceLabel = normalizePriceLabel(draft.priceLabel);
  draft.price = priceValueFromLabel(draft.priceLabel);
}

function wireRequestForm(formId, successText) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const success = form.querySelector(".form-success");
    const error = form.querySelector(".form-error");
    if (button) {
      button.disabled = true;
      button.textContent = "Submitting...";
    }
    if (error) error.hidden = true;
    try {
      const payload = requestPayloadFromForm(form);
      savePendingRequest(payload);
      emailRequest(payload);
      if (success) {
        success.hidden = false;
        success.textContent = `${successText} An email draft was opened to ${contactEmail}, and a backup copy was saved in this browser.`;
      }
      form.reset();
    } catch (submitError) {
      const fallbackPayload = requestPayloadFromForm(form);
      savePendingRequest(fallbackPayload);
      if (error) {
        error.hidden = false;
        error.textContent = `Your request was saved in this browser. Please email ${contactEmail} if your email app did not open.`;
      }
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = "Submit Custom Request";
      }
    }
  });
}

function selectedFormValue(form, name) {
  const checked = form.querySelector(`[name="${name}"]:checked`);
  if (checked) return checked.value;
  return form.elements[name]?.value || "";
}

function requestPayloadFromForm(form) {
  const files = [...form.querySelectorAll('input[type="file"]')].flatMap((input) => [...input.files].map((file) => ({
    name: file.name,
    type: file.type,
    size: file.size,
  })));
  const requestType = form.dataset.requestType || selectedFormValue(form, "requestType") || "General Contact Form";
  const productCategory = form.dataset.productCategory || selectedFormValue(form, "productCategory") || requestType;
  return {
    source: location.href,
    customer: {
      fullName: selectedFormValue(form, "fullName") || selectedFormValue(form, "name"),
      email: selectedFormValue(form, "email"),
      phone: selectedFormValue(form, "phone"),
    },
    jewelry: {
      requestType,
      productCategory,
      productName: form.dataset.productName || selectedFormValue(form, "productName"),
      metalType: selectedFormValue(form, "metalType") || selectedFormValue(form, "metal"),
      diamondShape: selectedFormValue(form, "diamondShape"),
      stoneType: selectedFormValue(form, "stoneType") || selectedFormValue(form, "gemstones"),
      caratWeight: selectedFormValue(form, "caratWeight") || selectedFormValue(form, "caratSize"),
      ringSize: selectedFormValue(form, "ringSize"),
      braceletSize: selectedFormValue(form, "braceletSize"),
      chainLength: selectedFormValue(form, "chainLength"),
      diamondQuality: selectedFormValue(form, "diamondQuality") || selectedFormValue(form, "diamondType"),
      budget: selectedFormValue(form, "budget"),
      timeline: selectedFormValue(form, "timeline"),
      notes: [
        selectedFormValue(form, "description"),
        selectedFormValue(form, "notes"),
        form.dataset.cartSummary ? `Cart summary: ${form.dataset.cartSummary}` : "",
        selectedFormValue(form, "bandStyle") ? `Band style: ${selectedFormValue(form, "bandStyle")}` : "",
        selectedFormValue(form, "prongs") ? `Prongs: ${selectedFormValue(form, "prongs")}` : "",
        selectedFormValue(form, "basket") ? `Basket / setting: ${selectedFormValue(form, "basket")}` : "",
        Object.keys(selections).length ? `Selected website options: ${Object.entries(selections).map(([key, value]) => `${key}: ${value}`).join(" | ")}` : "",
      ].filter(Boolean).join("\n"),
    },
    files,
  };
}

function savePendingRequest(payload) {
  const pending = JSON.parse(localStorage.getItem("donPendingCustomRequests") || "[]");
  pending.unshift({ ...payload, savedAt: new Date().toISOString() });
  localStorage.setItem("donPendingCustomRequests", JSON.stringify(pending.slice(0, 50)));
}

function choiceGroup(label, name, options, wide = false) {
  return `
    <fieldset class="request-choice-group ${wide ? "form-wide" : ""}">
      <legend>${label}</legend>
      <div class="request-choice-grid">
        ${options.map((option, index) => `
          <label class="request-choice-pill">
            <input type="radio" name="${name}" value="${option}" ${index === 0 ? "checked" : ""}>
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function engagementRingBuilder() {
  shell(`
    <main>
      ${pageHero("Engagement Ring Builder", "Build your custom engagement ring", "Choose the diamond, metal, band, setting, gemstone ideas, and design notes. A $500 deposit starts the design process and secures your consultation for further custom design work.")}
      <section class="custom-form-section">
        <form class="custom-order-form engagement-build-form" id="engagement-build-form" data-request-type="Custom Engagement Ring Request" data-product-category="Engagement Rings">
          <label>Full Name<input name="fullName" autocomplete="name" required></label>
          <label>Email<input name="email" type="email" autocomplete="email" required></label>
          <label>Phone number<input name="phone" type="tel" autocomplete="tel" required></label>
          ${choiceGroup("Diamond type", "diamondType", ["Natural Diamond", "Lab-Grown Diamond", "Not sure yet"])}
          ${choiceGroup("Desired center stone size", "caratSize", ["1 carat", "1.5 carat", "2 carat", "2.5 carat", "3 carat", "3.5 carat", "4 carat", "4.5 carat", "5 carat", "5.5 carat", "6 carat", "Custom carat size"], true)}
          ${choiceGroup("Metal", "metal", ["14K Yellow Gold", "14K White Gold", "14K Rose Gold", "18K Yellow Gold", "18K White Gold", "18K Rose Gold", "Silver", "Platinum"], true)}
          ${choiceGroup("Band style", "bandStyle", ["Classic Solitaire", "Pave Diamond Band", "Hidden Halo Band", "Tapered Baguette Band", "Cathedral Band", "Split Shank Band", "Custom one-on-one design"], true)}
          ${choiceGroup("Diamond shape", "diamondShape", ["Round", "Oval", "Emerald", "Radiant", "Marquise", "Pear", "Cushion", "Asscher", "Princess", "Custom shape"], true)}
          ${choiceGroup("Prongs", "prongs", ["4-prong", "6-prong", "Double claw prongs", "Compass prongs", "Bezel setting", "Custom prong design"], true)}
          ${choiceGroup("Basket / setting", "basket", ["Low basket", "Medium basket", "High basket", "Cathedral basket", "Hidden halo basket", "Custom basket"], true)}
          ${choiceGroup("Side stones or gemstones", "gemstones", ["Diamonds only", "Add sapphires", "Add rubies", "Add emeralds", "Add pink stones", "Add yellow stones", "Other gemstone request"], true)}
          ${choiceGroup("Diamond quality selection", "diamondQuality", quoteQualityOptions, true)}
          <label>Stone Type<input name="stoneType" placeholder="Diamond, sapphire, ruby, emerald, custom gemstone"></label>
          <label>Ring size<input name="ringSize" placeholder="Example: 6.5, 7, custom"></label>
          <label>Timeline Needed<input name="timeline" placeholder="Example: 2 weeks, 30 days, proposal date"></label>
          <label>Budget range<input name="budget" placeholder="Example: $2,500 - $5,000"></label>
          <label class="form-wide">Describe exactly what you are looking to get<textarea name="description" rows="6" placeholder="Tell us about the look, stone size, setting, inspiration, timeline, and any one-on-one custom design details."></textarea></label>
          <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
          <div class="deposit-note form-wide">
            <strong>$500 design deposit</strong>
            <span>The deposit starts the custom engagement ring design process and secures consultation time for design work, CAD planning, stone sourcing, and follow-up direction.</span>
          </div>
          <button class="button button-gold form-wide" type="submit">Submit Custom Request</button>
          <p class="form-success" hidden></p>
          <p class="form-error" hidden></p>
        </form>
      </section>
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("engagement-build-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function requestTypeToCategory(requestType) {
  if (requestType.includes("Engagement")) return "Engagement Rings";
  if (requestType.includes("Tennis Bracelet")) return "Bracelets";
  if (requestType.includes("Pendant")) return "Pendants / Charms";
  if (requestType.includes("Chain")) return "Chains";
  if (requestType.includes("Grillz")) return "Grillz";
  if (requestType.includes("CAD")) return "Custom Jewelry";
  if (requestType.includes("Product Inquiry")) return "Product Inquiry";
  return "Custom Jewelry";
}

function customRequestForm({ formId, requestType = "Request Custom Design Form", productCategory = "", productName = "" }) {
  const category = productCategory || requestTypeToCategory(requestType);
  return `
    <form class="custom-order-form engagement-build-form" id="${formId}" data-request-type="${requestType}" data-product-category="${category}" data-product-name="${productName}">
      <label>Full Name<input name="fullName" autocomplete="name" required></label>
      <label>Email Address<input name="email" type="email" autocomplete="email" required></label>
      <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>
      <label>Product Category
        <select name="productCategory">
          ${quoteCategories.map((item) => `<option ${item === requestType ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label>Metal Type
        <select name="metalType">
          ${quoteMetals.map((item) => `<option>${item}</option>`).join("")}
        </select>
      </label>
      <label>Diamond Shape<input name="diamondShape" placeholder="Round, oval, emerald, radiant, custom"></label>
      <label>Stone Type<input name="stoneType" placeholder="Diamond, ruby, sapphire, emerald, gemstone"></label>
      <label>Carat Weight<input name="caratWeight" placeholder="Example: 1 carat, 2.5 carat, custom"></label>
      <label>Ring Size<input name="ringSize" placeholder="For rings or grillz notes"></label>
      <label>Bracelet Size<input name="braceletSize" placeholder="Example: 7 in, 7.5 in"></label>
      <label>Chain Length<input name="chainLength" placeholder="Example: 18 in, 20 in, 24 in"></label>
      <label>Diamond Quality Selection
        <select name="diamondQuality">
          ${quoteQualityOptions.map((item) => `<option>${item}</option>`).join("")}
        </select>
      </label>
      <label>Budget<input name="budget" placeholder="Example: $1,500 - $5,000"></label>
      <label>Timeline Needed<input name="timeline" placeholder="Example: 2 weeks, 30 days, event date"></label>
      <label class="form-wide">Notes / Custom Details<textarea name="notes" rows="6" placeholder="Describe the piece, design details, sizing, stones, inspiration, and any custom CAD direction."></textarea></label>
      <label class="form-wide">Upload Inspiration Photos<input type="file" name="inspiration" multiple accept="image/*"></label>
      <button class="button button-gold form-wide" type="submit">Submit Custom Request</button>
      <p class="form-success" hidden></p>
      <p class="form-error" hidden></p>
    </form>
  `;
}

function customOrders() {
  shell(`
    <main>
      ${pageHero("Custom Design", "Message us for a custom design", `Send your name, phone number, email, and a clear description of what you are looking for. We will contact you to discuss the design, budget, timeline, and next steps.`)}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "custom-form", requestType: "Request Custom Design Form" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("custom-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

const requestPageTypes = {
  "tennis-bracelet": "Custom Tennis Bracelet Request",
  pendant: "Custom Pendant Request",
  chain: "Custom Chain Request",
  grillz: "Custom Grillz Request",
  cad: "Custom CAD Project Request",
  contact: "General Contact Form",
  product: "Product Inquiry Form",
  design: "Request Custom Design Form",
};

function customRequestPage(slug) {
  const requestType = requestPageTypes[slug] || "General Contact Form";
  shell(`
    <main>
      ${pageHero("Custom Quote", requestType, "Submit your details and inspiration photos. Every request saves to the website system and is routed to The Don Jewelers & Jewelry for follow-up.")}
      <section class="custom-form-section">
        ${customRequestForm({ formId: "request-form", requestType })}
      </section>
      ${aboutUs()}
    </main>
  `);
  wireRequestForm("request-form", "Thank you for your submission. Your request has been received and is currently under review. We will contact you regarding pricing, design details, and next steps.");
}

function adminDashboard() {
  shell(`
    <main>
      ${pageHero("Admin Dashboard", "Customer request notifications", "New quote requests, customer names, categories, and submission dates appear here after customers submit forms.")}
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Website request system</strong>
          <button class="button button-dark" id="refresh-admin-requests" type="button">Refresh</button>
        </div>
        <div id="admin-request-list" class="admin-request-list">
          <div class="empty-state">Loading requests...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Diamond API readiness</strong>
          <button class="button button-dark" id="refresh-diamond-api-status" type="button">Check Diamond API</button>
        </div>
        <div id="diamond-api-status" class="admin-request-list">
          <div class="empty-state">Checking diamond API status...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Product photo import drafts</strong>
          <div class="builder-actions">
            <button class="button button-gold" id="scan-product-photos" type="button">Scan Product Photos</button>
            <button class="button button-dark" id="refresh-product-drafts" type="button">Refresh Drafts</button>
          </div>
        </div>
        <p class="lede admin-helper">Copy product photos into <strong>assets/imported-products</strong>, then scan. Drafts stay private until approved.</p>
        <div id="admin-product-drafts" class="admin-product-grid">
          <div class="empty-state">Loading product drafts...</div>
        </div>
      </section>
      <section class="admin-dashboard-section">
        <div class="admin-toolbar">
          <strong>Approved imported products</strong>
          <button class="button button-dark" id="refresh-approved-products" type="button">Refresh Products</button>
        </div>
        <div id="admin-approved-products" class="admin-product-grid">
          <div class="empty-state">Loading approved products...</div>
        </div>
      </section>
      ${aboutUs()}
    </main>
  `);
  const escapeField = (value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const productEditor = (product, action, label) => `
    <article class="admin-product-card" data-id="${product.id}">
      <img src="${productImageSrc(product)}" alt="${product.alt || product.name}">
      <div class="admin-product-fields">
        <label>Product title<input data-field="name" value="${escapeField(product.name)}"></label>
        <label>Category<select data-field="category">${importCategories.map((category) => `<option ${category === product.category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
        <label>Short luxury description<textarea data-field="shortDescription" rows="3">${escapeField(product.shortDescription)}</textarea></label>
        <label>Specs / options<textarea data-field="specs" rows="4">${escapeField(product.specs)}</textarea></label>
        <label>Tags<input data-field="tags" value="${escapeField((product.tags || []).join(", "))}"></label>
        <label>Price table or Request Pricing<input data-field="priceLabel" value="${escapeField(product.priceLabel || "Request Pricing")}"></label>
        <div class="builder-actions">
          <button class="button button-gold" type="button" data-action="${action}">${label}</button>
          <button class="button button-light" type="button" data-action="${action === "approve" ? "delete-draft" : "delete-product"}">Delete</button>
        </div>
      </div>
    </article>
  `;
  const render = async () => {
    const host = document.getElementById("admin-request-list");
    const requests = JSON.parse(localStorage.getItem("donPendingCustomRequests") || "[]");
    host.innerHTML = requests.length ? requests.map((request) => `
        <article class="admin-request-card">
          <div>
            <p class="eyebrow">New request alert</p>
            <h2>${request.customer.fullName || "Unknown customer"}</h2>
            <p class="lede">${request.jewelry.productCategory || request.jewelry.requestType}</p>
          </div>
          <dl class="summary-list">
            <div><dt>Date submitted</dt><dd>${new Date(request.createdAt).toLocaleString()}</dd></div>
            <div><dt>Email</dt><dd>${request.customer.email}</dd></div>
            <div><dt>Phone</dt><dd>${request.customer.phone}</dd></div>
            <div><dt>Budget</dt><dd>${request.jewelry.budget || "Not provided"}</dd></div>
            <div><dt>Status</dt><dd>Saved in browser preview</dd></div>
          </dl>
          <p class="quote-note">${request.jewelry.notes || "No notes provided."}</p>
        </article>
      `).join("") : `<div class="empty-state">No customer requests saved yet.</div>`;
  };
  const productFromCard = (card) => {
    const product = { id: card.dataset.id };
    card.querySelectorAll("[data-field]").forEach((field) => {
      product[field.dataset.field] = field.value;
    });
    product.tags = String(product.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean);
    product.price = product.priceLabel === "Request Pricing" ? "Request Pricing" : Number(String(product.priceLabel).replace(/[^\d]/g, ""));
    return product;
  };
  const renderDrafts = async () => {
    const host = document.getElementById("admin-product-drafts");
    const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
    host.innerHTML = drafts.length ? drafts.map((draft) => productEditor(draft, "approve", "Approve Product")).join("") : `<div class="empty-state">No product drafts in this frontend-only preview.</div>`;
  };
  const renderApproved = async () => {
    const host = document.getElementById("admin-approved-products");
    const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
    host.innerHTML = approved.length ? approved.map((product) => productEditor(product, "save-product", "Approved")).join("") : `<div class="empty-state">No approved imported products in this frontend-only preview.</div>`;
  };
  const renderDiamondApiStatus = async () => {
    const host = document.getElementById("diamond-api-status");
    host.innerHTML = `<div class="empty-state">Checking live diamond API...</div>`;
    try {
      const response = await fetch("/api/diamonds?page=1", { headers: { Accept: "application/json" } });
      const payload = await response.json();
      if (!response.ok || !payload.ok) throw new Error(payload.error || "Diamond API request failed");
      host.innerHTML = `
        <article class="admin-request-card">
          <div>
            <p class="eyebrow">Live Diamond API</p>
            <h2>Connected to live inventory</h2>
            <p class="lede">The diamond viewer is using the server-side Labgrown Diamond API proxy.</p>
          </div>
          <dl class="summary-list">
            <div><dt>Status</dt><dd>Connected</dd></div>
            <div><dt>Products</dt><dd>${allProducts().length}</dd></div>
            <div><dt>Live diamonds</dt><dd>${payload.count || 0}</dd></div>
          </dl>
          <p class="quote-note">The API key is read by the server from an environment variable and is not exposed in frontend code.</p>
        </article>
      `;
    } catch (error) {
      host.innerHTML = `<div class="empty-state">Diamond API unavailable: ${htmlSafe(error.message)}.</div>`;
    }
  };
  document.getElementById("refresh-admin-requests").addEventListener("click", render);
  document.getElementById("refresh-diamond-api-status").addEventListener("click", renderDiamondApiStatus);
  document.getElementById("refresh-product-drafts").addEventListener("click", renderDrafts);
  document.getElementById("refresh-approved-products").addEventListener("click", renderApproved);
  document.getElementById("scan-product-photos").addEventListener("click", async () => {
    await renderDrafts();
  });
  document.getElementById("admin-product-drafts").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest(".admin-product-card");
    if (button.dataset.action === "approve") {
      const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
      const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
      localStorage.setItem("donProductDrafts", JSON.stringify(drafts.filter((draft) => draft.id !== card.dataset.id)));
      localStorage.setItem("donApprovedProducts", JSON.stringify([productFromCard(card), ...approved]));
      await loadApprovedProducts();
      await renderDrafts();
      await renderApproved();
    }
    if (button.dataset.action === "delete-draft") {
      const drafts = JSON.parse(localStorage.getItem("donProductDrafts") || "[]");
      localStorage.setItem("donProductDrafts", JSON.stringify(drafts.filter((draft) => draft.id !== card.dataset.id)));
      await renderDrafts();
    }
  });
  document.getElementById("admin-approved-products").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const card = button.closest(".admin-product-card");
    if (button.dataset.action === "delete-product") {
      const approved = JSON.parse(localStorage.getItem("donApprovedProducts") || "[]");
      localStorage.setItem("donApprovedProducts", JSON.stringify(approved.filter((product) => product.id !== card.dataset.id)));
      await loadApprovedProducts();
      await renderApproved();
    }
  });
  render();
  renderDiamondApiStatus();
  renderDrafts();
  renderApproved();
}

function cartPage() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const payableItems = payableCartItems();
  const payableTotal = payableItems.reduce((sum, item) => sum + item.price, 0);
  const paymentCancelled = new URLSearchParams((location.hash.split("?")[1] || "")).get("payment") === "cancelled";
  shell(`
    <main>
      ${pageHero("Cart", "Your saved custom jewelry")}
      <section class="cart-layout">
        <div class="cart-list">
          ${paymentCancelled ? `<div class="empty-state">Payment was cancelled. Your cart is still saved and ready when you want to pay.</div>` : ""}
          ${cart.length ? cart.map((item, index) => `
            <article class="cart-item">
              <img src="${cartImageSrc(item)}" alt="">
              <div><h3>${item.name}</h3><p class="muted">${Object.entries(item.selections).map(([k,v]) => `${k}: ${v}`).join(" | ")}</p></div>
              <strong>${item.pricingNote || money.format(item.price)}</strong>
              <button class="icon-button" type="button" data-remove="${index}">Remove</button>
            </article>`).join("") : `<div class="empty-state">Your cart is empty. Start with a custom jewelry piece.</div>`}
        </div>
        <aside class="summary-panel">
          <p class="eyebrow">Cart Summary</p>
          <div class="price-row"><span>Total</span><strong>${money.format(total)}</strong></div>
          ${payableItems.length ? stripeBuyButton(payableTotal) : ""}
          <a class="button button-dark" href="${cart.length ? "#/checkout" : "#/products"}">${cart.length ? "Checkout / Request Details" : "Shop Now"}</a>
          <p class="quote-note" id="payment-status" hidden></p>
        </aside>
      </section>
      ${aboutUs()}
    </main>
  `);
  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.remove), 1);
      localStorage.setItem("donCart", JSON.stringify(cart));
      cartPage();
    });
  });
}

function checkout() {
  const payableItems = payableCartItems();
  const payableTotal = payableItems.reduce((sum, item) => sum + item.price, 0);
  const checkoutParams = new URLSearchParams((location.hash.split("?")[1] || ""));
  const paymentSuccess = checkoutParams.get("payment") === "success";
  const cartSummary = cart.length
    ? cart.map((item) => `${item.name} - ${item.pricingNote || money.format(item.price)} - ${Object.entries(item.selections || {}).map(([key, value]) => `${key}: ${value}`).join(" | ")}`).join("\n")
    : "No saved cart items. Customer is requesting checkout/contact support.";
  shell(`
    <main>
      ${pageHero("Checkout", "Pay now or submit your jewelry inquiry", "Customers can pay upfront for priced items with secure checkout, then submit details after payment or send the request form first.")}
      <section class="cart-layout">
        <div class="cart-list">
          ${paymentSuccess ? `<div class="empty-state">Payment received. You can submit the details form now so we can confirm sizing, design notes, and next steps.</div>` : ""}
          ${cart.length ? cart.map((item) => `
            <article class="cart-item">
              <img src="${cartImageSrc(item)}" alt="">
              <div><h3>${item.name}</h3><p class="muted">${Object.entries(item.selections || {}).map(([key, value]) => `${key}: ${value}`).join(" | ")}</p></div>
              <strong>${item.pricingNote || money.format(item.price)}</strong>
            </article>
          `).join("") : `<div class="empty-state">No saved items yet. Submit the form below for direct checkout and quote support.</div>`}
        </div>
        <aside class="summary-panel">
          <p class="eyebrow">Checkout Summary</p>
          <div class="price-row"><span>Estimated total</span><strong>${cart.length ? money.format(cart.reduce((sum, item) => sum + item.price, 0)) : "Request Pricing"}</strong></div>
          ${payableItems.length ? stripeBuyButton(payableTotal) : ""}
          <p class="quote-note" id="payment-status" hidden></p>
          <p class="quote-note">Secure Stripe checkout opens through the Pay Now link and embedded Stripe Buy Button.</p>
        </aside>
      </section>
      <section class="custom-form-section">
        ${customRequestForm({ formId: "checkout-form", requestType: "Product Inquiry Form", productCategory: "Checkout / Cart Inquiry", productName: "Website checkout inquiry" })}
      </section>
      ${aboutUs()}
    </main>
  `);
  const form = document.getElementById("checkout-form");
  if (form) {
    form.dataset.cartSummary = cartSummary;
    const notes = form.elements.notes;
    if (notes && cart.length) notes.value = `I would like to move forward with these saved items:\n${cartSummary}`;
  }
  wireRequestForm("checkout-form", "Thank you for your checkout inquiry. Your request has been received and is currently under review. We will contact you regarding pricing, payment, and next steps.");
}

function terms() {
  const sections = [
    ["1. Custom Jewelry Policy", "All custom jewelry projects are made-to-order and manufactured specifically for the client. Custom projects include but are not limited to engagement rings, pendants, grillz, watches, bracelets, earrings, necklaces, nameplates, custom CAD projects, and one-of-one jewelry pieces. Once CAD work, stone sourcing, manufacturing preparation, or production has begun, all deposits become non-refundable. All custom jewelry sales are final."],
    ["2. CAD Design Deposits", "A non-refundable CAD/design deposit may be required before any custom project begins. CAD deposits cover CAD rendering, designer labor, stone sourcing, production preparation, vendor sourcing time, and manufacturing planning."],
    ["3. Production, Timelines, and Revisions", "Estimated timelines are estimates only and may change due to stone availability, design revisions, vendor scheduling, shipping, inspection, or manufacturing conditions. Additional revisions or changes may require additional payment and may extend the delivery window."],
    ["4. Payments and Balances", "Clients are responsible for all approved balances before pickup, delivery, shipping, or release of the finished piece. Orders may not be released until payment is complete."],
    ["5. Natural Stones and Custom Materials", "Natural stones, lab-grown diamonds, gemstones, gold, platinum, and other materials can vary in appearance, weight, color, clarity, and availability. Final pieces may have normal handmade and material variations."],
    ["6. Shipping, Pickup, and Risk", "Shipping, insurance, delivery, and pickup arrangements are handled according to the order agreement. The Don Jewelers & Jewelry is not responsible for delays outside its control once a carrier or third party is involved."],
    ["7. Final Sale Agreement", "By placing an order, the client confirms that they understand custom jewelry work is final sale and that deposits are not refundable after design, sourcing, or production begins."],
  ];
  shell(`
    <main>
      ${pageHero("Legal", "Terms and Conditions", "", `<button class="button button-gold" id="print-terms" type="button">Print / Save Terms</button>`)}
      <section class="terms-viewer-section">
        <article class="terms-document">
          <p class="terms-intro">By purchasing, placing a deposit, requesting a CAD design, or entering production with The Don Jewelers & Jewelry, the client agrees to all terms and conditions listed below.</p>
          ${sections.map(([heading, body]) => `<h2>${heading}</h2><p>${body}</p>`).join("")}
        </article>
      </section>
    </main>
  `);
  document.getElementById("print-terms")?.addEventListener("click", () => window.print());
}

function router() {
  resetPageScroll();
  const hash = location.hash || "#/";
  const cleanHash = hash.slice(2);
  const [path, query = ""] = cleanHash.split("?");
  const parts = path.split("/");
  const params = new URLSearchParams(query);
  if (hash === "#/" || hash === "") return home();
  if (path === "build-engagement-ring") return engagementRingBuilder();
  if (path === "select-diamond") return diamondInventoryPage(params);
  if (path === "products") return productGrid(allProducts(), "Shop All Luxury Jewelry with The Don");
  if (path === "admin") return adminDashboard();
  if (parts[0] === "request") return customRequestPage(parts[1]);
  if (parts[0] === "category") return category(parts[1]);
  if (parts[0] === "product") return productDetail(parts[1]);
  if (path === "custom-orders") return customOrders();
  if (path === "cart") return cartPage();
  if (path === "checkout") return checkout();
  if (path === "terms") return terms();
  home();
}

function resetPageScroll() {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 0);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", resetPageScroll);
loadApprovedProducts().finally(() => {
  router();
  hideSplashScreen();
});

