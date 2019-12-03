var surahListArray = [
  "الفاتحۃ",
  "البقرۃ",
  "آل عمران",
  "النسآء",
  "المآئدۃ",
  "الانعام",
  "الاعراف",
  "الانفال",
  "التوبۃ",
  "یونس",
  "ھود",
  "یوسف",
  "الرعد",
  "ابراھیم",
  "الحجر",
  "النحل",
  "الاسراء",
  "الکہف",
  "مریم",
  "طٰہٰ",
  "الانبیآء",
  "الحج",
  "المؤمنون",
  "النور",
  "الفرقان",
  "الشعراء",
  "النمل",
  "القصص",
  "العنکبوت",
  "الروم",
  "لقمٰن",
  "السجدۃ",
  "الاحزاب",
  "سبا",
  "فاطر",
  "یٰسٓ",
  "الصّٰفّٰت",
  "صٓ",
  "الزمر",
  "الغافر",
  "فصلت",
  "الشُّورٰی",
  "الزُّخرُف",
  "الدُّخَان",
  "الجاثیہ",
  "الاحقاف",
  "محمد",
  "الفتح",
  "الحجرات",
  "قٓ",
  "الذّٰریٰت",
  "الطّور",
  "النجم",
  "القمر",
  "الرحمٰن",
  "الواقعۃ",
  " الحدید",
  "المجادلۃ",
  "الحشر",
  " الممتحنۃ",
  "الصّف",
  "الجُمعۃ",
  "المُنٰفِقُون",
  " التّغابن",
  "الطّلاق",
  "التحریم",
  "الملک",
  "القلم",
  " الحاقہ",
  "المعارج",
  "نُوح",
  "الجن",
  "المزّمّل",
  "المدّثّر",
  "القیٰمۃ",
  "الانسان",
  "المرسلٰت",
  "النَّبَاِ",
  "النّٰزِعٰتِ",
  "عَبَسَ",
  " التَّکوِیر",
  " الاِنفِطَار",
  "المُطَفِّفِین",
  "الاِنشِقَاق",
  "البُرُوج",
  "الطَّارق",
  "الاَعلیٰ",
  "الغَاشِیَۃ",
  "الفجر",
  "البلد",
  " الشَّمس",
  "الَّیل",
  "الضُّحٰی",
  "الم نشرح",
  "التّین",
  "العَلَق",
  " القدر",
  "البیّنۃ",
  "الزّلزال",
  "العٰدیٰت",
  " القارعۃ",
  "التّکاثُر",
  " العصر",
  "الھُمَزَۃ",
  "الفِیل",
  "قُرَیش",
  "المَاعُون",
  "الکوثر",
  "الکٰفرون",
  "النَّصَر",
  "اللَّھب",
  "الاخلاص",
  "الفَلَق",
  " النَّاس" ];

  var surahPointers = [0,7,293,493,669,789,954,1160,1235,1364,1473,1596,1707,1750,1802,1901,2029,2140,2250,2348,2483,2595,2673,2791,2855,2932,3159,3252,3340,3409,3469,3503,3533,3606,3660,3705,3788,3970,4058,4133,4218,4272,4325,4414,4473,4510,4545,4583,4612,4630,4675,4735,4784,4846,4901,4979,5075,5104,5126,5150,5163,5177,5188,5199,5217,5229,5241,5271,5323,5375,5419,5447,5475,5495,5551,5591,5622,5672,5712,5758,5800,5829,5848,5884,5909,5931,5948,5967,5993,6023,6043,6058,6079,6090,6098,6106,6125,6130,6138,6146,6157,6168,6176,6179,6188,6193,6197,6204,6207,6213,6216,6221,6225,6230];
var surahList = document.getElementById("SurahList");

for(var i=0; i<surahListArray.length; i++)
{
  surahList.options[i] = new Option(surahListArray[i]);
}

var quranTextContainer = document.getElementById("Quran-Text");
var btn = document.getElementById("clickButton");



 btn.addEventListener("click", function() {
  var surahNo = surahList.selectedIndex;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://unpkg.com/quran-json@1.0.1/json/quran/text.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData, surahNo);
     } else {
       console.log("We connected to the server, but it returned an error.");
     }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  
  
});

function renderHTML(data,surahNumber) {
  var htmlString = "";
  
  var start = surahPointers[surahNumber];
  var end = surahPointers[surahNumber+1];
  if(surahNumber==113)
  {
    var end = data.length;
  }
  for (i = start; i < end; i++) {
    htmlString += "<p>" + data[i].content +"</p>";

  }
  quranTextContainer.innerHTML= htmlString;
}